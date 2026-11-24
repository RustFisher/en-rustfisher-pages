import * as THREE from 'three';
import { toon, flat } from './materials.js';
import { box, cyl, contactShadow } from './kit.js';
import { L } from './layout.js';

/**
 * 黑猫 catblack01
 * ------------------------------------------------------------------
 * 从后巷口出现，走到门口猫旁边打闹一会，再沿街向西逃跑离开场景。
 */

const CFG = L.blackCat;
const NAME = 'catblack01';
const APPROACH_SPEED = 0.9;
const FLEE_SPEED = 2.2;
const PLAY_TIME = 5.5;

const furMat = toon(0x11151c);
const furDark = toon(0x080a0e);
const eyeMat = flat(0xd8ff8a);
const noseMat = toon(0x3a2a2f);

const lerp = THREE.MathUtils.lerp;

function ellipsoid(rx, ry, rz, mat, seg = 12) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, seg, 9), mat);
  mesh.scale.set(rx, ry, rz);
  return mesh;
}

function makeLeg(x, z) {
  const pivot = new THREE.Group();
  pivot.position.set(x, 0.17, z);

  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.02, 0.17, 6), furMat);
  leg.position.y = -0.085;
  pivot.add(leg);

  const paw = ellipsoid(0.028, 0.016, 0.035, furDark, 8);
  paw.position.y = -0.17;
  pivot.add(paw);

  return pivot;
}

export function createBlackCat(scene, cat) {
  const root = new THREE.Group();
  root.name = NAME;
  root.visible = false;
  root.position.set(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z);
  scene.add(root);

  const shadow = contactShadow(0.6, 0.36, 0.42);
  shadow.position.set(0, 0.006, 0.02);
  root.add(shadow);

  const body = new THREE.Group();
  root.add(body);

  const torso = ellipsoid(0.1, 0.092, 0.19, furMat);
  torso.position.y = 0.2;
  body.add(torso);

  const head = new THREE.Group();
  head.position.set(0, 0.285, 0.17);
  body.add(head);

  head.add(ellipsoid(0.072, 0.068, 0.07, furMat));

  [-1, 1].forEach((sx) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.052, 4), furMat);
    ear.position.set(sx * 0.042, 0.068, -0.006);
    ear.rotation.z = -sx * 0.2;
    head.add(ear);

    const eye = ellipsoid(0.011, 0.014, 0.01, eyeMat, 8);
    eye.position.set(sx * 0.028, 0.006, 0.064);
    head.add(eye);
  });

  const nose = ellipsoid(0.011, 0.008, 0.009, noseMat, 6);
  nose.position.set(0, -0.018, 0.07);
  head.add(nose);

  const legFL = makeLeg(-0.062, 0.12);
  const legFR = makeLeg(0.062, 0.12);
  const legRL = makeLeg(-0.066, -0.12);
  const legRR = makeLeg(0.066, -0.12);
  body.add(legFL, legFR, legRL, legRR);

  const tail = new THREE.Group();
  tail.position.set(0, 0.23, -0.18);
  body.add(tail);

  const seg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.015, 0.11, 6), furMat);
  seg1.rotation.x = Math.PI / 2;
  seg1.position.z = -0.055;
  tail.add(seg1);

  const joint = new THREE.Group();
  joint.position.z = -0.11;
  tail.add(joint);

  const seg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.012, 0.1, 6), furDark);
  seg2.rotation.x = Math.PI / 2;
  seg2.position.z = -0.05;
  joint.add(seg2);

  let state = 'wait';
  let cooldown = 6 + Math.random() * 4;
  let clock = 0;
  let stateT = 0;
  let playT = 0;
  let emergeT = 0;
  let stage = 0;
  let yaw = 0;
  let yawTarget = 0;
  let phase = 0;
  let fleeStep = 0;

  const spawnPoint = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z);
  const mouthPoint = new THREE.Vector3(3.1, 0.18, -1.1);
  const fleeMid = new THREE.Vector3(-0.8, 0.18, CFG.flee.z);
  const fleeEnd = new THREE.Vector3(CFG.flee.x, 0.18, CFG.flee.z);
  const target = new THREE.Vector3();

  const hide = (delay) => {
    state = 'wait';
    cooldown = delay;
    stateT = 0;
    stage = 0;
    root.visible = false;
    root.scale.setScalar(1);
    if (cat.playing) cat.endPlay();
  };

  const abort = () => hide(15 + Math.random() * 15);

  const faceTowards = (x, z) => {
    yawTarget = Math.atan2(x - root.position.x, z - root.position.z);
  };

  const startFlee = () => {
    cat.endPlay();
    state = 'flee';
    stateT = 0;
    fleeStep = 0;
  };

  return {
    group: root,
    name: NAME,

    get state() {
      return state;
    },
    get position() {
      return root.position;
    },

    update(dt, t) {
      clock += dt;
      stateT += dt;

      const yawDelta = () => {
        let d = (yawTarget - yaw) % (Math.PI * 2);
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        return d;
      };

      let walking = false;
      let running = false;

      if (state === 'wait') {
        cooldown -= dt;
        if (t > 9 && cooldown <= 0 && cat.canPlay) {
          state = 'emerge';
          stateT = 0;
          emergeT = 0;
          root.position.copy(spawnPoint);
          root.visible = true;
          root.scale.setScalar(0.001);
          yaw = -0.4;
          yawTarget = yaw;
          stage = 0;
          root.rotation.y = yaw;
        }
      } else if (state === 'emerge') {
        emergeT += dt;
        const p = Math.min(1, emergeT / 0.4);
        root.scale.setScalar(0.001 + 0.999 * p);
        if (p >= 1) {
          state = 'approach';
          stateT = 0;
          stage = 0;
        }
      } else if (state === 'approach') {
        if (!cat.canPlay) {
          abort();
        } else if (stage === 0) {
          const dx = mouthPoint.x - root.position.x;
          const dz = mouthPoint.z - root.position.z;
          const dist = Math.hypot(dx, dz);
          if (dist < 0.06) {
            stage = 1;
          } else {
            const step = Math.min(dist, APPROACH_SPEED * dt);
            root.position.x += (dx / dist) * step;
            root.position.z += (dz / dist) * step;
            faceTowards(mouthPoint.x, mouthPoint.z);
            walking = true;
          }
        } else {
          target.set(
            cat.position.x + CFG.meetOffset.x,
            cat.position.y,
            cat.position.z + CFG.meetOffset.z
          );
          const dx = target.x - root.position.x;
          const dz = target.z - root.position.z;
          const dist = Math.hypot(dx, dz);

          if (dist < 0.06) {
            if (cat.beginPlay(root.position)) {
              state = 'play';
              stateT = 0;
              playT = PLAY_TIME;
              yawTarget = Math.atan2(
                cat.position.x - root.position.x,
                cat.position.z - root.position.z
              );
            } else {
              abort();
            }
          } else {
            const step = Math.min(dist, APPROACH_SPEED * dt);
            root.position.x += (dx / dist) * step;
            root.position.z += (dz / dist) * step;
            faceTowards(target.x, target.z);
            walking = true;
          }
        }

        if (state === 'approach') {
          const ty = stage === 0 ? mouthPoint.y : target.y;
          root.position.y += (ty - root.position.y) * Math.min(1, dt * 8);
        }
      } else if (state === 'play') {
        playT -= dt;
        faceTowards(cat.position.x, cat.position.z);
        root.position.y += (cat.position.y - root.position.y) * Math.min(1, dt * 8);

        if (playT <= 0 || !cat.playing) {
          startFlee();
        }
      } else if (state === 'flee') {
        const point = fleeStep === 0 ? fleeMid : fleeEnd;
        const dx = point.x - root.position.x;
        const dz = point.z - root.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.08) {
          if (fleeStep === 0) {
            fleeStep = 1;
          } else {
            hide(CFG.cooldown[0] + Math.random() * (CFG.cooldown[1] - CFG.cooldown[0]));
          }
        } else {
          const step = Math.min(dist, FLEE_SPEED * dt);
          root.position.x += (dx / dist) * step;
          root.position.z += (dz / dist) * step;
          faceTowards(point.x, point.z);
          walking = true;
          running = true;
        }

        root.position.y += (0.18 - root.position.y) * Math.min(1, dt * 8);
      }

      if (state !== 'wait' && state !== 'emerge') {
        yaw += yawDelta() * Math.min(1, dt * 8);
        root.rotation.y = yaw;
      }

      const swingSpeed = running ? 18 : 7;
      if (walking || state === 'play') phase += dt * swingSpeed;
      const swing = walking || state === 'play' ? Math.sin(phase) * (running ? 0.6 : 0.35) : 0;

      body.position.y = walking || state === 'play' ? Math.abs(Math.sin(phase * 2)) * 0.01 : 0;

      legFL.rotation.x = swing;
      legFR.rotation.x = -swing;
      legRL.rotation.x = -swing;
      legRR.rotation.x = swing;

      if (state === 'play') {
        const swipe = Math.sin(clock * 7);
        if (swipe > 0) legFR.rotation.x -= swipe * 0.9;
        else legFL.rotation.x += swipe * 0.9;
        body.rotation.x = -0.08 + Math.sin(clock * 10) * 0.03;
        tail.rotation.x = 0.6 + Math.sin(clock * 8) * 0.15;
        tail.rotation.y = Math.sin(clock * 5) * 0.25;
        joint.rotation.y = 0.2 + Math.sin(clock * 7) * 0.2;
      } else {
        body.rotation.x = 0;
        tail.rotation.x = (running ? -0.3 : 0.3) + Math.sin(clock * 5) * 0.05;
        tail.rotation.y = Math.sin(clock * 3) * 0.15;
        joint.rotation.y = 0.15 + Math.sin(clock * 4) * 0.1;
      }

      if (state !== 'wait' && state !== 'emerge') {
        head.rotation.y = Math.sin(clock * 1.2) * 0.25;
        head.rotation.x = state === 'play' ? 0.1 : 0.03;
      }
    },
  };
}
