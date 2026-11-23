import * as THREE from 'three';
import { toon, flat } from './materials.js';
import { box, cyl, contactShadow } from './kit.js';

/**
 * 步行顾客 customer001
 * ------------------------------------------------------------------
 * 从人行道走到店门口，自动门打开后进店，停留一会再出门离开。
 * 雨天在室外撑伞，进门前收伞；出门后如果还在下雨会重新撑开。
 */

const NAME = 'customer001';

const START = { x: -12.9, z: 1.2 };
const SIDE_WALK = { x: -9.5, z: 1.2 };
const SIDE_DOOR = { x: -0.1, z: 0.55 };
const DOOR = { x: -0.1, z: -0.9 };
const INSIDE = { x: -0.1, z: -3.0 };

const SPEED = 1.0;
const WAIT_INSIDE = 2;
const WAIT_OUTSIDE = 8;

const WANDER = [
  { x: -2.0, z: -4.0, wait: 1.6 },
  { x: -2.2, z: -5.6, wait: 1.8 },
  { x: -0.7, z: -4.2, wait: 1.2 },
];

const coatMat = toon(0x3b4a66);
const pantsMat = toon(0x2d3140);
const skinMat = toon(0xe3c2a2);
const hairMat = toon(0x2a211d);
const shoeMat = toon(0x1a1d26);
const scarfMat = toon(0x9b3d4e);
const umbrellaMat = toon(0x2f5d62);
const metalMat = toon(0x6c7486);

function groundAt(z) {
  if (z < -1.62) return 0.24; // 店内地面
  if (z < -0.48) return 0.215; // 门口地垫
  return 0.18; // 人行道
}

function makeLeg(x) {
  const pivot = new THREE.Group();
  pivot.position.set(x, 0.95, 0);

  const leg = cyl(0.075, 0.062, 0.9, pantsMat, { seg: 8 });
  leg.position.y = -0.45;
  pivot.add(leg);

  const shoe = box(0.14, 0.075, 0.3, shoeMat, { line: false });
  shoe.position.set(0, -0.91, 0.06);
  pivot.add(shoe);

  return pivot;
}

function makeArm(x) {
  const pivot = new THREE.Group();
  pivot.position.set(x, 1.5, 0);

  const arm = cyl(0.055, 0.05, 0.62, coatMat, { seg: 7 });
  arm.position.y = -0.31;
  pivot.add(arm);

  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), skinMat);
  hand.position.y = -0.64;
  pivot.add(hand);

  return pivot;
}

export function buildCustomer(builder) {
  const root = new THREE.Group();
  root.name = NAME;
  root.position.set(START.x, groundAt(START.z), START.z);

  const shadow = contactShadow(0.75, 0.45, 0.45);
  shadow.position.set(0, 0.006, 0.02);
  root.add(shadow);

  const body = new THREE.Group();
  root.add(body);

  const torso = box(0.42, 0.6, 0.26, coatMat);
  torso.position.y = 1.27;
  body.add(torso);

  const collar = box(0.3, 0.06, 0.24, coatMat, { line: false });
  collar.position.set(0, 1.55, 0.02);
  body.add(collar);

  const scarf = box(0.26, 0.08, 0.22, scarfMat, { line: false });
  scarf.position.set(0, 1.52, 0.03);
  body.add(scarf);

  const head = new THREE.Group();
  head.position.set(0, 1.68, 0.01);
  body.add(head);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.105, 14, 10), skinMat);
  skull.scale.set(1, 1.05, 0.98);
  head.add(skull);

  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 10), hairMat);
  hair.position.set(0, 0.045, -0.01);
  hair.scale.set(1.02, 0.82, 1.04);
  head.add(hair);

  const legL = makeLeg(-0.11);
  const legR = makeLeg(0.11);
  body.add(legL, legR);

  const armL = makeArm(-0.24);
  const armR = makeArm(0.24);
  body.add(armL, armR);

  // 雨伞
  const umbrella = new THREE.Group();
  umbrella.position.set(0.26, 0, 0.02);
  root.add(umbrella);

  const shaft = cyl(0.012, 0.012, 1.15, metalMat, { seg: 6 });
  shaft.position.y = 1.52;
  umbrella.add(shaft);

  const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.3, 12, 1, true), umbrellaMat);
  canopy.position.y = 2.08;
  umbrella.add(canopy);

  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), metalMat);
  tip.position.y = 2.25;
  umbrella.add(tip);

  builder.add(root, { delay: 3.0, dur: 0.6, mode: 'pop' });

  let state = 'idle';
  let stateT = 0;
  let queue = [];
  let pauseTimer = 0;
  let active = false;
  let clock = 0;
  let phase = 0;
  let yaw = -Math.PI / 2;
  let yawTarget = yaw;
  let umbrellaOpen = 0;

  root.rotation.y = yaw;

  const goTo = (points) => {
    queue = points.map((p) => ({ x: p.x, z: p.z, wait: p.wait || 0 }));
    pauseTimer = 0;
  };

  const startWalkIn = () => {
    state = 'walkIn';
    stateT = 0;
    goTo([SIDE_WALK, SIDE_DOOR, DOOR, INSIDE]);
  };

  const startWander = () => {
    state = 'wander';
    stateT = 0;
    goTo(WANDER);
  };

  const startWalkOut = () => {
    state = 'walkOut';
    stateT = 0;
    goTo([DOOR, SIDE_DOOR, SIDE_WALK, START]);
  };

  applyUmbrella(0);

  function applyUmbrella(open) {
    umbrellaOpen = open;
    umbrella.visible = open > 0.03;
    if (!umbrella.visible) return;

    const s = 0.16 + 0.84 * open;
    canopy.scale.set(s, 0.45 + 0.55 * open, s);
    canopy.position.y = 2.02 - 0.12 * (1 - open);
    canopy.visible = true;
    umbrella.position.y = 0.18 * (1 - open);
  }

  return {
    group: root,
    name: NAME,

    get state() {
      return state;
    },
    get position() {
      return root.position;
    },
    get umbrellaOpen() {
      return umbrellaOpen;
    },

    get umbrellaVisible() {
      return umbrella.visible;
    },

    update(dt, t, rainAmount = 1) {
      clock += dt;

      if (!active) {
        if (t > 5.2) {
          active = true;
          startWalkIn();
        } else {
          applyUmbrella(rainAmount > 0.35 ? 1 : 0);
          root.position.y = groundAt(root.position.z);
          return;
        }
      }

      let walking = false;

      if (pauseTimer > 0) {
        pauseTimer -= dt;
      } else if (queue[0]) {
        const target = queue[0];
        const dx = target.x - root.position.x;
        const dz = target.z - root.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.06) {
          const done = queue.shift();
          if (done.wait) pauseTimer = done.wait;

          if (queue.length === 0) {
            if (state === 'walkIn') {
              startWander();
            } else if (state === 'wander') {
              state = 'inside';
              stateT = 0;
              yawTarget = Math.PI;
            } else if (state === 'walkOut') {
              state = 'idle';
              stateT = 0;
              yawTarget = -Math.PI / 2;
            }
          }
        } else {
          const step = Math.min(dist, SPEED * dt);
          root.position.x += (dx / dist) * step;
          root.position.z += (dz / dist) * step;
          yawTarget = Math.atan2(dx, dz);
          walking = true;
        }
      }

      if (!walking && pauseTimer <= 0) {
        stateT += dt;
        if (state === 'idle' && stateT > WAIT_OUTSIDE) startWalkIn();
        else if (state === 'inside' && stateT > WAIT_INSIDE) startWalkOut();
      }

      const targetY = groundAt(root.position.z);
      root.position.y += (targetY - root.position.y) * Math.min(1, dt * 8);

      yaw += (() => {
        let d = (yawTarget - yaw) % (Math.PI * 2);
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        return d;
      })() * Math.min(1, dt * 8);
      root.rotation.y = yaw;

      if (walking) phase += dt * 7;
      const swing = walking ? Math.sin(phase) * 0.42 : 0;
      legL.rotation.x = swing;
      legR.rotation.x = -swing;
      armL.rotation.x = -swing * 0.65;
      armR.rotation.x = swing * 0.65;
      body.position.y = walking ? Math.abs(Math.sin(phase * 2)) * 0.018 : 0;

      // 室外下雨撑伞，靠近门口收伞；店内收伞
      const open = rainAmount > 0.35 && root.position.z > -0.7 && state !== 'inside' ? 1 : 0;
      applyUmbrella(umbrellaOpen + (open - umbrellaOpen) * Math.min(1, dt * 5));
    },
  };
}
