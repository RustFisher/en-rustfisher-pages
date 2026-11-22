import * as THREE from 'three';
import { toon, flat, glowSprite, canvasTexture } from './materials.js';
import { box } from './kit.js';
import { L } from './layout.js';

/**
 * 便利店屋顶的宽幅博客灯箱
 * ------------------------------------------------------------------
 * 正面是自发光贴图，另有一块不可见的命中面，
 * 由 main.js 用 Raycaster 做点击 / 悬停检测。
 */

export const BLOG_URL = 'https://en.rustfisher.com/ai/evolving-3d-rainy-night-convenience-store/';

const RING_VERT = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const RING_FRAG = /* glsl */ `
  uniform float uTime;
  uniform float uBoost;
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    // 沿灯箱四周循环的亮头 + 拖尾
    float head = fract(vUv.x - uTime);
    float core = smoothstep(0.03, 0.0, head);
    float trail = smoothstep(0.22, 0.0, head);
    float round = 0.65 + 0.35 * sin(vUv.y * 3.14159265);
    vec3 col = uColor * (0.2 + trail * 1.2 + core * 2.4) * round * (1.0 + uBoost * 0.6);
    gl_FragColor = vec4(col, 1.0);
  }
`;

/** 圆角矩形闭合路径，绕灯箱正面一圈 */
function makeLoopCurve(hw, hh, r, z) {
  const pts = [];
  const arc = (cx, cy, a0, a1) => {
    const steps = 8;
    for (let i = 0; i <= steps; i++) {
      const a = a0 + (a1 - a0) * (i / steps);
      pts.push(new THREE.Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z));
    }
  };
  const edge = (x1, y1, x2, y2, steps) => {
    for (let i = 1; i < steps; i++) {
      const k = i / steps;
      pts.push(new THREE.Vector3(x1 + (x2 - x1) * k, y1 + (y2 - y1) * k, z));
    }
  };

  arc(hw - r, hh - r, 0, Math.PI / 2);
  edge(hw - r, hh, -hw + r, hh, 18);
  arc(-hw + r, hh - r, Math.PI / 2, Math.PI);
  edge(-hw, hh - r, -hw, -hh + r, 6);
  arc(-hw + r, -hh + r, Math.PI, Math.PI * 1.5);
  edge(-hw + r, -hh, hw - r, -hh, 18);
  arc(hw - r, -hh + r, Math.PI * 1.5, Math.PI * 2);
  edge(hw, -hh + r, hw, hh - r, 6);

  const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
  curve.arcLengthDivisions = 500;
  return curve;
}

const signTexture = () =>
  canvasTexture(2048, 256, (ctx, w, h) => {
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#0b1c26');
    bg.addColorStop(0.55, '#07121d');
    bg.addColorStop(1, '#050b13');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // 细扫描线
    ctx.strokeStyle = 'rgba(87,255,207,0.05)';
    ctx.lineWidth = 1;
    for (let y = 0; y < h; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 外框 + 霓虹内框
    ctx.strokeStyle = '#1f4d46';
    ctx.lineWidth = 10;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    ctx.strokeStyle = '#57ffcf';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#57ffcf';
    ctx.shadowBlur = 16;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.shadowBlur = 0;

    // 左侧品牌色条
    ctx.fillStyle = '#57ffcf';
    ctx.fillRect(40, 44, 10, h - 88);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // 主标题
    ctx.shadowColor = '#4fe3ff';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#eafffa';
    ctx.font = 'bold 182px "Arial Black", "Segoe UI", sans-serif';
    ctx.fillText('BLOG', 92, h / 2 + 4);
    ctx.shadowBlur = 0;

    // 箭头
    ctx.fillStyle = '#8fffe2';
    ctx.shadowColor = '#57ffcf';
    ctx.shadowBlur = 22;
    ctx.font = 'bold 126px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('↗', 610, h / 2 + 2);
    ctx.shadowBlur = 0;

    // 分隔线
    ctx.fillStyle = 'rgba(87,255,207,0.35)';
    ctx.fillRect(780, 58, 3, h - 116);

    // 右侧说明
    ctx.textAlign = 'right';
    ctx.fillStyle = '#8fd9c9';
    ctx.font = '500 52px "Segoe UI", sans-serif';
    ctx.fillText('RUSTFISHER · AI NOTES', w - 70, 102);
    ctx.fillStyle = '#5f8f87';
    ctx.font = '500 40px "Segoe UI", sans-serif';
    ctx.fillText('RAINY STORE BUILD LOG', w - 70, 166);

    // 底部呼吸条
    ctx.fillStyle = '#57ffcf';
    ctx.fillRect(w - 70 - 300, h - 44, 300, 4);
  });

export function buildBlogSign(builder) {
  const { x, y, z, ry } = L.blogSign;

  const group = new THREE.Group();
  group.name = 'blogSign';
  group.position.set(x, y, z);
  group.rotation.y = ry;

  const frameMat = toon(0x101a28);
  const braceMat = toon(0x4a566c);

  // 宽幅灯箱主体
  const body = box(8.4, 1.06, 0.22, frameMat);
  body.castShadow = true;
  group.add(body);

  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(8.1, 1.0),
    new THREE.MeshBasicMaterial({ map: signTexture(), toneMapped: false })
  );
  face.position.set(0, 0, 0.135);
  group.add(face);

  // 顶部灯条
  const led = box(8.1, 0.03, 0.03, flat(0x9dffe6), { line: false });
  led.position.set(0, 0.51, 0.13);
  group.add(led);

  // 屋顶支架
  [-3.55, 0, 3.55].forEach((px) => {
    const post = box(0.1, 0.2, 0.1, braceMat, { line: false });
    post.position.set(px, -0.58, -0.16);
    group.add(post);
  });
  [0.25, -0.25].forEach((py) => {
    const rail = box(8.0, 0.06, 0.06, braceMat, { line: false });
    rail.position.set(0, py, -0.16);
    group.add(rail);
  });

  const glow = glowSprite(0x57ffcf, 1, 0);
  glow.scale.set(6.4, 1.7, 1);
  glow.position.set(0, 0, 0.42);
  group.add(glow);

  // 绕灯箱边缘跑动的光圈
  const loopCurve = makeLoopCurve(4.18, 0.52, 0.07, 0.165);
  const ringMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uBoost: { value: 0 },
      uColor: { value: new THREE.Color(0x57ffcf) },
    },
    vertexShader: RING_VERT,
    fragmentShader: RING_FRAG,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(
    new THREE.TubeGeometry(loopCurve, 500, 0.035, 6, true),
    ringMat
  );
  ring.name = 'blogRing';
  ring.renderOrder = 5;
  group.add(ring);

  const ringHead = glowSprite(0x9dffe6, 0.55, 0);
  ringHead.name = 'blogRingHead';
  ringHead.renderOrder = 5;
  group.add(ringHead);

  const ringTail = glowSprite(0x57ffcf, 0.36, 0);
  ringTail.name = 'blogRingTail';
  ringTail.renderOrder = 5;
  group.add(ringTail);

  // 不可见命中面：比牌面更大，远距离也容易点中
  const hit = new THREE.Mesh(
    new THREE.PlaneGeometry(8.9, 1.5),
    new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
      colorWrite: false,
    })
  );
  hit.name = 'blogHit';
  hit.position.set(0, 0, 0.2);
  group.add(hit);

  builder.add(group, { delay: 2.8, dur: 0.7, mode: 'pop' });

  let clock = 0;
  let hover = 0;
  let hoverTarget = 0;

  return {
    group,
    hit,
    url: BLOG_URL,

    setHover(on) {
      hoverTarget = on ? 1 : 0;
    },

    update(dt, t) {
      clock += dt;
      hover += (hoverTarget - hover) * Math.min(1, dt * 12);

      // 入场动画结束后再接管缩放，避免与 Assembly 的 pop 冲突
      if (t > 3.6) group.scale.setScalar(1 + hover * 0.02);

      const shown = THREE.MathUtils.smoothstep(t, 2.7, 3.4);
      glow.material.opacity = shown * (0.1 + Math.sin(clock * 1.9) * 0.02 + hover * 0.2);

      // 光圈沿灯箱一圈循环，约 5 秒一圈
      const lap = ((clock * 0.2) % 1 + 1) % 1;
      ringMat.uniforms.uTime.value = lap;
      ringMat.uniforms.uBoost.value = hover;

      const head = loopCurve.getPointAt(lap);
      ringHead.position.set(head.x, head.y, 0.22);
      const tail = loopCurve.getPointAt((lap + 0.935) % 1);
      ringTail.position.set(tail.x, tail.y, 0.22);

      ringHead.material.opacity = shown * (0.35 + hover * 0.3);
      ringTail.material.opacity = shown * 0.16;
    },
  };
}
