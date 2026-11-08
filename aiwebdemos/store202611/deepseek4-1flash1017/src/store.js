import * as THREE from 'three';
import {
  PAL,
  toon,
  flat,
  canvasTexture,
  storeSignTexture,
  bladeSignTexture,
  posterTexture,
  glowSprite,
  roofSurface,
} from './materials.js';
import { box, put, cyl, contactShadow, plane } from './kit.js';
import { L } from './layout.js';
import { buildInterior } from './interior.js';

const S = L.store;

/* 门头玻璃材质 */
const glassMat = new THREE.MeshPhysicalMaterial({
  color: 0xcfeaff,
  transparent: true,
  opacity: 0.05,
  roughness: 0.5,
  metalness: 0,
  specularIntensity: 0.15,
  side: THREE.DoubleSide,
  depthWrite: false,
});
glassMat.renderOrder = 4;

/* 霓虹 OPEN 灯牌 */
const openSignTexture = canvasTexture(512, 192, (ctx, w, h) => {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#ff4f9a';
  ctx.lineWidth = 10;
  ctx.strokeRect(16, 16, w - 32, h - 32);
  ctx.shadowColor = '#ff4f9a';
  ctx.shadowBlur = 28;
  ctx.fillStyle = '#ffd9ea';
  ctx.font = 'bold 104px "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('OPEN', w / 2, h / 2 + 4);
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#ff6fa8';
  ctx.font = 'bold 28px "Segoe UI", sans-serif';
  ctx.fillText('24 HOURS', w / 2, h - 30);
});

export function buildStore(builder) {
  const store = new THREE.Group();
  store.name = 'store';

  const wallMat = toon(PAL.storeWall);
  const roofMat = roofSurface(PAL.storeWallShade);
  const trimMat = toon(PAL.storeTrim);
  const greenMat = toon(PAL.green);
  const metalMat = toon(PAL.metal);

  const wallT = 0.18;
  const innerW = S.x2 - S.x1;
  const innerD = S.z2 - S.z1;

  /* ---------------- 墙体 ---------------- */
  const shell = new THREE.Group();

  // 左墙 / 右墙 / 后墙
  const leftWall = box(wallT, S.h, innerD, wallMat);
  leftWall.position.set(S.x1 + wallT / 2, S.h / 2, (S.z1 + S.z2) / 2);
  shell.add(leftWall);

  const rightWall = box(wallT, S.h, innerD, wallMat);
  rightWall.position.set(S.x2 - wallT / 2, S.h / 2, (S.z1 + S.z2) / 2);
  shell.add(rightWall);

  const backWall = box(innerW, S.h, wallT, wallMat);
  backWall.position.set((S.x1 + S.x2) / 2, S.h / 2, S.z1 + wallT / 2);
  shell.add(backWall);

  // 外墙腰线（品牌绿）
  const stripeL = box(0.04, 0.16, innerD, greenMat, { line: false });
  stripeL.position.set(S.x1 - 0.02, 0.95, (S.z1 + S.z2) / 2);
  shell.add(stripeL);

  // 屋顶
  const roof = box(innerW + 0.5, 0.2, innerD + 0.5, roofMat);
  roof.position.set((S.x1 + S.x2) / 2, S.parapetTop + 0.1, (S.z1 + S.z2) / 2);
  roof.receiveShadow = true;
  shell.add(roof);

  // 女儿墙
  const parapetFront = box(innerW + 0.5, 0.42, 0.16, wallMat);
  parapetFront.position.set((S.x1 + S.x2) / 2, S.parapetTop - 0.1, S.z2 + 0.17);
  shell.add(parapetFront);

  const parapetLeft = box(0.16, 0.42, innerD + 0.5, wallMat);
  parapetLeft.position.set(S.x1 - 0.17, S.parapetTop - 0.1, (S.z1 + S.z2) / 2);
  shell.add(parapetLeft);

  const parapetRight = box(0.16, 0.42, innerD - 0.2, wallMat);
  parapetRight.position.set(S.x2 + 0.17, S.parapetTop - 0.1, (S.z1 + S.z2) / 2);
  shell.add(parapetRight);

  const parapetBack = box(innerW + 0.5, 0.42, 0.16, wallMat);
  parapetBack.position.set((S.x1 + S.x2) / 2, S.parapetTop - 0.1, S.z1 - 0.17);
  shell.add(parapetBack);

  // 屋顶设备
  const roofKit = new THREE.Group();
  const acBodyMat = toon(0x9aa3b5);
  const acDark = toon(0x50596c);
  [
    [-6.4, -8.4],
    [-4.2, -8.4],
    [0.4, -6.4],
  ].forEach(([x, z], i) => {
    const ac = box(1.1, 0.72, 0.9, acBodyMat);
    ac.position.set(x, S.parapetTop + 0.2 + 0.36, z);
    roofKit.add(ac);
    const fan = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), acDark);
    fan.position.set(x, S.parapetTop + 0.2 + 0.4, z + 0.46);
    roofKit.add(fan);
    const grille = new THREE.Mesh(
      new THREE.RingGeometry(0.29, 0.33, 20),
      flat(0x6f7a8e)
    );
    grille.position.set(x, S.parapetTop + 0.2 + 0.4, z + 0.465);
    roofKit.add(grille);
    if (i === 0) {
      const pipe = cyl(0.1, 0.1, 0.5, metalMat, { seg: 10 });
      pipe.position.set(x + 0.7, S.parapetTop + 0.45, z);
      roofKit.add(pipe);
    }
  });

  // 屋顶水箱与天线
  const tank = cyl(0.5, 0.5, 0.9, toon(0x7f8798), { seg: 14, line: true });
  tank.position.set(0.8, S.parapetTop + 0.75, -8.8);
  roofKit.add(tank);
  const ant = cyl(0.02, 0.02, 2.1, metalMat, { seg: 6 });
  ant.position.set(-7.6, S.parapetTop + 1.25, -3.4);
  roofKit.add(ant);
  for (let i = 0; i < 3; i++) {
    const bar = box(0.7 - i * 0.14, 0.02, 0.02, metalMat, { line: false });
    bar.position.set(-7.6, S.parapetTop + 1.0 + i * 0.35, -3.4);
    roofKit.add(bar);
  }
  shell.add(roofKit);

  // 屋顶护栏
  const railMat = toon(0x77839a);
  for (let i = 0; i < 9; i++) {
    const post = box(0.04, 0.5, 0.04, railMat, { line: false });
    post.position.set(S.x1 - 0.17, S.parapetTop + 0.25, S.z1 + 0.9 + i * 1.05);
    shell.add(post);
  }
  const railBar = box(0.05, 0.04, innerD, railMat, { line: false });
  railBar.position.set(S.x1 - 0.17, S.parapetTop + 0.5, (S.z1 + S.z2) / 2);
  shell.add(railBar);

  // 右侧外墙：服务门 + 高窗 + 落水管
  const serviceDoor = box(0.05, 1.9, 0.85, toon(0x3a4152));
  serviceDoor.position.set(S.x2 + 0.02, 0.95, -6.2);
  shell.add(serviceDoor);
  const highWin = box(0.05, 0.7, 1.4, toon(0x9fd4e8, { emissive: 0x2a3f4a }));
  highWin.position.set(S.x2 + 0.02, 2.6, -8.4);
  shell.add(highWin);

  const downpipe = cyl(0.075, 0.075, 3.8, toon(0x8b94a6), { seg: 10 });
  downpipe.position.set(S.x2 + 0.1, 1.9, -2.1);
  shell.add(downpipe);
  const downpipe2 = cyl(0.075, 0.075, 3.8, toon(0x8b94a6), { seg: 10 });
  downpipe2.position.set(S.x1 - 0.1, 1.9, -1.95);
  shell.add(downpipe2);

  builder.add(shell, { delay: 1.05, dur: 1.0, mode: 'rise' });

  /* ---------------- 门面玻璃 + 门 ---------------- */
  const glazing = new THREE.Group();

  // 玻璃下方的踢脚板
  const kick = toon(0x394052);
  const kickA = box(7.77, S.glassBottom - S.floorY, 0.12, kick, { line: true });
  kickA.position.set(-5.435, (S.floorY + S.glassBottom) / 2, S.z2 - 0.06);
  glazing.add(kickA);
  const kickB = box(0.77, S.glassBottom - S.floorY, 0.12, kick, { line: true });
  kickB.position.set(1.635, (S.floorY + S.glassBottom) / 2, S.z2 - 0.06);
  glazing.add(kickB);

  // 大玻璃窗
  const glassA = plane(7.77, S.glassTop - S.glassBottom, glassMat);
  glassA.position.set(-5.435, (S.glassTop + S.glassBottom) / 2, S.z2 - 0.07);
  glazing.add(glassA);
  const glassB = plane(0.77, S.glassTop - S.glassBottom, glassMat);
  glassB.position.set(1.635, (S.glassTop + S.glassBottom) / 2, S.z2 - 0.07);
  glazing.add(glassB);

  // 竖框
  [-9.32, -6.9, -4.5, -2.1, -1.55, 1.25, 2.02].forEach((x) => {
    const mull = box(0.09, S.glassTop - S.glassBottom + 0.1, 0.16, trimMat);
    mull.position.set(x, (S.glassTop + S.glassBottom) / 2, S.z2 - 0.06);
    glazing.add(mull);
  });

  // 顶部横梁
  const header = box(innerW, 0.14, 0.2, trimMat);
  header.position.set((S.x1 + S.x2) / 2, S.glassTop + 0.03, S.z2 - 0.06);
  glazing.add(header);

  // 自动门（双开玻璃 + 金属框）
  const doorGroup = new THREE.Group();
  const doorFrameMat = toon(0x485064);
  [-1.5, 1.25].forEach((x) => {
    const post = box(0.1, 2.15, 0.2, doorFrameMat);
    post.position.set(x, 1.1, S.z2 - 0.05);
    doorGroup.add(post);
  });
  const doorTop = box(2.85, 0.1, 0.2, doorFrameMat);
  doorTop.position.set(-0.125, 2.16, S.z2 - 0.05);
  doorGroup.add(doorTop);

  const panel = (cx, w) => {
    const g = new THREE.Group();
    const glass = plane(w, 1.7, glassMat);
    glass.position.set(cx, 1.3, S.z2 - 0.09);
    g.add(glass);
    const frame = box(w, 0.06, 0.1, doorFrameMat, { line: false });
    frame.position.set(cx, 2.14, S.z2 - 0.05);
    g.add(frame);
    const frameB = box(w, 0.12, 0.1, doorFrameMat, { line: false });
    frameB.position.set(cx, 0.46, S.z2 - 0.05);
    g.add(frameB);
    const frameL = box(0.06, 1.78, 0.1, doorFrameMat, { line: false });
    frameL.position.set(cx - w / 2 + 0.03, 1.3, S.z2 - 0.05);
    g.add(frameL);
    const frameR = box(0.06, 1.78, 0.1, doorFrameMat, { line: false });
    frameR.position.set(cx + w / 2 - 0.03, 1.3, S.z2 - 0.05);
    g.add(frameR);
    return g;
  };
  doorGroup.add(panel(-0.82, 1.32));
  doorGroup.add(panel(0.57, 1.32));

  // 自动门感应器
  const sensor = box(0.5, 0.16, 0.16, toon(0x222a38));
  sensor.position.set(-0.125, 2.34, S.z2 - 0.1);
  doorGroup.add(sensor);
  const sensorLamp = new THREE.Mesh(new THREE.CircleGeometry(0.035, 12), flat(0x7bffb0));
  sensorLamp.position.set(-0.125, 2.28, S.z2 - 0.19);
  sensorLamp.rotation.x = Math.PI / 2;
  doorGroup.add(sensorLamp);

  // 玻璃贴纸
  const openSign = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 0.56),
    new THREE.MeshBasicMaterial({
      map: openSignTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  openSign.position.set(-7.4, 2.0, S.z2 - 0.12);
  glazing.add(openSign);

  const posterMat = new THREE.MeshBasicMaterial({
    map: posterTexture('NEW'),
    transparent: true,
    depthWrite: false,
  });
  const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.86), posterMat);
  poster.position.set(-2.7, 1.7, S.z2 - 0.12);
  glazing.add(poster);

  const poster2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.86),
    new THREE.MeshBasicMaterial({ map: posterTexture('SALE'), transparent: true })
  );
  poster2.position.set(1.62, 1.72, S.z2 - 0.12);
  glazing.add(poster2);

  builder.add(glazing, { delay: 1.45, dur: 0.9, mode: 'rise' });
  builder.add(doorGroup, { delay: 1.6, dur: 0.8, mode: 'rise' });

  /* ---------------- 门头招牌 ---------------- */
  const signage = new THREE.Group();

  const fascia = box(innerW + 0.36, S.fasciaTop - S.fasciaBottom, 0.34, toon(0xf2eee0));
  fascia.position.set((S.x1 + S.x2) / 2, (S.fasciaTop + S.fasciaBottom) / 2, S.z2 - 0.05);
  fascia.castShadow = true;
  signage.add(fascia);

  const signFace = new THREE.Mesh(
    new THREE.PlaneGeometry(7.4, 0.66),
    new THREE.MeshBasicMaterial({ map: storeSignTexture() })
  );
  signFace.position.set(-4.6, (S.fasciaTop + S.fasciaBottom) / 2 + 0.02, S.z2 + 0.13);
  signage.add(signFace);

  // 招牌洗墙光晕（尺寸克制，避免大面积泛光盖住屋顶与室内）
  const signGlow = glowSprite(0xbfe6d6, 4.0, 0.22);
  signGlow.name = 'signGlow';
  signGlow.position.set(-4.6, 2.95, S.z2 + 0.5);
  signage.add(signGlow);

  // 转角竖招
  const bladeBody = box(0.16, 2.0, 0.6, toon(0x0d3f30));
  bladeBody.position.set(1.72, 3.35, -1.15);
  signage.add(bladeBody);

  const bladeTex = bladeSignTexture();
  [-1, 1].forEach((dir) => {
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(0.58, 1.94),
      new THREE.MeshBasicMaterial({ map: bladeTex })
    );
    face.position.set(1.72 + dir * 0.085, 3.35, -1.15);
    face.rotation.y = dir * (Math.PI / 2);
    signage.add(face);
  });

  const bladeGlow = glowSprite(0x6fffc0, 2.6, 0.35);
  bladeGlow.name = 'bladeGlow';
  bladeGlow.position.set(1.72, 3.35, -1.15);
  signage.add(bladeGlow);

  const bracket = box(0.08, 0.08, 0.6, metalMat, { line: false });
  bracket.position.set(1.72, 4.4, -1.45);
  signage.add(bracket);

  builder.add(signage, { delay: 2.35, dur: 0.85, mode: 'pop', from: 1.6 });

  /* ---------------- 雨棚 + 门垫 ---------------- */
  const awning = new THREE.Group();

  const stripeTex = canvasTexture(
    512,
    128,
    (ctx, w, h) => {
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = i % 2 ? '#f4f0e2' : '#2a9d6d';
        ctx.fillRect((i * w) / 8, 0, w / 8, h);
      }
    },
    { repeat: [1.6, 1] }
  );

  const canopy = box(3.95, 0.09, 1.2, toon(0xffffff, { map: stripeTex }));
  canopy.position.set(-0.15, 2.62, S.z2 + 0.6);
  canopy.castShadow = true;
  awning.add(canopy);

  const canopyEdge = box(3.95, 0.16, 0.08, greenMat);
  canopyEdge.position.set(-0.15, 2.56, S.z2 + 1.18);
  awning.add(canopyEdge);

  // 雨棚下的暖光灯带
  const strip = box(3.4, 0.05, 0.06, flat(0xffe6b8), { line: false });
  strip.position.set(-0.15, 2.5, S.z2 + 1.05);
  awning.add(strip);

  const stripGlow = glowSprite(0xffca85, 2.4, 0.28);
  stripGlow.position.set(-0.15, 2.45, S.z2 + 1.0);
  awning.add(stripGlow);

  // 斜撑
  [-1.7, 1.35].forEach((x) => {
    const rod = cyl(0.03, 0.03, 1.15, metalMat, { seg: 8 });
    rod.position.set(x, 2.95, S.z2 + 0.62);
    rod.rotation.x = Math.PI / 2 - 0.5;
    awning.add(rod);
  });

  // 门口地垫
  const mat = box(2.5, 0.03, 0.95, toon(0x274a41), { line: false });
  mat.position.set(-0.15, L.sidewalkH + 0.02, S.z2 + 0.62);
  awning.add(mat);
  const matBorder = box(2.62, 0.02, 1.07, toon(0xd9cfae), { line: false });
  matBorder.position.set(-0.15, L.sidewalkH + 0.005, S.z2 + 0.62);
  awning.add(matBorder);

  // 门口小夜灯（点光源）
  const entranceLight = new THREE.PointLight(0xffd0a0, 26, 7, 2);
  entranceLight.position.set(-0.15, 2.3, S.z2 + 0.9);
  awning.add(entranceLight);

  const shadow = contactShadow(4.6, 2.4, 0.5);
  shadow.position.set(-0.15, L.sidewalkH + 0.012, S.z2 + 0.75);
  awning.add(shadow);

  builder.add(awning, { delay: 2.6, dur: 0.8, mode: 'pop', from: 1.1 });

  /* ---------------- 店内 ---------------- */
  buildInterior(builder);

  return store;
}
