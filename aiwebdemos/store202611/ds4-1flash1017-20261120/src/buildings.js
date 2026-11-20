import * as THREE from 'three';
import { PAL, toon, flat, glowSprite, canvasTexture, shutterTexture, bulletinTexture } from './materials.js';
import { box, put, cyl, wire, plane } from './kit.js';
import { L } from './layout.js';

/* 纵向居酒屋灯箱 */
const izakayaTexture = canvasTexture(256, 768, (ctx, w, h) => {
  ctx.fillStyle = '#b8322f';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#f6e2c0';
  ctx.lineWidth = 8;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  ctx.fillStyle = '#f9edd6';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 118px "Yu Gothic UI", "Microsoft YaHei", sans-serif';
  ['酒', '処', 'さ', 'く', 'ら'].forEach((ch, i) => {
    ctx.fillText(ch, w / 2, 110 + i * 128);
  });
});

/* 老式店铺招牌 */
const cafeTexture = canvasTexture(768, 192, (ctx, w, h) => {
  ctx.fillStyle = '#2e2a26';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#c9a86a';
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, w - 16, h - 16);
  ctx.fillStyle = '#e6d3a8';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 92px "Yu Gothic UI", "Microsoft YaHei", serif';
  ctx.fillText('喫茶 さくら', w / 2, h / 2 + 4);
});

export function buildBuildings(builder) {
  const R = L.rightBuilding;
  const right = new THREE.Group();
  right.name = 'rightBuilding';

  const wallMat = toon(0x6d6879);
  const wallDark = toon(0x55505f);

  const main = box(R.x2 - R.x1, R.h, R.z2 - R.z1, wallMat);
  main.position.set((R.x1 + R.x2) / 2, R.h / 2, (R.z1 + R.z2) / 2);
  main.castShadow = true;
  main.receiveShadow = true;
  right.add(main);

  // 楼层分隔线
  [2.75, 4.25].forEach((y) => {
    const line = box(R.x2 - R.x1 + 0.16, 0.12, R.z2 - R.z1 + 0.16, wallDark, { line: false });
    line.position.set((R.x1 + R.x2) / 2, y, (R.z1 + R.z2) / 2);
    right.add(line);
  });

  // 一层卷帘门
  const shutter = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0, 2.3),
    toon(0xffffff, { map: shutterTexture() })
  );
  shutter.position.set(7.15, 1.33, R.z2 + 0.012);
  right.add(shutter);
  const shutterFrame = box(2.2, 0.16, 0.12, toon(0x3b3a44));
  shutterFrame.position.set(7.15, 2.52, R.z2 + 0.03);
  right.add(shutterFrame);

  // 老店招牌
  const cafeSign = new THREE.Mesh(
    new THREE.PlaneGeometry(3.3, 0.82),
    new THREE.MeshBasicMaterial({ map: cafeTexture })
  );
  cafeSign.position.set(6.4, 2.98, R.z2 + 0.03);
  right.add(cafeSign);
  const cafeGlow = glowSprite(0xffcf8a, 2.6, 0.2);
  cafeGlow.position.set(6.4, 2.98, R.z2 + 0.4);
  right.add(cafeGlow);

  // 二层 / 三层窗
  const litMat = new THREE.MeshBasicMaterial({ color: 0xd9a86a });
  const litCool = new THREE.MeshBasicMaterial({ color: 0x7fa3c9 });
  const darkWin = toon(0x2b3040);
  const windowAt = (x, y, lit, cool = false) => {
    const recess = box(1.18, 1.24, 0.1, toon(0x4a4655), { line: false });
    recess.position.set(x, y, R.z2 + 0.02);
    right.add(recess);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.98, 1.04),
      lit ? (cool ? litCool : litMat) : darkWin
    );
    glass.position.set(x, y, R.z2 + 0.08);
    right.add(glass);
    const sill = box(1.26, 0.08, 0.22, toon(0x8a8291), { line: false });
    sill.position.set(x, y - 0.68, R.z2 + 0.1);
    right.add(sill);
  };
  windowAt(5.5, 3.6, true);
  windowAt(7.6, 3.6, false);
  windowAt(5.5, 4.98, true, true);
  windowAt(7.6, 4.98, false);

  // 公告栏
  const board = box(1.1, 0.94, 0.08, toon(0x3b2f28));
  board.position.set(5.2, 1.6, R.z2 + 0.06);
  right.add(board);
  const boardFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98, 0.8),
    toon(0xffffff, { map: bulletinTexture() })
  );
  boardFace.position.set(5.2, 1.6, R.z2 + 0.11);
  right.add(boardFace);

  // 侧面（朝侧街）空调外机 + 管道
  const acMat = toon(0xa8adba);
  const acDark = toon(0x525a6c);
  [2.2, 4.6].forEach((y, i) => {
    const ac = box(0.34, 0.62, 0.9, acMat);
    ac.position.set(R.x2 + 0.19, y, -6.2 + i * 1.4);
    right.add(ac);
    const fan = new THREE.Mesh(new THREE.CircleGeometry(0.2, 18), acDark);
    fan.position.set(R.x2 + 0.37, y, -6.2 + i * 1.4);
    fan.rotation.y = Math.PI / 2;
    right.add(fan);
  });

  const pipe = cyl(0.06, 0.06, 5.2, toon(0x9aa1b0), { seg: 8 });
  pipe.position.set(R.x2 + 0.12, 2.8, -2.2);
  right.add(pipe);

  // 侧墙竖向居酒屋灯箱
  const boxSign = box(0.18, 2.2, 0.56, toon(0x7d2523));
  boxSign.position.set(R.x2 + 0.22, 3.2, -8.9);
  right.add(boxSign);
  const izaFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.54, 2.16),
    new THREE.MeshBasicMaterial({ map: izakayaTexture })
  );
  izaFace.position.set(R.x2 + 0.32, 3.2, -8.9);
  izaFace.rotation.y = Math.PI / 2;
  right.add(izaFace);
  const izaGlow = glowSprite(0xff6a5a, 3.2, 0.4);
  izaGlow.position.set(R.x2 + 0.5, 3.2, -8.9);
  right.add(izaGlow);
  const izaLight = new THREE.PointLight(0xff6f5c, 18, 8, 2);
  izaLight.position.set(R.x2 + 0.9, 3.1, -8.9);
  right.add(izaLight);

  // 屋顶：护栏、水箱、天线
  const railMat = toon(0x767d8e);
  for (let i = 0; i < 4; i++) {
    const post = box(0.05, 0.6, 0.05, railMat, { line: false });
    post.position.set(R.x1 + 0.3 + i * 0.9, R.h + 0.3, R.z2 - 0.2);
    right.add(post);
  }
  const railTop = box(3.4, 0.05, 0.05, railMat, { line: false });
  railTop.position.set(R.x1 + 1.65, R.h + 0.58, R.z2 - 0.2);
  right.add(railTop);

  const tank = cyl(0.6, 0.6, 1.0, toon(0x8d94a5), { seg: 14, line: true });
  tank.position.set(R.x1 + 1.4, R.h + 0.85, R.z1 + 2.0);
  right.add(tank);

  const ant = cyl(0.025, 0.025, 2.4, toon(0x9aa1b0), { seg: 6 });
  ant.position.set(R.x1 + 2.6, R.h + 1.2, R.z1 + 1.4);
  right.add(ant);

  // 巷道口的红灯笼
  const lanternMat = new THREE.MeshBasicMaterial({ color: 0xff7a55 });
  const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 12), lanternMat);
  lantern.scale.set(1, 1.25, 1);
  lantern.position.set(4.95, 3.1, -1.5);
  right.add(lantern);
  const lanternTop = cyl(0.09, 0.09, 0.06, toon(0x3a2a22), { seg: 8 });
  lanternTop.position.set(4.95, 3.4, -1.5);
  right.add(lanternTop);
  const lanternGlow = glowSprite(0xff7a4a, 1.1, 0.42);
  lanternGlow.position.set(4.95, 3.1, -1.5);
  right.add(lanternGlow);
  const lanternLight = new THREE.PointLight(0xff8a5a, 14, 6, 2);
  lanternLight.position.set(4.95, 2.95, -1.35);
  right.add(lanternLight);

  builder.add(right, { delay: 1.85, dur: 1.05, mode: 'rise' });

  /* ---------------- 背后的街区剪影 ---------------- */
  const back = new THREE.Group();
  back.name = 'backRow';

  const blocks = [
    { x1: -13, x2: -6.2, h: 7.6, c: 0x3a3d52 },
    { x1: -6.2, x2: -1.4, h: 6.3, c: 0x434459 },
    { x1: -1.4, x2: 4.4, h: 8.2, c: 0x363a4c },
    { x1: 4.4, x2: 8.4, h: 6.9, c: 0x3f4154 },
  ];

  blocks.forEach(({ x1, x2, h, c }, bi) => {
    const b = box(x2 - x1, h, 2.8, toon(c), { opacity: 0.4 });
    b.position.set((x1 + x2) / 2, h / 2, -11.6);
    back.add(b);

    // 窗户：少量亮灯
    const cols = Math.floor((x2 - x1) / 1.8);
    for (let r = 0; r < 3; r++) {
      for (let ci = 0; ci < cols; ci++) {
        const lit = Math.random() > 0.68;
        const w = new THREE.Mesh(
          new THREE.PlaneGeometry(0.7, 0.9),
          lit ? new THREE.MeshBasicMaterial({ color: Math.random() > 0.4 ? 0xffcf92 : 0xb9dcff }) : toon(0x262b3b)
        );
        w.position.set(x1 + 1.0 + ci * 1.8, 2.4 + r * 1.7, -10.18);
        back.add(w);
      }
    }

    // 屋顶小物
    if (bi % 2 === 0) {
      const t = cyl(0.45, 0.45, 0.8, toon(0x6f7688), { seg: 10 });
      t.position.set((x1 + x2) / 2 + 1.0, h + 0.4, -11.8);
      back.add(t);
    }
  });

  builder.add(back, { delay: 1.6, dur: 1.0, mode: 'rise' });

  /* ---------------- 电线 ---------------- */
  const wires = new THREE.Group();
  const poleTop = new THREE.Vector3(9.05, 8.1, -3.4);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x11161f });

  const drops = [
    [new THREE.Vector3(9.05, 7.9, -3.4), new THREE.Vector3(4.9, 6.4, -4.6), 1.1],
    [new THREE.Vector3(9.05, 7.5, -3.4), new THREE.Vector3(8.0, 6.1, -8.6), 0.9],
    [new THREE.Vector3(9.05, 7.2, -3.4), new THREE.Vector3(2.4, 4.6, -9.6), 1.5],
    [new THREE.Vector3(9.05, 7.7, -3.4), new THREE.Vector3(-9.4, 5.2, -9.4), 1.8],
    [new THREE.Vector3(9.05, 6.9, -3.4), new THREE.Vector3(9.2, 5.6, 12.6), 1.2],
  ];

  drops.forEach(([a, b, sag]) => {
    wires.add(wire(a, b, sag, 0.022, wireMat));
  });

  builder.add(wires, { delay: 3.6, dur: 0.9, mode: 'drop', from: 2.4 });

  return { right, back, poleTop };
}
