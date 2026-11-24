import * as THREE from 'three';
import { toon, flat, glowSprite, lightPoolTexture } from './materials.js';
import { box, cyl, contactShadow } from './kit.js';
import { L } from './layout.js';

/**
 * 过路车 car001
 * ------------------------------------------------------------------
 * 前街东行，红灯等待，绿灯发车，右转进入侧路后离场。
 * 车头灯用发光镜头 + 光晕 + 地面光斑模拟，光斑扫过湿地面和水洼。
 */

const ROAD_Y = 0.06;

const bodyMat = toon(0x35506b);
const cabinMat = toon(0x18232f);
const tireMat = toon(0x14171d);
const rimMat = toon(0x7e8798);
const bumperMat = toon(0x222a35);
const headMat = new THREE.MeshBasicMaterial({ color: 0x3a3326, toneMapped: false });
const tailMat = new THREE.MeshBasicMaterial({ color: 0x4a1515, toneMapped: false });

const HEAD_OFF = new THREE.Color(0x3a3326);
const HEAD_ON = new THREE.Color(0xfff1c9);

function makeWheel(x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0.24, z);

  const tire = cyl(0.22, 0.22, 0.16, tireMat, { seg: 12 });
  tire.rotation.z = Math.PI / 2;
  g.add(tire);

  const rim = cyl(0.11, 0.11, 0.17, rimMat, { seg: 10 });
  rim.rotation.z = Math.PI / 2;
  g.add(rim);

  return g;
}

export function createCar(scene) {
  const root = new THREE.Group();
  root.name = 'car001';
  root.visible = false;
  root.position.y = ROAD_Y;
  scene.add(root);

  const shadow = contactShadow(2.7, 1.3, 0.5);
  shadow.position.set(0, 0.008, 0);
  root.add(shadow);

  const body = new THREE.Group();
  root.add(body);

  const chassis = box(1.12, 0.4, 2.3, bodyMat);
  chassis.position.y = 0.55;
  chassis.castShadow = true;
  body.add(chassis);

  const cabin = box(1.0, 0.44, 1.2, cabinMat, { line: false });
  cabin.position.set(0, 0.92, -0.1);
  body.add(cabin);

  const roof = box(1.02, 0.06, 1.24, bodyMat, { line: false });
  roof.position.set(0, 1.17, -0.1);
  body.add(roof);

  const bumperF = box(1.14, 0.12, 0.14, bumperMat, { line: false });
  bumperF.position.set(0, 0.38, 1.17);
  body.add(bumperF);
  const bumperR = bumperF.clone();
  bumperR.position.z = -1.17;
  body.add(bumperR);

  [-0.58, 0.58].forEach((x) => {
    const mirror = box(0.12, 0.07, 0.16, cabinMat, { line: false });
    mirror.position.set(x, 0.94, 0.4);
    body.add(mirror);
  });

  // 车头灯
  [-0.34, 0.34].forEach((x) => {
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.09, 12), headMat);
    lens.position.set(x, 0.55, 1.16);
    body.add(lens);

    const glow = glowSprite(0xfff2cc, 0.55, 0);
    glow.position.set(x, 0.55, 1.24);
    body.add(glow);
    glow.userData.carGlow = 'head';
  });

  // 尾灯
  [-0.38, 0.38].forEach((x) => {
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), tailMat);
    lens.position.set(x, 0.56, -1.16);
    lens.rotation.y = Math.PI;
    body.add(lens);

    const glow = glowSprite(0xff4a3a, 0.4, 0.18);
    glow.position.set(x, 0.56, -1.22);
    body.add(glow);
    glow.userData.carGlow = 'tail';
  });

  const plate = box(0.36, 0.12, 0.02, flat(0xc9d3dd), { line: false });
  plate.position.set(0, 0.32, 1.2);
  body.add(plate);

  const wheels = [
    makeWheel(-0.54, 0.72),
    makeWheel(0.54, 0.72),
    makeWheel(-0.54, -0.72),
    makeWheel(0.54, -0.72),
  ];
  wheels.forEach((w) => root.add(w));

  // 车头灯地面光斑
  const poolMat = new THREE.MeshBasicMaterial({
    map: lightPoolTexture('255,236,200'),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 5.2), poolMat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0, 0.02, 3.0);
  pool.renderOrder = 4;
  root.add(pool);

  const curve = new THREE.CatmullRomCurve3(
    L.car.path.map((p) => new THREE.Vector3(p.x, ROAD_Y, p.z)),
    false,
    'centripetal'
  );
  curve.arcLengthDivisions = 500;
  const length = curve.getLength();

  let active = false;
  let u = 0;
  let wait = 4;
  let yaw = 0;
  let light = 0;
  let phase = 0;

  root.position.copy(curve.getPointAt(0));

  return {
    group: root,
    name: 'car001',

    get active() {
      return active;
    },
    get position() {
      return root.position;
    },
    get headlight() {
      return light;
    },
    get poolOpacity() {
      return poolMat.opacity;
    },

    update(dt, t, { frontGreen = false, rainAmount = 1, timeMode = 'night' } = {}) {
      const wantLight = timeMode === 'night' || timeMode === 'dusk' || rainAmount > 0.2 ? 1 : 0;
      light += (wantLight - light) * Math.min(1, dt * 6);

      headMat.color.copy(HEAD_OFF).lerp(HEAD_ON, light);
      tailMat.color.setHex(light > 0.4 ? 0xff2f26 : 0x4a1515);
      poolMat.opacity = light * (0.16 + 0.24 * rainAmount);

      body.traverse((obj) => {
        if (!obj.isSprite || !obj.userData.carGlow) return;
        if (obj.userData.carGlow === 'head') obj.material.opacity = light * 0.6;
        else obj.material.opacity = 0.18 + light * 0.34;
      });

      if (!active) {
        wait -= dt;
        if (t > 6 && wait <= 0 && frontGreen) {
          active = true;
          u = 0;
          root.visible = true;

          const tan0 = curve.getTangentAt(0);
          yaw = Math.atan2(tan0.x, tan0.z);
          root.rotation.y = yaw;
        }
      } else {
        u = Math.min(1, u + (L.car.speed * dt) / length);

        const p = curve.getPointAt(u);
        const tan = curve.getTangentAt(u);
        root.position.copy(p);

        const targetYaw = Math.atan2(tan.x, tan.z);
        let d = (targetYaw - yaw) % (Math.PI * 2);
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        yaw += d * Math.min(1, dt * 6);
        root.rotation.y = yaw;

        phase += dt * L.car.speed;
        wheels.forEach((w) => {
          w.rotation.x += (L.car.speed * dt) / 0.22;
        });
        body.position.y = Math.sin(phase * 3) * 0.006;
        body.rotation.z = -d * 0.35;

        if (u >= 1) {
          active = false;
          root.visible = false;
          wait = 7 + Math.random() * 7;
        }
      }
    },
  };
}
