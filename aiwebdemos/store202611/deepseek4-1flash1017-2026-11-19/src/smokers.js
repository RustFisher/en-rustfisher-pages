import * as THREE from 'three';
import { toon, flat, glowSprite, makeCanvas } from './materials.js';
import { box, cyl, contactShadow } from './kit.js';
import { L } from './layout.js';

/**
 * 后巷抽烟的两个人
 * ------------------------------------------------------------------
 * 位置在便利店右侧服务门外的巷子里（贴墙站立，面向巷道）。
 * 人物由基础几何拼装，动画只有轻微摇晃 + 烟头明暗 + 烟团粒子，
 * 由装配时间线统一淡入，避免人物未出现就冒烟。
 */

const SPOT = L.smokeSpot;

/* 共用的柔雾贴图 */
const smokeTexture = (() => {
  const { canvas, ctx } = makeCanvas(128, 128);
  ctx.clearRect(0, 0, 128, 128);
  const blob = (cx, cy, r, alpha) => {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, `rgba(255,255,255,${alpha})`);
    g.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.42})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
  };
  blob(64, 64, 58, 0.85);
  blob(44, 54, 34, 0.45);
  blob(82, 76, 30, 0.34);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
})();

/** 两点之间的圆柱（四肢 / 烟身） */
function limb(a, b, r, mat, seg = 7) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.92, dir.length(), seg), mat);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

/** 低模小人，默认面向 +Z，脚底为原点 */
function buildPerson(cfg) {
  const {
    height = 1.7,
    coat = 0x3d4a60,
    pants = 0x2a3242,
    skin = 0xe6c3a2,
    hair = 0x1e1c22,
    beanie = null,
    lean = 0,
    headTilt = 0.1,
    phase = 0,
  } = cfg;

  const root = new THREE.Group();
  const body = new THREE.Group();
  const k = height / 1.72;
  body.scale.setScalar(k);
  body.rotation.x = lean;
  root.add(body);

  const shoeMat = toon(0x1a1e28);
  const coatMat = toon(coat);
  const pantsMat = toon(pants);
  const skinMat = toon(skin);
  const handMat = toon(skin);
  const hairMat = toon(hair);

  // 鞋 / 腿
  [-0.1, 0.1].forEach((x) => {
    const shoe = box(0.13, 0.075, 0.28, shoeMat, { line: false });
    shoe.position.set(x, 0.038, 0.03);
    body.add(shoe);

    const lower = cyl(0.062, 0.072, 0.42, pantsMat, { seg: 8 });
    lower.position.set(x, 0.28, 0);
    body.add(lower);

    const upper = cyl(0.085, 0.072, 0.46, pantsMat, { seg: 8 });
    upper.position.set(x, 0.71, 0);
    body.add(upper);
  });

  // 胯 / 躯干 / 衣领
  const hips = box(0.34, 0.16, 0.22, pantsMat, { line: false });
  hips.position.set(0, 0.99, 0);
  body.add(hips);

  const torso = box(0.38, 0.52, 0.24, coatMat);
  torso.position.set(0, 1.3, 0);
  body.add(torso);

  const collar = box(0.3, 0.06, 0.2, coatMat, { line: false });
  collar.position.set(0, 1.53, 0.02);
  body.add(collar);

  // 颈 / 头
  const neck = cyl(0.048, 0.055, 0.09, skinMat, { seg: 8 });
  neck.position.set(0, 1.58, 0.01);
  body.add(neck);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.66, 0.012);
  headGroup.rotation.x = headTilt;
  body.add(headGroup);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 12), skinMat);
  headGroup.add(head);

  if (beanie !== null) {
    const cap = cyl(0.121, 0.124, 0.105, toon(beanie), { seg: 14 });
    cap.position.set(0, 0.052, -0.004);
    headGroup.add(cap);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), toon(beanie));
    knob.position.set(0, 0.115, -0.004);
    headGroup.add(knob);
  } else {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.119, 14, 10), hairMat);
    cap.position.set(0, 0.045, -0.008);
    cap.scale.set(1.02, 0.82, 1.04);
    headGroup.add(cap);
  }

  // 手臂：一侧抬手夹烟，一侧自然垂下
  const arm = (side, elbow, hand, jointMat) => {
    const shoulder = new THREE.Vector3(0.2 * side, 1.48, 0);
    const el = new THREE.Vector3(...elbow);
    const hd = new THREE.Vector3(...hand);
    body.add(limb(shoulder, el, 0.058, jointMat));
    body.add(limb(el, hd, 0.05, jointMat));
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.054, 8, 6), jointMat);
    joint.position.copy(el);
    body.add(joint);
    const palm = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), handMat);
    palm.position.copy(hd);
    body.add(palm);
    return hd;
  };

  arm(1, [0.29, 1.25, 0.1], [0.12, 1.5, 0.17], coatMat);
  arm(-1, [-0.25, 1.27, 0.02], [-0.21, 1.06, 0.06], coatMat);

  // 烟 + 烟头
  const handPoint = new THREE.Vector3(0.12, 1.5, 0.17);
  const tip = new THREE.Vector3(0.17, 1.56, 0.29);
  body.add(limb(handPoint, tip, 0.011, flat(0xe6e1d4), 6));

  const ember = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), flat(0xff8a4a));
  ember.position.copy(tip);
  body.add(ember);

  const halo = glowSprite(0xff7a45, 0.52, 0);
  halo.position.copy(tip);
  body.add(halo);

  // 脚下接触阴影
  const shadow = contactShadow(0.95, 0.72, 0.42);
  shadow.position.set(0, 0.008, 0.03);
  root.add(shadow);

  return {
    root,
    body,
    headGroup,
    halo,
    tip: tip.clone().multiplyScalar(k),
    phase,
  };
}

/** 一根烟对应的一小团烟粒子 */
function createPuffs(root, tip) {
  const items = [];
  for (let i = 0; i < 12; i++) {
    const mat = new THREE.SpriteMaterial({
      map: smokeTexture,
      color: 0xcfdaea,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: true,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.001, 0.001, 1);
    sprite.visible = false;
    sprite.renderOrder = 5;
    root.add(sprite);
    items.push({
      sprite,
      mat,
      age: 0,
      life: 0,
      dead: true,
      seed: 0,
      origin: new THREE.Vector3(),
      vel: new THREE.Vector3(),
    });
  }

  let cursor = 0;
  let timer = 0.8 + Math.random() * 0.7;

  return {
    update(dt, shown) {
      timer -= dt;
      if (shown > 0.02 && timer <= 0) {
        timer = 0.65 + Math.random() * 0.55;
        const it = items[cursor];
        cursor = (cursor + 1) % items.length;
        it.age = 0;
        it.life = 1.9 + Math.random() * 0.8;
        it.dead = false;
        it.seed = Math.random() * Math.PI * 2;
        it.origin.set(
          tip.x + (Math.random() - 0.5) * 0.03,
          tip.y + (Math.random() - 0.5) * 0.02,
          tip.z + (Math.random() - 0.5) * 0.03
        );
        it.vel.set(
          -0.03 + Math.random() * 0.04,
          0.2 + Math.random() * 0.07,
          0.045 + Math.random() * 0.05
        );
      }

      for (const it of items) {
        if (it.dead) continue;
        it.age += dt;
        const u = it.age / it.life;
        if (u >= 1) {
          it.dead = true;
          it.sprite.visible = false;
          it.mat.opacity = 0;
          continue;
        }

        const wobble = Math.sin(it.age * 2.1 + it.seed) * 0.035 * u;
        it.sprite.position.set(
          it.origin.x + it.vel.x * it.age + wobble,
          it.origin.y + it.vel.y * it.age,
          it.origin.z + it.vel.z * it.age - wobble * 0.6
        );

        const size = 0.1 + u * 0.46;
        it.sprite.scale.set(size, size, 1);
        it.mat.opacity = Math.pow(Math.sin(Math.PI * u), 1.35) * 0.2 * shown;
        it.sprite.visible = true;
      }
    },
  };
}

/** 服务门外的立式烟灰桶 */
function buildAshtray(x, z, y) {
  const g = new THREE.Group();
  g.position.set(x, y, z);

  const pot = cyl(0.13, 0.115, 0.4, toon(0x4a5263), { seg: 12, line: true });
  pot.position.y = 0.2;
  g.add(pot);

  const sand = new THREE.Mesh(new THREE.CircleGeometry(0.11, 14), toon(0x8e8474));
  sand.rotation.x = -Math.PI / 2;
  sand.position.y = 0.402;
  g.add(sand);

  [
    [0.02, 0.02, 0.5],
    [-0.04, -0.03, -0.8],
  ].forEach(([bx, bz, ry]) => {
    const butt = cyl(0.012, 0.012, 0.075, flat(0xe6e1d4), { seg: 6 });
    butt.rotation.z = Math.PI / 2;
    butt.rotation.y = ry;
    butt.position.set(bx, 0.41, bz);
    g.add(butt);

    const ember = new THREE.Mesh(new THREE.SphereGeometry(0.014, 6, 5), flat(0xff8a4a));
    ember.position.set(bx + Math.cos(ry) * 0.036, 0.41, bz - Math.sin(ry) * 0.036);
    g.add(ember);
  });

  const shadow = contactShadow(0.6, 0.5, 0.45);
  shadow.position.y = 0.006;
  g.add(shadow);

  return g;
}

/** 服务门上方的壁灯（只做自发光与光晕，不加真实光源） */
function buildDoorLamp(lamp) {
  const g = new THREE.Group();

  const fixture = box(0.1, 0.14, 0.34, toon(0x2b3242), { line: false });
  fixture.position.set(lamp.x + 0.05, lamp.y, lamp.z);
  g.add(fixture);

  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.085), flat(0xffe0b0));
  face.position.set(lamp.x + 0.11, lamp.y - 0.02, lamp.z);
  face.rotation.y = Math.PI / 2;
  g.add(face);

  const glow = glowSprite(0xffca85, 2.0, 0.2);
  glow.position.set(lamp.x + 0.22, lamp.y - 0.02, lamp.z);
  g.add(glow);

  return { group: g, glow };
}

export function buildSmokers(builder) {
  const group = new THREE.Group();
  group.name = 'smokers';

  const cfgA = SPOT.a;
  const cfgB = SPOT.b;

  const a = buildPerson({
    height: cfgA.height,
    lean: cfgA.lean,
    phase: cfgA.phase,
    coat: 0x3f4a5e,
    pants: 0x2a3242,
    headTilt: 0.08,
  });
  a.root.position.set(cfgA.x, SPOT.y, cfgA.z);
  a.root.rotation.y = cfgA.ry;
  a.root.name = 'smokerA';
  group.add(a.root);

  const b = buildPerson({
    height: cfgB.height,
    lean: cfgB.lean,
    phase: cfgB.phase,
    coat: 0x5a4a3e,
    pants: 0x33302f,
    beanie: 0x2a3444,
    headTilt: 0.13,
  });
  b.root.position.set(cfgB.x, SPOT.y, cfgB.z);
  b.root.rotation.y = cfgB.ry;
  b.root.name = 'smokerB';
  group.add(b.root);

  group.add(buildAshtray(SPOT.ashtray.x, SPOT.ashtray.z, SPOT.y));

  const lamp = buildDoorLamp(SPOT.lamp);
  group.add(lamp.group);

  const puffsA = createPuffs(a.root, a.tip);
  const puffsB = createPuffs(b.root, b.tip);

  builder.add(group, { delay: 3.3, dur: 0.65, mode: 'pop' });

  let clock = 0;

  return {
    group,

    update(dt, t) {
      clock += dt;
      const shown = THREE.MathUtils.smoothstep(t, 3.9, 4.6);

      [a, b].forEach((person) => {
        const { body, headGroup, halo, phase } = person;
        body.rotation.z = Math.sin(clock * 0.7 + phase) * 0.015;
        headGroup.rotation.y = Math.sin(clock * 0.45 + phase * 2.1) * 0.06;

        const inhale = Math.pow(Math.max(0, Math.sin(clock * 0.85 + phase)), 8);
        halo.material.opacity = shown * (0.18 + inhale * 0.55);
      });

      puffsA.update(dt, shown);
      puffsB.update(dt, shown);

      lamp.glow.material.opacity = shown * (0.18 + Math.sin(clock * 1.3) * 0.02);
    },
  };
}
