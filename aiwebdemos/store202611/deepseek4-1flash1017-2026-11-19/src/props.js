import * as THREE from 'three';
import {
  PAL,
  toon,
  flat,
  glowSprite,
  canvasTexture,
  vendingTexture,
  puddleTexture,
} from './materials.js';
import { box, put, cyl, plane, contactShadow } from './kit.js';
import { L } from './layout.js';

const WALK_Y = L.sidewalkH;

/** 两点之间的圆杆 */
function rod(a, b, r, mat, seg = 8) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg), mat);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

/* ---------------- 自动贩卖机 ---------------- */
function vendingMachine() {
  const g = new THREE.Group();
  const bodyMat = toon(0xdfe7f3);
  const darkMat = toon(0x2b3242);

  const body = box(1.05, 1.96, 0.74, bodyMat);
  body.position.y = 0.98;
  body.castShadow = true;
  g.add(body);

  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96, 1.8),
    new THREE.MeshBasicMaterial({ map: vendingTexture() })
  );
  face.position.set(0, 1.0, 0.375);
  g.add(face);

  const topBand = box(1.09, 0.14, 0.78, darkMat, { line: false });
  topBand.position.y = 2.0;
  g.add(topBand);

  const sidePanel = box(0.06, 1.96, 0.74, toon(0x2f6fc4), { line: false });
  sidePanel.position.set(-0.55, 0.98, 0);
  g.add(sidePanel);

  const base = box(1.08, 0.1, 0.78, darkMat, { line: false });
  base.position.y = 0.05;
  g.add(base);

  const glow = glowSprite(0xbfe8ff, 2.6, 0.5);
  glow.position.set(0, 1.2, 0.75);
  g.add(glow);

  const light = new THREE.PointLight(0xcfeaff, 13, 4.6, 2);
  light.position.set(0, 1.35, 0.85);
  g.add(light);

  const shadow = contactShadow(1.6, 1.2, 0.6);
  shadow.position.set(0, 0.012, 0.1);
  g.add(shadow);

  return g;
}

/* ---------------- 自行车 ---------------- */
function bicycle() {
  const g = new THREE.Group();
  const frameMat = toon(0x38566b);
  const tyreMat = toon(0x1b2029);
  const metalMat = toon(0xa9b4c4);
  const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);

  [-0.55, 0.55].forEach((x) => {
    const tyre = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.032, 6, 22), tyreMat);
    tyre.position.set(x, 0.34, 0);
    g.add(tyre);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.012, 4, 20), metalMat);
    rim.position.set(x, 0.34, 0);
    g.add(rim);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      g.add(
        rod(
          V(x, 0.34),
          V(x + Math.cos(a) * 0.29, 0.34 + Math.sin(a) * 0.29),
          0.008,
          metalMat,
          4
        )
      );
    }
  });

  const bottom = V(0.02, 0.34);
  const seatTop = V(-0.26, 0.92);
  const headTop = V(0.44, 0.86);
  g.add(rod(V(-0.55, 0.34), seatTop, 0.026, frameMat));
  g.add(rod(V(-0.55, 0.34), bottom, 0.026, frameMat));
  g.add(rod(seatTop, bottom, 0.026, frameMat));
  g.add(rod(seatTop, headTop, 0.026, frameMat));
  g.add(rod(bottom, headTop, 0.026, frameMat));
  g.add(rod(headTop, V(0.55, 0.34), 0.024, frameMat));

  // 车把
  const bar = rod(V(0.44, 0.86), V(0.5, 1.02), 0.022, metalMat);
  g.add(bar);
  g.add(rod(V(0.5, 1.02, -0.26), V(0.5, 1.02, 0.26), 0.022, metalMat));

  // 车座
  const saddle = box(0.24, 0.06, 0.12, toon(0x24282f), { line: false });
  saddle.position.set(-0.28, 0.96, 0);
  g.add(saddle);

  // 前车篮
  const basketMat = toon(0x8f9bab);
  const basket = box(0.3, 0.22, 0.32, basketMat, { line: true });
  basket.position.set(0.62, 0.82, 0);
  g.add(basket);

  // 脚撑
  g.add(rod(V(-0.1, 0.34), V(-0.2, 0.0), 0.014, metalMat));

  g.rotation.y = Math.PI / 2;
  return g;
}

/* ---------------- 雨伞架 + 雨伞 ---------------- */
function umbrellaStand() {
  const g = new THREE.Group();
  const potMat = toon(0x8f97a8);
  const pot = cyl(0.2, 0.18, 0.52, potMat, { seg: 14, line: true });
  pot.position.y = 0.26;
  g.add(pot);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.016, 6, 18), toon(0xb7bfcc));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.52;
  g.add(rim);

  const colors = [0x5aa9d8, 0xe07a9a, 0x39465e, 0x7ec08a];
  colors.forEach((c, i) => {
    const a = (i / colors.length) * Math.PI * 2;
    const x = Math.cos(a) * 0.09;
    const z = Math.sin(a) * 0.09;
    const handle = rod(
      new THREE.Vector3(x, 0.2, z),
      new THREE.Vector3(x * 2.4 + 0.06, 1.02, z * 2.4 + 0.05),
      0.014,
      toon(c)
    );
    g.add(handle);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.3, 10), toon(c, { side: THREE.DoubleSide }));
    tip.position.set(x * 2.4 + 0.06, 0.95, z * 2.4 + 0.05);
    tip.rotation.set(Math.sin(a) * 0.4, 0, Math.cos(a) * 0.4);
    g.add(tip);
  });
  return g;
}

/* ---------------- 垃圾桶 ---------------- */
function trashBins() {
  const g = new THREE.Group();
  const binA = cyl(0.24, 0.22, 0.74, toon(0x4b5668), { seg: 14, line: true });
  binA.position.set(0, 0.37, 0);
  g.add(binA);
  const lidA = cyl(0.25, 0.25, 0.08, toon(0x2f88c9), { seg: 14 });
  lidA.position.set(0, 0.78, 0);
  g.add(lidA);

  const binB = cyl(0.22, 0.2, 0.66, toon(0x4b5668), { seg: 14, line: true });
  binB.position.set(0.58, 0.33, 0.1);
  g.add(binB);
  const lidB = cyl(0.23, 0.23, 0.08, toon(0x3fae7a), { seg: 14 });
  lidB.position.set(0.58, 0.7, 0.1);
  g.add(lidB);

  const crate = box(0.44, 0.34, 0.34, toon(0x50808f));
  crate.position.set(-0.52, 0.17, 0.16);
  g.add(crate);

  return g;
}

/* ---------------- 路灯 ---------------- */
function streetLamp() {
  const g = new THREE.Group();
  const poleMat = toon(0x4a5263);
  const base = cyl(0.17, 0.2, 0.28, poleMat, { seg: 12 });
  base.position.y = 0.14;
  g.add(base);
  const pole = cyl(0.07, 0.09, 4.2, poleMat, { seg: 12 });
  pole.position.y = 2.3;
  g.add(pole);

  const arm = rod(new THREE.Vector3(0, 4.34, 0), new THREE.Vector3(0, 4.36, 0.86), 0.055, poleMat);
  g.add(arm);
  const head = box(0.36, 0.16, 0.6, toon(0x353c4c));
  head.position.set(0, 4.3, 1.0);
  g.add(head);
  const lampFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffdba4 })
  );
  lampFace.rotation.x = Math.PI / 2;
  lampFace.position.set(0, 4.21, 1.0);
  g.add(lampFace);

  const glow = glowSprite(0xffc98a, 3.4, 0.6);
  glow.position.set(0, 4.2, 1.0);
  g.add(glow);

  const light = new THREE.PointLight(0xffc98a, 48, 15, 2);
  light.position.set(0, 4.0, 1.05);
  g.add(light);

  return g;
}

/* ---------------- 电线杆 ---------------- */
function utilityPole() {
  const g = new THREE.Group();
  const mat = toon(0x8d94a3);
  const pole = cyl(0.14, 0.2, 8.1, mat, { seg: 12, line: true });
  pole.position.y = 4.05;
  pole.castShadow = true;
  g.add(pole);

  const metal = toon(0x4a5162);
  [6.9, 7.5].forEach((y, i) => {
    const arm = box(1.9 - i * 0.4, 0.09, 0.12, metal);
    arm.position.set(0, y, 0.1);
    g.add(arm);
    for (let k = -1; k <= 1; k += 2) {
      const ins = cyl(0.05, 0.05, 0.14, toon(0xdfe6ef), { seg: 8 });
      ins.position.set(k * (0.7 - i * 0.12), y + 0.12, 0.1);
      g.add(ins);
    }
  });

  // 变压器
  const transformer = cyl(0.24, 0.24, 0.7, toon(0x6f7787), { seg: 12, line: true });
  transformer.position.set(0, 5.9, 0.32);
  g.add(transformer);

  // 布线盒 + 爬梯
  const boxUnit = box(0.34, 0.5, 0.22, toon(0x3e4658));
  boxUnit.position.set(0, 4.9, 0.22);
  g.add(boxUnit);

  const ladder = box(0.28, 2.8, 0.05, metal, { line: false });
  ladder.position.set(0, 2.6, 0.18);
  g.add(ladder);
  for (let i = 0; i < 8; i++) {
    const step = box(0.26, 0.03, 0.06, metal, { line: false });
    step.position.set(0, 1.4 + i * 0.34, 0.24);
    g.add(step);
  }

  return g;
}

/* ---------------- 路牌 ---------------- */
function streetSign() {
  const g = new THREE.Group();
  const pole = cyl(0.045, 0.05, 3.1, toon(0x596073), { seg: 10 });
  pole.position.y = 1.55;
  g.add(pole);

  const nameTex = canvasTexture(512, 148, (ctx, w, h) => {
    ctx.fillStyle = '#f3f6fa';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#2b6fb0';
    ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, w - 12, h - 12);
    ctx.fillStyle = '#22304a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 58px "Yu Gothic UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('桜町 二丁目', w / 2, 60);
    ctx.fillStyle = '#2b6fb0';
    ctx.font = 'bold 28px "Segoe UI", sans-serif';
    ctx.fillText('SAKURA-MACHI 2', w / 2, 112);
  });

  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 0.44),
    new THREE.MeshStandardMaterial({ map: nameTex, roughness: 0.9, metalness: 0, side: THREE.DoubleSide })
  );
  plate.position.set(0, 2.86, 0);
  g.add(plate);

  const arrowTex = canvasTexture(256, 128, (ctx, w, h) => {
    ctx.fillStyle = '#1f5fa8';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f7fbff';
    ctx.beginPath();
    ctx.moveTo(30, h / 2);
    ctx.lineTo(90, 18);
    ctx.lineTo(90, 44);
    ctx.lineTo(210, 44);
    ctx.lineTo(210, 84);
    ctx.lineTo(90, 84);
    ctx.lineTo(90, 110);
    ctx.closePath();
    ctx.fill();
  });
  const arrow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.44),
    new THREE.MeshBasicMaterial({ map: arrowTex, side: THREE.DoubleSide })
  );
  arrow.position.set(0.28, 2.4, 0);
  arrow.rotation.y = 0.2;
  g.add(arrow);

  return g;
}

/* ---------------- 街角护栏 ---------------- */
function guardrailSegment(length) {
  const g = new THREE.Group();
  const mat = toon(0xd8dfe9);
  const count = Math.max(2, Math.round(length / 1.25) + 1);
  for (let i = 0; i < count; i++) {
    const post = box(0.07, 0.92, 0.07, mat, { line: false });
    post.position.set(-length / 2 + (length / (count - 1)) * i, 0.46, 0);
    g.add(post);
  }
  [0.62, 0.86].forEach((y) => {
    const rail = box(length, 0.06, 0.06, mat, { line: false });
    rail.position.set(0, y, 0);
    g.add(rail);
  });
  return g;
}

/* ---------------- 空调外机 ---------------- */
function acUnit() {
  const g = new THREE.Group();
  const body = box(0.9, 0.6, 0.34, toon(0xb3b9c6));
  g.add(body);
  const fan = new THREE.Mesh(new THREE.CircleGeometry(0.19, 18), toon(0x4c5466));
  fan.position.set(0.08, 0, 0.18);
  g.add(fan);
  const grill = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.24, 18), flat(0x7c8598));
  grill.position.set(0.08, 0, 0.185);
  g.add(grill);
  const bracket = box(0.9, 0.06, 0.4, toon(0x4a5162), { line: false });
  bracket.position.set(0, -0.36, 0.02);
  g.add(bracket);
  return g;
}

/* ---------------- 小巷道具 ---------------- */
function alleyProps() {
  const g = new THREE.Group();

  // 啤酒箱堆
  const crateColors = [0x2f6fc4, 0xc84c3f];
  for (let i = 0; i < 5; i++) {
    const crate = box(0.48, 0.3, 0.36, toon(crateColors[i % 2]));
    crate.position.set(3.9 + (i % 2) * 0.06, 0.15 + Math.floor(i / 2) * 0.31, -6.0 + (i % 3) * 0.05);
    crate.rotation.y = (Math.random() - 0.5) * 0.2;
    g.add(crate);
  }

  // 垃圾袋
  const bagMat = toon(0xd5d9e0);
  [[3.1, -8.4], [3.4, -8.7]].forEach(([x, z], i) => {
    const bag = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), bagMat);
    bag.position.set(x, 0.24 + i * 0.05, z);
    bag.scale.set(1, 0.85, 1);
    g.add(bag);
  });

  // 巷子里的木门
  const door = box(0.06, 1.9, 0.9, toon(0x5a4433));
  door.position.set(4.57, 1.13, -7.6);
  g.add(door);
  const doorFrame = box(0.08, 2.05, 1.04, toon(0x38291f), { line: false });
  doorFrame.position.set(4.56, 1.15, -7.6);
  g.add(doorFrame);

  // 墙上的管线
  const pipeMat = toon(0x8b93a2);
  const pipe = cyl(0.05, 0.05, 7.4, pipeMat, { seg: 8 });
  pipe.rotation.x = Math.PI / 2;
  pipe.position.set(2.34, 2.2, -5.6);
  g.add(pipe);
  const pipe2 = cyl(0.04, 0.04, 7.4, pipeMat, { seg: 8 });
  pipe2.rotation.x = Math.PI / 2;
  pipe2.position.set(2.34, 2.04, -5.6);
  g.add(pipe2);

  // 巷口的小灯
  const alleyLight = new THREE.PointLight(0xffa97a, 9, 5, 2);
  alleyLight.position.set(3.5, 2.2, -3.4);
  g.add(alleyLight);

  return g;
}

/* ---------------- 远景绿篱 + 行道树 ---------------- */
function farGreenery() {
  const g = new THREE.Group();

  // 矮墙 + 绿篱
  const wall = box(22.4, 0.55, 0.5, toon(0x5c6274));
  wall.position.set(-1.4, 0.27, 10.9);
  g.add(wall);

  const hedgeMat = toon(0x2c5b46);
  for (let i = 0; i < 16; i++) {
    const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 0), hedgeMat);
    bush.position.set(-12.2 + i * 1.35, 0.85 + Math.random() * 0.16, 11.0 + (Math.random() - 0.5) * 0.35);
    bush.scale.set(1.1, 0.85, 0.9);
    g.add(bush);
  }

  // 行道树
  const trunkMat = toon(0x4a3b34);
  const leafMat = toon(0x2a5546);
  const leafMat2 = toon(0x31684f);
  [-9.5, -2.5, 4.6].forEach((x, i) => {
    const t = new THREE.Group();
    const trunk = cyl(0.1, 0.16, 2.4, trunkMat, { seg: 8, line: true });
    trunk.position.y = 1.2;
    t.add(trunk);
    for (let k = 0; k < 4; k++) {
      const leaf = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.72 - k * 0.06, 0),
        k % 2 ? leafMat : leafMat2
      );
      leaf.position.set(
        Math.cos(k * 1.7 + i) * 0.42,
        2.3 + k * 0.36,
        Math.sin(k * 1.7 + i) * 0.42
      );
      leaf.scale.set(1.1, 0.9, 1.1);
      t.add(leaf);
    }
    t.position.set(x, 0.0, 11.9);
    g.add(t);
  });

  // 远处矮楼（收边，压低高度避免遮挡街景）
  const farBlock = box(10, 1.7, 1.6, toon(0x3b4056), { opacity: 0.4 });
  farBlock.position.set(3.4, 0.85, 12.5);
  g.add(farBlock);
  for (let i = 0; i < 5; i++) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.5),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffcf92 : 0x9fc4ff, side: THREE.DoubleSide })
    );
    w.position.set(-0.3 + i * 1.9, 1.0, 11.68);
    g.add(w);
  }

  return g;
}

export function buildProps(builder) {
  /* --- 自动贩卖机（贴着右侧楼侧墙，面向侧街） --- */
  const vendors = new THREE.Group();
  [-3.7, -4.95].forEach((z) => {
    const v = vendingMachine();
    v.position.set(8.78, WALK_Y, z);
    v.rotation.y = Math.PI / 2;
    vendors.add(v);
  });
  builder.add(vendors, { delay: 3.0, dur: 0.7, mode: 'pop', from: 1.4 });

  /* --- 自行车 --- */
  const bike = bicycle();
  bike.position.set(-7.3, WALK_Y, -2.1);
  bike.rotation.y = 0;
  builder.add(bike, { delay: 3.15, dur: 0.7, mode: 'pop', from: 1.2 });

  /* --- 雨伞架 / 垃圾桶 --- */
  const entranceProps = new THREE.Group();
  const umbrellas = umbrellaStand();
  umbrellas.position.set(1.85, WALK_Y, -2.35);
  entranceProps.add(umbrellas);

  const bins = trashBins();
  bins.position.set(3.2, WALK_Y, -2.3);
  entranceProps.add(bins);

  const plants = new THREE.Group();
  [0, 1].forEach((i) => {
    const pot = cyl(0.17, 0.14, 0.3, toon(0x7a5a4a), { seg: 10 });
    pot.position.set(-3.3 + i * 0.52, WALK_Y + 0.15, -2.15);
    plants.add(pot);
    const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), toon(0x356a4d));
    bush.position.set(-3.3 + i * 0.52, WALK_Y + 0.45, -2.15);
    plants.add(bush);
  });
  entranceProps.add(plants);

  builder.add(entranceProps, { delay: 3.1, dur: 0.7, mode: 'pop', from: 1.0 });

  /* --- 路灯 --- */
  const lamps = new THREE.Group();
  const lampA = streetLamp();
  lampA.position.set(9.05, WALK_Y, 2.6);
  lamps.add(lampA);
  const lampB = streetLamp();
  lampB.position.set(-11.6, WALK_Y, 0.9);
  lampB.rotation.y = -Math.PI / 2;
  lamps.add(lampB);
  builder.add(lamps, { delay: 3.5, dur: 0.9, mode: 'rise' });

  /* --- 电线杆 --- */
  const pole = utilityPole();
  pole.position.set(9.05, WALK_Y, -3.4);
  builder.add(pole, { delay: 3.7, dur: 0.9, mode: 'rise' });

  /* --- 路牌 --- */
  const sign = streetSign();
  sign.position.set(9.0, WALK_Y, 1.9);
  sign.rotation.y = -0.35;
  builder.add(sign, { delay: 3.45, dur: 0.7, mode: 'pop', from: 1.2 });

  /* --- 街角护栏 --- */
  const rails = new THREE.Group();
  const railA = guardrailSegment(8.0);
  railA.position.set(-4.6, WALK_Y, 1.52);
  rails.add(railA);
  const railB = guardrailSegment(4.2);
  railB.position.set(9.52, WALK_Y, 5.0);
  railB.rotation.y = Math.PI / 2;
  rails.add(railB);
  builder.add(rails, { delay: 3.4, dur: 0.8, mode: 'drop', from: 1.2 });

  /* --- 转角反光镜 --- */
  const mirror = new THREE.Group();
  const mPole = cyl(0.05, 0.06, 3.0, toon(0x8b93a3), { seg: 10 });
  mPole.position.y = 1.5;
  mirror.add(mPole);
  const frame = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 8, 24), toon(0xe07a3a));
  frame.position.set(0, 3.0, 0.1);
  mirror.add(frame);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.4, 24), toon(0x6d879b, { emissive: 0x10222e }));
  glass.position.set(0, 3.0, 0.16);
  mirror.add(glass);
  mirror.position.set(9.25, WALK_Y, 0.3);
  mirror.rotation.y = -0.6;
  builder.add(mirror, { delay: 3.55, dur: 0.7, mode: 'pop', from: 1.2 });

  /* --- 停车位标志 --- */
  const parkSign = new THREE.Group();
  const psPole = cyl(0.045, 0.05, 2.2, toon(0x8b93a3), { seg: 8 });
  psPole.position.y = 1.1;
  parkSign.add(psPole);
  const pTex = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#1f5fa8';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 190px "Arial Black", sans-serif';
    ctx.fillText('P', w / 2, h / 2 - 10);
  });
  const pPlate = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.62),
    new THREE.MeshBasicMaterial({ map: pTex, side: THREE.DoubleSide })
  );
  pPlate.position.set(0, 2.1, 0);
  parkSign.add(pPlate);
  parkSign.position.set(-12.4, WALK_Y, 3.3);
  parkSign.rotation.y = 0.4;
  builder.add(parkSign, { delay: 3.5, dur: 0.7, mode: 'pop', from: 1.2 });

  /* --- 墙挂空调 + 小巷道具 --- */
  const wallProps = new THREE.Group();
  const ac1 = acUnit();
  ac1.position.set(2.42, 2.7, -4.3);
  ac1.rotation.y = Math.PI / 2;
  wallProps.add(ac1);
  const ac2 = acUnit();
  ac2.position.set(2.42, 3.5, -7.2);
  ac2.rotation.y = Math.PI / 2;
  wallProps.add(ac2);
  const ac3 = acUnit();
  ac3.position.set(4.38, 1.7, -3.9);
  ac3.rotation.y = -Math.PI / 2;
  wallProps.add(ac3);

  wallProps.add(alleyProps());
  builder.add(wallProps, { delay: 3.1, dur: 0.8, mode: 'pop', from: 1.2 });

  /* --- 远景绿篱与树 --- */
  const green = farGreenery();
  builder.add(green, { delay: 2.6, dur: 0.9, mode: 'rise' });

  /* --- 湿地面霓虹倒影 --- */
  const reflection = new THREE.Group();
  const puddleTex = puddleTexture();
  const reflMat = new THREE.MeshBasicMaterial({
    map: puddleTex,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  [
    [-4.2, 2.6, 8.0, 4.6],
    [7.6, 3.2, 4.6, 3.0],
    [11.2, -1.4, 3.6, 4.0],
  ].forEach(([x, z, w, d]) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), reflMat);
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, 0.072, z);
    reflection.add(p);
  });
  builder.add(reflection, { delay: 4.3, dur: 0.8, mode: 'rise' });
}
