import * as THREE from 'three';
import { toon, flat } from './materials.js';
import { box, contactShadow } from './kit.js';
import { L } from './layout.js';

/**
 * 乌鸦 crow001
 * ------------------------------------------------------------------
 * 在便利店屋顶和后巷垃圾桶旁之间往返。
 * 停靠时转头、啄地、甩尾；飞行时扇翅并沿拱形路径移动。
 */

const BLACK = 0x1b2028;
const WING = 0x151a22;
const BEAK = 0x3a3f48;
const EYE = 0x9fd8ff;

const ROOF_YAW = 0.35;
const BIN_YAW = -0.55;
const BODY_OFFSET = 0.23;

function perchPoint(name) {
  const p = L.crow.perches[name];
  return new THREE.Vector3(p.x, p.y, p.z);
}

function perchYaw(name) {
  return name === 'roof' ? ROOF_YAW : BIN_YAW;
}

export function createCrow(scene) {
  const root = new THREE.Group();
  root.name = 'crow001';
  root.visible = false;
  scene.add(root);

  const shadow = contactShadow(0.62, 0.4, 0.4);
  shadow.position.set(0, 0.006, 0);
  root.add(shadow);

  const body = new THREE.Group();
  root.add(body);

  const torsoMat = toon(BLACK);
  const wingMat = toon(WING);
  const beakMat = toon(BEAK);
  const eyeMat = flat(EYE);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), torsoMat);
  torso.scale.set(0.11, 0.1, 0.21);
  torso.position.y = BODY_OFFSET;
  body.add(torso);

  const head = new THREE.Group();
  head.position.set(0, 0.33, 0.16);
  body.add(head);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), torsoMat);
  head.add(skull);

  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.11, 6), beakMat);
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, -0.005, 0.1);
  head.add(beak);

  [-1, 1].forEach((sx) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.011, 6, 5), eyeMat);
    eye.position.set(sx * 0.038, 0.012, 0.058);
    head.add(eye);
  });

  const tail = new THREE.Group();
  tail.position.set(0, 0.24, -0.19);
  body.add(tail);

  const tailMesh = box(0.1, 0.018, 0.23, wingMat, { line: false });
  tailMesh.position.z = -0.115;
  tail.add(tailMesh);

  const wings = [];
  [-1, 1].forEach((side) => {
    const pivot = new THREE.Group();
    pivot.name = side > 0 ? 'crowWingR' : 'crowWingL';
    pivot.position.set(side * 0.09, 0.26, 0.01);

    const wing = box(0.4, 0.016, 0.18, wingMat, { line: false });
    wing.position.x = side * 0.2;
    pivot.add(wing);

    body.add(pivot);
    wings.push({ pivot, side });
  });

  const legs = new THREE.Group();
  [-0.05, 0.05].forEach((x) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.1, 5), beakMat);
    leg.position.set(x, 0.05, 0.02);
    legs.add(leg);
  });
  body.add(legs);

  let perch = Math.random() < 0.6 ? 'roof' : 'bin';
  let state = 'perch';
  let timer = 6 + Math.random() * 4;
  let clock = 0;
  let wingBlend = 0;
  let yaw = perchYaw(perch);
  let yawTarget = yaw;
  let peckPhase = Math.random() * Math.PI * 2;
  let flickPhase = Math.random() * Math.PI * 2;

  let flight = null;
  let flightT = 0;
  let flightDur = 2;

  const placeAt = (name) => {
    const p = perchPoint(name);
    root.position.copy(p);
    yaw = perchYaw(name);
    yawTarget = yaw;
    root.rotation.y = yaw;
    shadow.visible = true;
  };

  placeAt(perch);

  const startFlight = () => {
    const from = perch;
    const to = perch === 'roof' ? 'bin' : 'roof';
    const a = perchPoint(from);
    const b = perchPoint(to);

    const start = new THREE.Vector3(a.x, a.y + BODY_OFFSET, a.z);
    const end = new THREE.Vector3(b.x, b.y + BODY_OFFSET, b.z);
    const mid = new THREE.Vector3(
      (a.x + b.x) / 2 + 0.15,
      Math.max(a.y, b.y) + 1.1,
      (a.z + b.z) / 2 - 0.1
    );

    flight = new THREE.CatmullRomCurve3([start, mid, end], false, 'centripetal');
    flight.arcLengthDivisions = 200;
    flightT = 0;
    flightDur = 1.8 + Math.random() * 0.5;
    state = 'fly';
    shadow.visible = false;

    const tan = flight.getTangentAt(0);
    yawTarget = Math.atan2(tan.x, tan.z);
  };

  return {
    group: root,
    name: 'crow001',

    get state() {
      return state;
    },
    get perch() {
      return perch;
    },
    get position() {
      return root.position;
    },

    update(dt, t) {
      clock += dt;

      const appear = THREE.MathUtils.smoothstep(t, 5, 5.45);
      root.visible = appear > 0.001;
      root.scale.setScalar(0.001 + 0.999 * appear);

      if (t < 5) return;
      if (state === 'fly') {
        flightT += dt;
        const p = Math.min(1, flightT / flightDur);
        const e = p * p * (3 - 2 * p);
        const point = flight.getPointAt(e);
        const tan = flight.getTangentAt(e);

        root.position.set(point.x, point.y - BODY_OFFSET, point.z);
        yawTarget = Math.atan2(tan.x, tan.z);

        if (p >= 1) {
          perch = perch === 'roof' ? 'bin' : 'roof';
          state = 'perch';
          timer = 6 + Math.random() * 4;
          placeAt(perch);
        }
      } else {
        timer -= dt;
        if (timer <= 0) startFlight();
      }

      let d = (yawTarget - yaw) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      yaw += d * Math.min(1, dt * 8);
      root.rotation.y = yaw;

      wingBlend += ((state === 'fly' ? 1 : 0) - wingBlend) * Math.min(1, dt * 10);

      const flap = Math.sin(clock * 22) * 0.55;
      wings.forEach(({ pivot, side }) => {
        // 停靠时把翅膀向后收拢；飞行时才展开扇动
        pivot.rotation.y = side * (1.25 * (1 - wingBlend) + 0.08 * wingBlend);
        pivot.rotation.z = side * (-0.12 * (1 - wingBlend) + (0.12 + flap) * wingBlend);
      });

      const peck = Math.pow(Math.max(0, Math.sin(clock * 0.7 + peckPhase)), 22);
      head.rotation.x = (1 - wingBlend) * (0.08 + peck * 0.42);
      head.rotation.y = (1 - wingBlend) * Math.sin(clock * 0.75 + peckPhase) * 0.55;

      body.rotation.x = -wingBlend * 0.16;
      body.position.y = wingBlend * Math.sin(clock * 22) * 0.012;
      body.rotation.z = (1 - wingBlend) * Math.sin(clock * 1.3 + flickPhase) * 0.015;

      const flick = Math.pow(Math.max(0, Math.sin(clock * 0.55 + flickPhase)), 24);
      tail.rotation.y = (1 - wingBlend) * flick * 0.35;
      tail.rotation.x = wingBlend * 0.15;

      legs.scale.y = 1 - wingBlend * 0.85;
    },
  };
}
