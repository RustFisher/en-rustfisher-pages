import * as THREE from 'three';
import { toon, flat, canvasTexture } from './materials.js';
import { contactShadow } from './kit.js';
import { L } from './layout.js';

/**
 * 便利店门口屋檐下的小猫
 * ------------------------------------------------------------------
 * 坐着 → 跑到远处 → 再坐一会 → 跑回来，循环。
 * 姿态用关节角度插值，跑动用一条直线路径 + 缓入缓出。
 */

const CAT = L.cat;

const furMat = toon(0xd8c2a0);
const furDark = toon(0xb9a184);
const pawMat = toon(0xe9ddc9);
const innerMat = toon(0xd99a9a);
const noseMat = toon(0x6b4a4a);
const eyeMat = flat(0xcdf7b4);
const collarMat = toon(0xb23b3b);

const heartTexture = canvasTexture(64, 64, (ctx, w, h) => {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#ff9db4';
  ctx.beginPath();
  ctx.moveTo(w / 2, h - 8);
  ctx.bezierCurveTo(-6, 32, 18, 2, w / 2, 20);
  ctx.bezierCurveTo(46, 2, 70, 32, w / 2, h - 8);
  ctx.closePath();
  ctx.fill();
});

const STAND = {
  y: 0.255,
  pitch: 0.04,
  headX: -0.02,
  legF: 0,
  legR: 0,
  tailX: 0.8,
  tailY: 0.1,
  tailJ1: 0.15,
  tailJ2: 0.12,
};

const SIT = {
  y: 0.16,
  pitch: -0.5,
  headX: 0.12,
  legF: 0.52,
  legR: -1.15,
  tailX: 0.35,
  tailY: 0.9,
  tailJ1: 0.8,
  tailJ2: 0.6,
};

const NAP = {
  y: 0.135,
  pitch: 0.02,
  headX: 0.3,
  legF: -1.15,
  legR: -1.15,
  tailX: 0.2,
  tailY: 1.15,
  tailJ1: 0.95,
  tailJ2: 0.7,
};

const MOODS = {
  morning: { sit: [4, 6], run: [2.0, 2.6], nap: false },
  noon: { sit: [12, 18], run: [2.8, 3.6], nap: true },
  dusk: { sit: [3, 5], run: [1.5, 1.9], nap: false },
  night: { sit: [5, 8], run: [1.8, 2.3], nap: false },
};

const REST_WEATHER = { rain: 1.3, cloudy: 1.1, clear: 1 };
const RUN_WEATHER = { rain: 1.15, cloudy: 1.05, clear: 1 };

const lerp = THREE.MathUtils.lerp;

function ellipsoid(rx, ry, rz, mat, seg = 14) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, seg, 10), mat);
  mesh.scale.set(rx, ry, rz);
  return mesh;
}

function makeLeg(x, y, z, r, length) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);

  const leg = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.9, length, 7), furMat);
  leg.position.y = -length / 2;
  pivot.add(leg);

  const paw = ellipsoid(r * 1.15, r * 0.62, r * 1.45, pawMat);
  paw.position.set(0, -length - 0.01, 0.01);
  pivot.add(paw);

  return pivot;
}

function makeTail() {
  const root = new THREE.Group();
  root.position.set(0, 0.045, -0.235);

  const seg = (parent, len, r, mat) => {
    const pivot = new THREE.Group();
    parent.add(pivot);

    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.86, len, 7), mat);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.z = -len / 2;
    pivot.add(mesh);

    const joint = new THREE.Group();
    joint.position.z = -len;
    pivot.add(joint);
    return { pivot, joint };
  };

  const a = seg(root, 0.1, 0.022, furMat);
  const b = seg(a.joint, 0.095, 0.02, furMat);
  const c = seg(b.joint, 0.085, 0.018, furDark);

  const tip = ellipsoid(0.02, 0.02, 0.02, furDark, 8);
  tip.position.z = -0.085;
  c.pivot.add(tip);

  return { root, j1: a.joint, j2: b.joint };
}

export function buildCat() {
  const root = new THREE.Group();
  root.name = 'cat';
  root.visible = false;
  root.position.set(CAT.shelter.home.x, CAT.shelter.y, CAT.shelter.home.z);
  root.rotation.y = Math.PI / 2;

  const shadow = contactShadow(0.72, 0.42, 0.45);
  shadow.position.set(0, 0.006, 0);
  root.add(shadow);

  const body = new THREE.Group();
  body.position.set(0, STAND.y, 0);
  root.add(body);

  body.add(ellipsoid(0.13, 0.115, 0.24, furMat));
  const chest = ellipsoid(0.105, 0.1, 0.11, furMat);
  chest.position.set(0, 0.012, 0.16);
  body.add(chest);

  // 后腿根部，坐下时撑起轮廓
  [-1, 1].forEach((sx) => {
    const thigh = ellipsoid(0.075, 0.09, 0.115, furMat);
    thigh.position.set(sx * 0.078, -0.045, -0.12);
    body.add(thigh);
  });

  // 头
  const head = new THREE.Group();
  head.position.set(0, 0.075, 0.26);
  body.add(head);

  head.add(ellipsoid(0.088, 0.082, 0.085, furMat));
  const muzzle = ellipsoid(0.048, 0.036, 0.032, pawMat);
  muzzle.position.set(0, -0.026, 0.078);
  head.add(muzzle);

  const nose = ellipsoid(0.012, 0.009, 0.01, noseMat, 8);
  nose.position.set(0, -0.014, 0.108);
  head.add(nose);

  const eyes = [];
  const ears = [];

  [-1, 1].forEach((sx) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.034, 0.062, 4), furMat);
    ear.position.set(sx * 0.052, 0.078, -0.008);
    ear.rotation.z = -sx * 0.22;
    head.add(ear);
    ears.push({ mesh: ear, baseZ: -sx * 0.22, side: sx });

    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.019, 0.038, 4), innerMat);
    inner.position.set(sx * 0.052, 0.075, 0.002);
    inner.rotation.z = -sx * 0.22;
    head.add(inner);

    const eye = ellipsoid(0.012, 0.014, 0.01, eyeMat, 8);
    eye.position.set(sx * 0.034, 0.006, 0.082);
    head.add(eye);
    eyes.push(eye);
  });

  // 项圈
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.011, 6, 16), collarMat);
  collar.position.set(0, 0.022, 0.2);
  collar.rotation.x = Math.PI / 2;
  body.add(collar);

  // 四肢
  const legFL = makeLeg(-0.075, -0.045, 0.16, 0.026, 0.19);
  const legFR = makeLeg(0.075, -0.045, 0.16, 0.026, 0.19);
  const legRL = makeLeg(-0.08, -0.05, -0.15, 0.028, 0.19);
  const legRR = makeLeg(0.08, -0.05, -0.15, 0.028, 0.19);
  body.add(legFL, legFR, legRL, legRR);

  const tail = makeTail();
  body.add(tail.root);

  // 点击命中区（比猫略大，方便点到）
  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(0.95, 0.8, 0.95),
    new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
      colorWrite: false,
    })
  );
  hit.position.set(0, 0.3, 0);
  hit.name = 'catHit';
  root.add(hit);

  // 被摸时飘起的小爱心
  const heart = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: heartTexture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    })
  );
  heart.position.set(0, 0.66, 0);
  heart.scale.set(0.2, 0.2, 1);
  heart.visible = false;
  heart.renderOrder = 6;
  root.add(heart);

  const HOME = new THREE.Vector3();
  const FAR = new THREE.Vector3();

  let state = 'sitHome';
  let stateT = 0;
  let stateDur = 5;
  let runDur = 2.0;
  let yaw = Math.PI / 2;
  let yawTarget = Math.PI / 2;
  let gait = 0;
  let blend = 1;
  let lie = 0;
  let active = false;
  let clock = 0;
  let timeOfDay = 'night';
  let skyWeather = 'rain';
  let petTimer = 0;
  let petBlend = 0;
  let zone = 'shelter';
  let relocate = null;
  let zoneCooldown = 0;
  let action = 'idle';
  let actionT = 0;
  let actionCooldown = 4 + Math.random() * 5;
  let socialTimer = 0;
  let socialTarget = null;
  let socialBlend = 0;
  let groomBlend = 0;
  let yawnBlend = 0;
  let groomSign = 1;
  let blinkPhase = Math.random() * Math.PI * 2;
  let flickPhase = Math.random() * Math.PI * 2;

  function applyZone(name, snap) {
    const def = CAT[name] || CAT.shelter;
    zone = name;
    HOME.set(def.home.x, def.y, def.home.z);
    FAR.set(def.far.x, def.y, def.far.z);

    if (snap) {
      root.position.copy(HOME);
      yaw = Math.PI / 2;
      yawTarget = yaw;
      root.rotation.y = yaw;
    }
  }

  applyZone('shelter', true);

  const mood = () => MOODS[timeOfDay] || MOODS.night;

  const sitDuration = () => {
    const [a, b] = mood().sit;
    const mul = REST_WEATHER[skyWeather] || 1;
    return (a + Math.random() * (b - a)) * mul;
  };

  const runDuration = () => {
    const [a, b] = mood().run;
    const mul = RUN_WEATHER[skyWeather] || 1;
    return (a + Math.random() * (b - a)) * mul;
  };

  const shortest = (a, b) => {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  };

  const enterSit = (next, dur = sitDuration()) => {
    state = next;
    stateT = 0;
    stateDur = dur;
    yawTarget = next === 'sitFar' ? -Math.PI / 2 : Math.PI / 2;
  };

  const enterRun = (next) => {
    state = next;
    stateT = 0;
    runDur = runDuration();
    yawTarget = next === 'runOut' ? Math.PI / 2 : -Math.PI / 2;
  };

  return {
    group: root,
    hit,
    get state() {
      return state;
    },
    get position() {
      return root.position;
    },

    get lying() {
      return lie;
    },

    get petting() {
      return petTimer > 0;
    },

    get zone() {
      return zone;
    },

    get relocating() {
      return relocate !== null;
    },

    get action() {
      return action;
    },

    get groomLevel() {
      return groomBlend;
    },

    get yawnLevel() {
      return yawnBlend;
    },

    get canPlay() {
      return (
        active &&
        petTimer <= 0 &&
        !relocate &&
        socialTimer <= 0 &&
        (state === 'sitHome' || state === 'sitFar')
      );
    },

    get playing() {
      return socialTimer > 0;
    },

    beginPlay(position) {
      if (!this.canPlay) return false;
      socialTimer = 5.5;
      socialTarget = position;
      action = 'idle';
      actionCooldown = 4 + Math.random() * 3;
      return true;
    },

    endPlay() {
      socialTimer = 0;
      socialTarget = null;
    },

    pet() {
      if (active && socialTimer <= 0) petTimer = 2.2;
    },

    update(dt, t, mode = 'night', weather = 'rain', rainAmount = 1) {
      timeOfDay = MOODS[mode] ? mode : 'night';
      skyWeather = weather;

      const appear = THREE.MathUtils.smoothstep(t, 4.25, 4.85);
      root.visible = appear > 0.001;
      root.scale.setScalar(0.001 + 0.999 * appear);

      const petting = petTimer > 0;
      const socialActive = socialTimer > 0;

      let wantZone = zone;
      if (zone === 'road' && rainAmount > 0.5) wantZone = 'shelter';
      else if (zone === 'shelter' && rainAmount < 0.15) wantZone = 'road';

      if (!active) {
        if (rainAmount > 0.5 && zone !== 'shelter') applyZone('shelter', true);
        else if (rainAmount <= 0.5 && zone !== 'road') applyZone('road', true);

        if (t > 4.9) {
          active = true;
          stateT = 0;
          stateDur = sitDuration();
        } else {
          blend = 1;
        }
      } else {
        clock += dt;
        if (zoneCooldown > 0) zoneCooldown = Math.max(0, zoneCooldown - dt);
        if (petting) petTimer = Math.max(0, petTimer - dt);
        if (socialActive) socialTimer = Math.max(0, socialTimer - dt);
        if (!petting && !socialActive) stateT += dt;
      }

      if (active) {
        // 天气变化时先走到新的活动区域，再恢复坐/跑
        if (!relocate && !petting && !socialActive && zoneCooldown <= 0 && wantZone !== zone) {
          const def = CAT[wantZone];
          const from = root.position.clone();
          const useFar = Math.abs(from.x - def.far.x) < Math.abs(from.x - def.home.x);
          const aim = useFar ? def.far : def.home;

          applyZone(wantZone, false);
          relocate = {
            from,
            to: new THREE.Vector3(aim.x, def.y, aim.z),
            t: 0,
            dur: Math.max(0.9, from.distanceTo(new THREE.Vector3(aim.x, def.y, aim.z)) / 1.2),
            sit: useFar ? 'sitFar' : 'sitHome',
          };
          state = 'relocate';
          stateT = 0;
          yawTarget = Math.atan2(relocate.to.x - from.x, relocate.to.z - from.z);
        }

        if (relocate) {
          if (!petting) {
            relocate.t += dt;
            const p = Math.min(1, relocate.t / relocate.dur);
            const e = p * p * (3 - 2 * p);
            root.position.lerpVectors(relocate.from, relocate.to, e);

            if (p >= 1) {
              state = relocate.sit;
              stateT = 0;
              stateDur = sitDuration();
              zoneCooldown = 2.5;
              yawTarget = state === 'sitFar' ? -Math.PI / 2 : Math.PI / 2;
              relocate = null;
            }
          }
        } else if (!petting && !socialActive) {
          if (state === 'sitHome') {
            if (stateT > stateDur) enterRun('runOut');
          } else if (state === 'sitFar') {
            if (stateT > stateDur) enterRun('runBack');
          } else if (state === 'runOut') {
            const p = THREE.MathUtils.clamp((stateT - 0.25) / runDur, 0, 1);
            const e = p * p * (3 - 2 * p);
            root.position.lerpVectors(HOME, FAR, e);
            if (p >= 1) enterSit('sitFar');
          } else if (state === 'runBack') {
            const p = THREE.MathUtils.clamp((stateT - 0.25) / runDur, 0, 1);
            const e = p * p * (3 - 2 * p);
            root.position.lerpVectors(FAR, HOME, e);
            if (p >= 1) enterSit('sitHome');
          }
        }

        if (socialActive && socialTarget) {
          const sdx = socialTarget.x - root.position.x;
          const sdz = socialTarget.z - root.position.z;
          if (Math.hypot(sdx, sdz) > 0.01) yawTarget = Math.atan2(sdx, sdz);
        }

        yaw += shortest(yaw, yawTarget) * Math.min(1, dt * 7);
        root.rotation.y = yaw;
      }

      petBlend += ((petting ? 1 : 0) - petBlend) * Math.min(1, dt * 10);
      socialBlend += ((socialActive ? 1 : 0) - socialBlend) * Math.min(1, dt * 8);

      const resting = state === 'sitHome' || state === 'sitFar';
      const running =
        active &&
        !petting &&
        ((state === 'relocate' && relocate && relocate.t > 0.08) ||
          ((state === 'runOut' || state === 'runBack') && stateT > 0.25));

      const target = running || socialActive ? 0 : 1;
      blend += (target - blend) * Math.min(1, dt * 9);

      // 中午犯困：在长坐时趴下，眼睛眯起；被摸时先抬头
      const napTarget = active && resting && mood().nap && stateT > 2.5 && !petting && !socialActive ? 1 : 0;
      lie += (napTarget - lie) * Math.min(1, dt * 5);

      // 坐着时的随机小动作：舔爪 / 打哈欠
      const canIdleAction = active && resting && !petting && !relocate && lie < 0.45;
      if (!canIdleAction && action !== 'idle') {
        action = 'idle';
        actionCooldown = 2 + Math.random() * 3;
      } else if (action === 'idle' && canIdleAction) {
        actionCooldown -= dt;
        if (actionCooldown <= 0) {
          const roll = Math.random();
          if (roll < 0.55) {
            action = 'groom';
            actionT = 2.2 + Math.random() * 1.2;
            groomSign = Math.random() < 0.5 ? -1 : 1;
          } else if (roll < 0.8) {
            action = 'yawn';
            actionT = 1.2 + Math.random() * 0.4;
          } else {
            actionCooldown = 3 + Math.random() * 3;
          }
        }
      } else if (action !== 'idle') {
        actionT -= dt;
        if (actionT <= 0) {
          action = 'idle';
          actionCooldown = 5 + Math.random() * 5;
        }
      }

      groomBlend += ((action === 'groom' ? 1 : 0) - groomBlend) * Math.min(1, dt * 10);
      yawnBlend += ((action === 'yawn' ? 1 : 0) - yawnBlend) * Math.min(1, dt * 8);

      const blink = Math.pow(Math.max(0, Math.sin(clock * 0.8 + blinkPhase)), 28);
      const flick = Math.pow(Math.max(0, Math.sin(clock * 0.55 + flickPhase)), 24);

      const mix = (stand, sit, nap) => lerp(lerp(stand, sit, blend), nap, lie);

      gait += dt * (2 + (running ? 13 : 0));
      const run = running ? 1 - blend : 0;

      const bob = run * Math.sin(gait * 2) * 0.007;
      const breathe = lie * Math.sin(clock * 1.1) * 0.002;

      body.position.y =
        mix(STAND.y, SIT.y, NAP.y) +
        bob +
        breathe +
        yawnBlend * 0.008 +
        socialBlend * Math.abs(Math.sin(clock * 9)) * 0.012;
      body.rotation.x =
        mix(STAND.pitch, SIT.pitch, NAP.pitch) +
        run * 0.05 -
        yawnBlend * 0.04 -
        socialBlend * 0.06 +
        socialBlend * Math.sin(clock * 9) * 0.04;
      body.rotation.z =
        run * Math.sin(gait) * 0.025 +
        petBlend * Math.sin(clock * 9) * 0.02 +
        groomBlend * Math.sin(clock * 4) * 0.015 +
        socialBlend * Math.sin(clock * 7) * 0.04;

      head.rotation.x =
        mix(STAND.headX, SIT.headX, NAP.headX) +
        run * Math.sin(gait * 2) * 0.035 -
        petBlend * 0.2 -
        yawnBlend * 0.24 -
        groomBlend * 0.12 +
        groomBlend * Math.sin(clock * 9) * 0.05 -
        socialBlend * Math.sin(clock * 10) * 0.12;
      head.rotation.y =
        blend * (1 - lie) * Math.sin(clock * 0.6 + 1.7) * 0.35 +
        petBlend * Math.sin(clock * 6) * 0.12 +
        groomSign * 0.2 * groomBlend +
        socialBlend * Math.sin(clock * 5) * 0.18;

      const closed = Math.min(0.95, Math.max(lie * 0.88, blink * 0.85, yawnBlend * 0.8));
      eyes.forEach((eye) => {
        eye.scale.y = 0.014 * (1 - closed);
      });

      const swing = Math.sin(gait) * 0.65 * run;
      const legF = mix(STAND.legF, SIT.legF, NAP.legF);
      const legR = mix(STAND.legR, SIT.legR, NAP.legR);
      legFL.rotation.x = legF + swing;
      legFR.rotation.x = legF - swing;
      legRL.rotation.x = legR - swing;
      legRR.rotation.x = legR + swing;

      if (groomBlend > 0.01) {
        (groomSign < 0 ? legFL : legFR).rotation.x -= 1.35 * groomBlend;
      }

      if (socialBlend > 0.01) {
        const swipe = Math.sin(clock * 6.5);
        if (swipe > 0) legFR.rotation.x -= swipe * 0.95 * socialBlend;
        else legFL.rotation.x += swipe * 0.95 * socialBlend;
      }

      const tailX = mix(STAND.tailX, SIT.tailX, NAP.tailX);
      const tailY = mix(STAND.tailY, SIT.tailY, NAP.tailY);
      const tailJ1 = mix(STAND.tailJ1, SIT.tailJ1, NAP.tailJ1);
      const tailJ2 = mix(STAND.tailJ2, SIT.tailJ2, NAP.tailJ2);
      tail.root.rotation.x = tailX + Math.sin(clock * 1.7) * 0.06 * (1 - lie);
      tail.root.rotation.y =
        tailY +
        Math.sin(clock * 1.1) * 0.12 * (1 - lie) +
        petBlend * Math.sin(clock * 8) * 0.16 +
        flick * 0.3 * (1 - lie) +
        socialBlend * (0.35 + Math.sin(clock * 7) * 0.2);
      tail.j1.rotation.y = tailJ1 + Math.sin(clock * 1.5 + 0.8) * 0.15 * (1 - lie);
      tail.j2.rotation.y = tailJ2 + Math.sin(clock * 1.9 + 1.6) * 0.18 * (1 - lie);

      const twitch = Math.max(blink * 0.4, Math.pow(Math.max(0, Math.sin(clock * 1.9 + blinkPhase * 0.7)), 30));
      ears.forEach(({ mesh, baseZ, side }) => {
        mesh.rotation.z = baseZ + side * 0.1 * twitch - side * 0.18 * socialBlend;
      });

      heart.visible = petBlend > 0.02;
      heart.material.opacity = petBlend * 0.92;
      heart.position.y = 0.66 + Math.sin(clock * 2.2) * 0.02 + petBlend * 0.03;
      const hs = 0.18 + petBlend * 0.07;
      heart.scale.set(hs, hs, 1);
    },
  };
}
