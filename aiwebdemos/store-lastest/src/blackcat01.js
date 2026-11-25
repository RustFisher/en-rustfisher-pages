import * as THREE from 'three';
import { toon, flat } from './materials.js';
import { contactShadow } from './kit.js';
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
const PLAY_TIME = 8.6;

function envelope(u, dur) {
  const k = THREE.MathUtils.clamp(u / dur, 0, 1);
  return k < 0.3 ? k / 0.3 : 1 - (k - 0.3) / 0.7;
}

function basePose() {
  return {
    crouch: 0.35,
    lean: 0.03,
    side: 0,
    headPitch: 0.08,
    headYaw: 0,
    pawL: 0,
    pawR: 0,
    jaw: 0,
    tailUp: 0.85,
    tailLash: 0,
    hop: 0,
    shift: 0,
  };
}

function applyAction(p, type, u, dur, side = 1) {
  if (u < 0 || u > dur) return;
  const e = envelope(u, dur);

  if (type === 'swipe') {
    if (side > 0) p.pawR += e;
    else p.pawL += e;
    p.lean += e * 0.24;
    p.side += side * e * 0.28;
    p.headYaw += side * e * 0.28;
    p.jaw += e * 0.22;
    p.tailLash += e * 0.3;
  } else if (type === 'dodge') {
    p.lean -= e * 0.36;
    p.hop += e * 0.02;
    p.shift -= e * 0.08;
    p.side += side * e * 0.18;
  } else if (type === 'hiss') {
    p.jaw += e;
    p.headPitch += e * 0.18;
    p.lean += e * 0.08;
    p.crouch += e * 0.1;
    p.tailLash += e * 0.25;
  } else if (type === 'feint') {
    p.lean += e * 0.36;
    p.hop += e * 0.014;
    p.shift += e * 0.04;
    p.pawL += e * 0.22;
    p.pawR += e * 0.22;
    p.jaw += e * 0.18;
  } else if (type === 'pounce') {
    p.lean += e * 0.42;
    p.hop += e * 0.065;
    p.shift += e * 0.14;
    p.pawL += e * 0.55;
    p.pawR += e * 0.55;
    p.jaw += e * 0.3;
  } else if (type === 'recoil') {
    p.lean -= e * 0.4;
    p.hop += e * 0.015;
    p.shift -= e * 0.06;
    p.headPitch -= e * 0.1;
  } else if (type === 'break') {
    p.lean -= e * 0.12;
    p.hop += e * 0.02;
    p.shift -= e * 0.1;
    p.side += side * e * 0.2;
  } else if (type === 'retreat') {
    p.crouch += e * 0.2;
    p.lean -= e * 0.32;
    p.shift -= e * 0.05;
    p.tailUp -= e * 0.3;
  }
}

const COMMON_ACTIONS = [
  { who: 'cat', type: 'hiss', t: 1.2, dur: 0.4 },
  { who: 'black', type: 'hiss', t: 2.0, dur: 0.4 },
];

const TEMPLATES = {
  A: [
    { who: 'cat', type: 'feint', t: 3.0, dur: 0.35 },
    { who: 'cat', type: 'swipe', side: 1, t: 3.5, dur: 0.45 },
    { who: 'black', type: 'dodge', side: -1, t: 3.65, dur: 0.4 },
    { who: 'black', type: 'swipe', side: -1, t: 4.2, dur: 0.45 },
    { who: 'cat', type: 'recoil', t: 4.35, dur: 0.4 },
    { who: 'cat', type: 'break', side: -1, t: 4.9, dur: 0.35 },
    { who: 'black', type: 'break', side: 1, t: 4.9, dur: 0.35 },
    { who: 'black', type: 'hiss', t: 5.5, dur: 0.4 },
    { who: 'cat', type: 'swipe', side: -1, t: 6.0, dur: 0.45 },
    { who: 'black', type: 'dodge', side: 1, t: 6.15, dur: 0.4 },
    { who: 'black', type: 'pounce', t: 6.7, dur: 0.5 },
    { who: 'cat', type: 'dodge', side: 1, t: 6.85, dur: 0.4 },
    { who: 'cat', type: 'break', side: -1, t: 7.5, dur: 0.35 },
    { who: 'black', type: 'break', side: 1, t: 7.5, dur: 0.35 },
    { who: 'black', type: 'retreat', t: 8.0, dur: 0.5 },
  ],
  B: [
    { who: 'black', type: 'feint', t: 3.0, dur: 0.35 },
    { who: 'black', type: 'swipe', side: -1, t: 3.5, dur: 0.45 },
    { who: 'cat', type: 'dodge', side: 1, t: 3.65, dur: 0.4 },
    { who: 'cat', type: 'swipe', side: 1, t: 4.2, dur: 0.45 },
    { who: 'black', type: 'recoil', t: 4.35, dur: 0.4 },
    { who: 'cat', type: 'break', side: 1, t: 4.9, dur: 0.35 },
    { who: 'black', type: 'break', side: -1, t: 4.9, dur: 0.35 },
    { who: 'cat', type: 'hiss', t: 5.5, dur: 0.4 },
    { who: 'black', type: 'swipe', side: 1, t: 6.0, dur: 0.45 },
    { who: 'cat', type: 'dodge', side: -1, t: 6.15, dur: 0.4 },
    { who: 'cat', type: 'pounce', t: 6.7, dur: 0.5 },
    { who: 'black', type: 'dodge', side: -1, t: 6.85, dur: 0.4 },
    { who: 'cat', type: 'break', side: 1, t: 7.5, dur: 0.35 },
    { who: 'black', type: 'break', side: -1, t: 7.5, dur: 0.35 },
    { who: 'black', type: 'retreat', t: 8.0, dur: 0.5 },
  ],
};

function encounterPoses(t, template) {
  const cat = basePose();
  const black = basePose();
  black.crouch = 0.4;

  const sway = Math.sin(t * 1.4) * 0.03;
  cat.headYaw = Math.sin(t * 1.3) * 0.16;
  black.headYaw = Math.sin(t * 1.6 + 1.1) * 0.18;
  cat.tailLash = Math.sin(t * 1.7) * 0.15;
  black.tailLash = Math.sin(t * 2.1 + 0.6) * 0.2;
  cat.side = sway;
  black.side = -sway;

  const actions = COMMON_ACTIONS.concat(TEMPLATES[template] || TEMPLATES.A);
  for (const action of actions) {
    const pose = action.who === 'cat' ? cat : black;
    applyAction(pose, action.type, t - action.t, action.dur, action.side || 1);
  }

  return { cat, black };
}

const furMat = toon(0x11151c);
const furDark = toon(0x080a0e);
const eyeMat = flat(0xd8ff8a);
const noseMat = toon(0x3a2a2f);

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

  const ears = [];
  const jaw = new THREE.Group();
  jaw.position.set(0, -0.028, 0.035);
  head.add(jaw);
  const jawMesh = ellipsoid(0.04, 0.01, 0.032, noseMat, 8);
  jawMesh.position.set(0, -0.003, 0.015);
  jaw.add(jawMesh);

  [-1, 1].forEach((sx) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.052, 4), furMat);
    ear.position.set(sx * 0.042, 0.068, -0.006);
    ear.rotation.z = -sx * 0.2;
    head.add(ear);
    ears.push({ mesh: ear, baseZ: -sx * 0.2, side: sx });

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
  let playDur = PLAY_TIME;
  let template = 'A';
  let blackPose = null;
  let emergeT = 0;
  let weatherInterrupted = false;
  let startedSheltered = false;
  let startleT = 0;
  let coverTimer = 0;
  let stage = 0;
  let yaw = 0;
  let yawTarget = 0;
  let phase = 0;
  let fleeStep = 0;

  const spawnPoint = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z);
  const mouthPoint = new THREE.Vector3(3.1, 0.18, -1.1);
  const fleeMid = new THREE.Vector3(-0.8, 0.18, CFG.flee.z);
  const fleeEnd = new THREE.Vector3(CFG.flee.x, 0.18, CFG.flee.z);
  const coverPoint = new THREE.Vector3(CFG.cover.x, CFG.cover.y, CFG.cover.z);
  const STARTLE_POSE = {
    crouch: 0.58,
    lean: -0.12,
    side: 0,
    headPitch: 0.16,
    headYaw: 0,
    pawL: 0.12,
    pawR: 0.12,
    jaw: 0.8,
    tailUp: 1,
    tailLash: 0.6,
    hop: 0.035,
    shift: -0.04,
  };
  const target = new THREE.Vector3();
  const anchor = new THREE.Vector3();
  const toCat = new THREE.Vector3();

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

    update(dt, t, rainAmount = 0) {
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
            if (cat.beginPlay(root.position, PLAY_TIME + 0.2)) {
              state = 'play';
              stateT = 0;
              playT = 0;
              playDur = PLAY_TIME;
              template = Math.random() < 0.5 ? 'A' : 'B';
              blackPose = null;
              weatherInterrupted = false;
              startedSheltered = cat.zone === 'shelter';
              anchor.copy(root.position);
              toCat.set(cat.position.x - anchor.x, 0, cat.position.z - anchor.z);
              if (toCat.lengthSq() < 0.0001) toCat.set(0, 0, 1);
              toCat.normalize();
              yawTarget = Math.atan2(toCat.x, toCat.z);
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
        if (!weatherInterrupted && !startedSheltered && rainAmount > 0.55) {
          weatherInterrupted = true;
          state = 'startle';
          startleT = 0;
          blackPose = STARTLE_POSE;
          cat.setPlayPose(STARTLE_POSE);
          root.position.y = cat.position.y + STARTLE_POSE.hop;
        } else {
          playT += dt;
          const poses = encounterPoses(playT, template);
        blackPose = poses.black;
        cat.setPlayPose(poses.cat);

        toCat.set(cat.position.x - anchor.x, 0, cat.position.z - anchor.z);
        if (toCat.lengthSq() < 0.0001) toCat.set(0, 0, 1);
        toCat.normalize();

        root.position.x = anchor.x + toCat.x * blackPose.shift;
        root.position.z = anchor.z + toCat.z * blackPose.shift;
        root.position.y = cat.position.y + blackPose.hop;
        faceTowards(cat.position.x, cat.position.z);

        if (playT >= playDur) {
          cat.endPlay();
          startFlee();
        }
        }
      } else if (state === 'startle') {
        startleT += dt;
        blackPose = STARTLE_POSE;
        cat.setPlayPose(STARTLE_POSE);
        faceTowards(cat.position.x, cat.position.z);
        root.position.y = cat.position.y + STARTLE_POSE.hop;

        if (startleT >= 0.38) {
          cat.endPlay();
          state = 'cover';
          stateT = 0;
        }
      } else if (state === 'cover') {
        const dx = coverPoint.x - root.position.x;
        const dz = coverPoint.z - root.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.06) {
          state = 'shelter';
          stateT = 0;
          coverTimer = 4 + Math.random() * 2;
        } else {
          const step = Math.min(dist, 1.4 * dt);
          root.position.x += (dx / dist) * step;
          root.position.z += (dz / dist) * step;
          faceTowards(coverPoint.x, coverPoint.z);
          walking = true;
        }

        root.position.y += (coverPoint.y - root.position.y) * Math.min(1, dt * 8);
      } else if (state === 'shelter') {
        blackPose = {
          crouch: 0.32,
          lean: -0.05,
          side: Math.sin(clock * 18) * 0.18,
          headPitch: 0.05,
          headYaw: Math.sin(clock * 1.2) * 0.2,
          pawL: 0.1,
          pawR: 0.1,
          jaw: 0.05,
          tailUp: 0.7,
          tailLash: 0.5,
          hop: 0,
          shift: 0,
        };
        faceTowards(cat.position.x, cat.position.z);

        if (stateT > coverTimer || (stateT > 1.5 && rainAmount < 0.2)) {
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

      if ((state === 'play' || state === 'startle' || state === 'shelter') && blackPose) {
        const p = blackPose;

        legFL.rotation.x = -p.pawL * 1.2;
        legFR.rotation.x = -p.pawR * 1.2;
        legRL.rotation.x = 0;
        legRR.rotation.x = 0;

        body.position.y = -0.03 * p.crouch + p.hop * 0.07;
        body.rotation.x = p.lean * 0.18 - p.crouch * 0.04;
        body.rotation.z = p.side * 0.12;

        head.rotation.x = p.headPitch * 0.4 + p.crouch * 0.04;
        head.rotation.y = p.headYaw * 0.4;
        jaw.rotation.x = p.jaw * 0.55;

        tail.rotation.x = 0.3 + p.tailUp * 0.45;
        tail.rotation.y = p.tailLash * 0.4;
        joint.rotation.y = 0.15 + p.tailLash * 0.2;

        ears.forEach(({ mesh, baseZ, side }) => {
          mesh.rotation.z = baseZ - side * 0.2 * p.crouch;
        });
      } else {
        if (walking) phase += dt * swingSpeed;
        const swing = walking ? Math.sin(phase) * (running ? 0.6 : 0.35) : 0;

        body.position.y = walking ? Math.abs(Math.sin(phase * 2)) * 0.01 : 0;
        body.rotation.x = 0;
        body.rotation.z = 0;

        legFL.rotation.x = swing;
        legFR.rotation.x = -swing;
        legRL.rotation.x = -swing;
        legRR.rotation.x = swing;

        tail.rotation.x = (running ? -0.3 : 0.3) + Math.sin(clock * 5) * 0.05;
        tail.rotation.y = Math.sin(clock * 3) * 0.15;
        joint.rotation.y = 0.15 + Math.sin(clock * 4) * 0.1;

        head.rotation.y = Math.sin(clock * 1.2) * 0.25;
        head.rotation.x = 0.03;
        jaw.rotation.x = 0;

        ears.forEach(({ mesh, baseZ }) => {
          mesh.rotation.z = baseZ;
        });
      }
    },
  };
}
