import * as THREE from 'three';
import {
  PAL,
  toon,
  flat,
  asphaltTexture,
  sidewalkTexture,
  puddleTexture,
  lightPoolTexture,
  canvasTexture,
} from './materials.js';
import { box, put, layFlat } from './kit.js';
import { L } from './layout.js';

/* 井盖贴图 */
const manholeTexture = canvasTexture(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#3d4454';
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#232936';
  ctx.lineWidth = 8;
  for (let r = 40; r <= 118; r += 26) {
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = '#2b3140';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(w / 2 + Math.cos(a) * 62, h / 2 + Math.sin(a) * 62, 9, 0, Math.PI * 2);
    ctx.fill();
  }
});

/* 排水沟篦子贴图 */
const grateTexture = canvasTexture(64, 256, (ctx, w, h) => {
  ctx.fillStyle = '#1a202c';
  ctx.fillRect(0, 0, w, h);
  for (let y = 6; y < h; y += 18) {
    ctx.fillStyle = '#5a6377';
    ctx.fillRect(4, y, w - 8, 6);
  }
  ctx.fillStyle = 'rgba(120,140,170,0.25)';
  ctx.fillRect(0, 0, 3, h);
  ctx.fillRect(w - 3, 0, 3, h);
});

export function buildGround(builder) {
  /* ---------------- 展台底座 ---------------- */
  const plinth = new THREE.Group();
  plinth.name = 'plinth';

  const body = box(26.2, 1.35, 26.2, toon(0x2b2438), { opacity: 0.35 });
  put(plinth, body, 0, -0.7, 0);

  const trim = box(26.6, 0.26, 26.6, toon(0x171320), { opacity: 0.4 });
  put(plinth, trim, 0, -1.44, 0);

  // 底座金属细线，强化收藏模型的“展台”质感
  const rimMat = flat(0x6fd8c8);
  const rim = box(26.62, 0.035, 26.62, rimMat, { line: false });
  put(plinth, rim, 0, -1.28, 0);

  const top = box(26.0, 0.14, 26.0, toon(0x222a3b), { opacity: 0.35 });
  put(plinth, top, 0, -0.05, 0);

  builder.add(plinth, { delay: 0.0, dur: 0.85, mode: 'rise' });

  /* ---------------- 路面 ---------------- */
  const ground = new THREE.Group();
  ground.name = 'ground';

  const asphalt = new THREE.Mesh(
    new THREE.BoxGeometry(26, 0.06, 26),
    toon(0xdfe8ff, { map: asphaltTexture() })
  );
  asphalt.position.y = 0.03;
  asphalt.receiveShadow = true;
  ground.add(asphalt);

  /* 人行道：分块铺出 L 形街角 */
  const walkTexture = (w, d) => {
    const tex = sidewalkTexture();
    tex.repeat.set(w / 2.6, d / 2.6);
    return toon(0xffffff, { map: tex });
  };

  const slab = (x1, x2, z1, z2, colorShift = 1) => {
    const w = x2 - x1;
    const d = z2 - z1;
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, L.sidewalkH, d),
      walkTexture(w, d)
    );
    mesh.position.set((x1 + x2) / 2, L.sidewalkH / 2, (z1 + z2) / 2);
    mesh.receiveShadow = true;
    ground.add(mesh);
    return mesh;
  };

  const frontWalk = slab(L.walk.front.x1, L.walk.front.x2, L.walk.front.z1, L.walk.front.z2);
  slab(L.walk.side.x1, L.walk.side.x2, L.walk.side.z1, L.walk.side.z2);
  slab(L.walk.far.x1, L.walk.far.x2, L.walk.far.z1, L.walk.far.z2);

  /* 路缘石 */
  const curbMat = toon(PAL.curb);
  const curbFront = box(22.4, 0.1, 0.16, curbMat, { line: false });
  put(ground, curbFront, -2.2, 0.21, 1.33);
  const curbSide = box(0.16, 0.1, 8.6, curbMat, { line: false });
  put(ground, curbSide, 9.53, 0.21, -5.9);
  const curbFar = box(22.6, 0.1, 0.16, curbMat, { line: false });
  put(ground, curbFar, -1.7, 0.21, 7.68);

  /* 巷子地面：深色水泥 */
  const alleyFloor = box(2.4, 0.04, 8.6, toon(0x333949, { map: sidewalkTexture() }), {
    line: false,
  });
  put(ground, alleyFloor, 3.4, 0.2, -5.9);

  /* ---------------- 路面标线 ---------------- */
  const markMat = new THREE.MeshBasicMaterial({
    color: 0xdde8f7,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
  });

  const details = new THREE.Group();
  details.name = 'groundDetails';

  // 斑马线（横穿前街）
  const zebra = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.015, 5.2), markMat);
    stripe.position.set(3.4 + i * 0.92, 0.075, 4.55);
    zebra.add(stripe);
  }
  // 斑马线侧向（拐向小巷的支路）
  for (let i = 0; i < 5; i++) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.015, 0.52), markMat);
    stripe.position.set(11.2, 0.075, 2.3 + i * 0.86);
    zebra.add(stripe);
  }
  details.add(zebra);

  // 车道边线
  const edgeLine = new THREE.Mesh(new THREE.BoxGeometry(22.6, 0.012, 0.16), markMat);
  edgeLine.position.set(-1.7, 0.07, 6.9);
  details.add(edgeLine);

  const edgeLine2 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.012, 22.6), markMat);
  edgeLine2.position.set(12.55, 0.07, 0.0);
  details.add(edgeLine2);

  // 停车位（左后方）
  const parking = new THREE.Group();
  const pLine = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.012, d), markMat);
    m.position.set(x, 0.07, z);
    parking.add(m);
  };
  pLine(0.12, 3.0, -12.2, 5.0);
  pLine(0.12, 3.0, -9.2, 5.0);
  pLine(3.1, 0.12, -10.7, 3.5);
  pLine(0.12, 0.6, -11.4, 4.9);
  pLine(0.12, 0.6, -10.0, 4.9);
  details.add(parking);

  // 井盖
  const manhole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.62, 0.02, 24),
    toon(0xffffff, { map: manholeTexture })
  );
  manhole.position.set(5.6, 0.075, 6.5);
  details.add(manhole);

  // 排水沟（沿街缘）
  const gutterMat = toon(0x2a3040);
  const gutter = box(20.0, 0.02, 0.34, gutterMat, { line: false });
  put(details, gutter, -3.0, 0.06, 1.62);

  const grateMat = toon(0xffffff, { map: grateTexture });
  [-7.4, -2.6, 2.2, 6.6].forEach((x) => {
    const grate = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.03, 0.3), grateMat);
    grate.position.set(x, 0.075, 1.62);
    details.add(grate);
  });

  // 人行道上的小水洼（静态高光斑）
  const poolTex = puddleTexture();
  const puddleMat = new THREE.MeshBasicMaterial({
    map: poolTex,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  [
    [0.2, 3.1, 4.4, 3.0],
    [-5.2, 5.4, 3.6, 2.4],
    [6.9, 2.4, 3.0, 2.2],
    [11.0, 9.8, 3.4, 2.6],
    [-10.2, 8.6, 3.0, 2.2],
  ].forEach(([x, z, w, d]) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), puddleMat);
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, 0.069, z);
    details.add(p);
  });

  /* 店内灯光洒在人行道上的暖色光池（增加温度感） */
  const warmPool = new THREE.Mesh(
    new THREE.PlaneGeometry(7.6, 4.4),
    new THREE.MeshBasicMaterial({
      map: lightPoolTexture('255,224,168'),
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  warmPool.rotation.x = -Math.PI / 2;
  warmPool.position.set(-4.0, 0.2, -0.3);
  details.add(warmPool);

  const coolPool = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 2.6),
    new THREE.MeshBasicMaterial({
      map: lightPoolTexture('150,215,255'),
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  coolPool.rotation.x = -Math.PI / 2;
  coolPool.position.set(7.4, 0.2, -1.4);
  details.add(coolPool);

  builder.add(ground, { delay: 0.35, dur: 0.8, mode: 'rise' });
  builder.add(details, { delay: 0.75, dur: 0.9, mode: 'rise' });

  return { plinth, ground, details };
}
