import * as THREE from 'three';
import { L } from './layout.js';

/**
 * 雨效：
 *  1) GPU 雨丝（LineSegments + 自定义 Shader，按固定区间循环下落）
 *  2) 地面涟漪（环形贴片循环放大淡出）
 * 雨丝与涟漪都在装配动画尾段才淡入，保证“先造景、后下雨”。
 */

const COUNT = 1500;
const RADIUS = 17;
const HEIGHT = 22;
const WIND = 0.1;

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uHeight;
  uniform float uWind;

  attribute vec3 aBase;
  attribute float aTip;
  attribute float aSpeed;
  attribute float aLen;

  varying float vAlpha;

  void main() {
    // 循环下落：让每滴雨在自己的高度区间内不断重复
    float fall = mod(aBase.y - uTime * aSpeed, uHeight);
    vec3 pos = vec3(aBase.x + fall * uWind, fall, aBase.z);

    // 雨丝：tip=1 的一端向下并略微前倾
    pos.y -= aTip * aLen;
    pos.x += aTip * aLen * 0.18;

    // 顶部出现、地面消失的两端淡出，避免循环处跳变
    float fadeIn = smoothstep(0.0, 2.2, fall);
    float fadeOut = 1.0 - smoothstep(uHeight - 6.0, uHeight, fall);
    vAlpha = fadeIn * fadeOut * (1.0 - aTip * 0.35);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, uOpacity * vAlpha);
  }
`;

function groundY(x, z) {
  // 巷子地面略高，人行道其次，车行道最低
  if (x > L.alley.x1 && x < L.alley.x2 && z > L.alley.z1 && z < L.alley.z2) return 0.24;
  const walks = [L.walk.front, L.walk.side, L.walk.far];
  for (const w of walks) {
    if (x > w.x1 && x < w.x2 && z > w.z1 && z < w.z2) return 0.2;
  }
  return 0.08;
}

// 只在街道范围生成涟漪，避免雨点落在屋顶 / 店内
function sampleGround() {
  const r = Math.random();
  let x;
  let z;
  if (r < 0.6) {
    x = THREE.MathUtils.randFloat(-12.3, 12.3);
    z = THREE.MathUtils.randFloat(1.5, 12.4);
  } else if (r < 0.8) {
    x = THREE.MathUtils.randFloat(-12.3, 8.3);
    z = THREE.MathUtils.randFloat(-1.45, 1.35);
  } else {
    x = THREE.MathUtils.randFloat(9.7, 12.4);
    z = THREE.MathUtils.randFloat(-12.3, 1.35);
  }
  return { x, z, y: groundY(x, z) };
}

export function createRain(scene) {
  const group = new THREE.Group();
  group.name = 'rain';

  /* ---------------- 雨丝 ---------------- */
  const positions = new Float32Array(COUNT * 2 * 3);
  const base = new Float32Array(COUNT * 2 * 3);
  const tip = new Float32Array(COUNT * 2);
  const speed = new Float32Array(COUNT * 2);
  const len = new Float32Array(COUNT * 2);

  for (let i = 0; i < COUNT; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * RADIUS;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const y = Math.random() * HEIGHT;
    const s = 13 + Math.random() * 9;
    const l = 0.35 + Math.random() * 0.55;

    for (let k = 0; k < 2; k++) {
      const idx = i * 2 + k;
      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;
      base[idx * 3] = x;
      base[idx * 3 + 1] = y;
      base[idx * 3 + 2] = z;
      tip[idx] = k;
      speed[idx] = s;
      len[idx] = l;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aBase', new THREE.BufferAttribute(base, 3));
  geo.setAttribute('aTip', new THREE.BufferAttribute(tip, 1));
  geo.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aLen', new THREE.BufferAttribute(len, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, HEIGHT / 2, 0), RADIUS + HEIGHT);

  const uniforms = {
    uTime: { value: 0 },
    uHeight: { value: HEIGHT },
    uWind: { value: WIND },
    uColor: { value: new THREE.Color(0xa8ccff) },
    uOpacity: { value: 0 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });

  const lines = new THREE.LineSegments(geo, mat);
  lines.frustumCulled = false;
  lines.renderOrder = 6;
  group.add(lines);

  /* ---------------- 地面涟漪 ---------------- */
  const RIPPLE_COUNT = 34;
  const ringGeo = new THREE.RingGeometry(0.36, 0.5, 22);
  const ripples = [];

  for (let i = 0; i < RIPPLE_COUNT; i++) {
    const p = sampleGround();
    const m = new THREE.MeshBasicMaterial({
      color: 0xb7dcff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(ringGeo, m);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(p.x, p.y, p.z);
    mesh.renderOrder = 3;
    group.add(mesh);
    ripples.push({
      mesh,
      mat: m,
      t: Math.random(),
      dur: 0.75 + Math.random() * 0.65,
    });
  }

  scene.add(group);

  let opacity = 0;
  let velocity = 0;

  return {
    group,
    get opacity() {
      return opacity;
    },
    /** @param {number} dt 秒；@param {number} target 目标不透明度 0~1 */
    update(dt, target = 0) {
      // 平滑淡入，避免雨突然出现
      const k = Math.min(1, dt * 1.6);
      opacity += (target - opacity) * k;
      velocity += dt * (1.2 + opacity * 2.4);

      uniforms.uTime.value += dt;
      uniforms.uOpacity.value = opacity * 0.55;

      group.visible = opacity > 0.01;

      for (const r of ripples) {
        r.t += dt / r.dur;
        if (r.t >= 1) {
          r.t = 0;
          const p = sampleGround();
          r.mesh.position.set(p.x, p.y, p.z);
          r.dur = 0.75 + Math.random() * 0.65;
        }
        const s = 0.3 + r.t * 1.5;
        r.mesh.scale.set(s, s, s);
        r.mat.opacity = Math.pow(1 - r.t, 2.2) * 0.42 * opacity;
      }
    },
  };
}
