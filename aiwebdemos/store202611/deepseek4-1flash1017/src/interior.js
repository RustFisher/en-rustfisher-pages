import * as THREE from 'three';
import { PAL, toon, flat, glowSprite, canvasTexture } from './materials.js';
import { box, put, cyl, plane, contactShadow } from './kit.js';
import { L } from './layout.js';

const S = L.store;
const IX1 = S.x1 + 0.18;
const IX2 = S.x2 - 0.18;
const IZ1 = S.z1 + 0.18;
const IZ2 = S.z2;
const FY = S.floorY;

/* ---------------- 商品实例化工具 ---------------- */
const PRODUCT_COLORS = [
  0xe4573f, 0xf0a63c, 0xf6d35c, 0x6cbf5a, 0x4aa3d8,
  0x7d6bd8, 0xe88ab5, 0xf4efe2, 0x3c4458, 0x2fa36b,
];

class ProductBin {
  constructor() {
    this.bins = new Map();
  }

  add(x, y, z, w, h, d, color, ry = 0) {
    const list = this.bins.get(color) ?? [];
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)),
      new THREE.Vector3(w, h, d)
    );
    list.push(m);
    this.bins.set(color, list);
  }

  build() {
    const group = new THREE.Group();
    const geo = new THREE.BoxGeometry(1, 1, 1);
    for (const [color, list] of this.bins) {
      const mesh = new THREE.InstancedMesh(geo, toon(color), list.length);
      list.forEach((m, i) => mesh.setMatrixAt(i, m));
      mesh.instanceMatrix.needsUpdate = true;
      mesh.frustumCulled = false;
      group.add(mesh);
    }
    return group;
  }
}

const bannerTextures = {};
function bannerTexture(text, sub, accent = '#e8452f') {
  const key = text + sub + accent;
  if (!bannerTextures[key]) {
    bannerTextures[key] = canvasTexture(512, 168, (ctx, w, h) => {
      ctx.fillStyle = '#fffaf0';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = accent;
      ctx.fillRect(0, 0, w, 18);
      ctx.fillRect(0, h - 18, w, 18);
      ctx.fillStyle = accent;
      ctx.font = 'bold 76px "Yu Gothic UI", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, w / 2, 68);
      ctx.fillStyle = '#3c4458';
      ctx.font = 'bold 34px "Segoe UI", sans-serif';
      ctx.fillText(sub, w / 2, 128);
    });
  }
  return bannerTextures[key];
}

export function buildInterior(builder) {
  const interiorMat = toon(0xf1ead9);
  const whiteMat = toon(0xfaf6ec);
  const metalMat = toon(0x6c7486);

  /* ============ 基础：地板 + 天棚 + 灯带 ============ */
  const base = new THREE.Group();

  const floorTex = canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      ctx.fillStyle = '#eee5d2';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(190,180,158,0.9)';
      ctx.lineWidth = 2;
      for (let i = 0; i <= w; i += 64) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }
      for (let i = 0; i < 90; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.25})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, 26, 26);
      }
    },
    { repeat: [7, 5] }
  );

  const floorMesh = box(IX2 - IX1, FY, IZ2 - IZ1, toon(0xffffff, { map: floorTex }), {
    line: false,
  });
  floorMesh.position.set((IX1 + IX2) / 2, FY / 2, (IZ1 + IZ2) / 2);
  floorMesh.receiveShadow = true;
  base.add(floorMesh);

  // 天棚
  const ceiling = box(IX2 - IX1, 0.08, IZ2 - IZ1, whiteMat, { line: false });
  ceiling.position.set((IX1 + IX2) / 2, S.ceiling, (IZ1 + IZ2) / 2);
  base.add(ceiling);

  // 顶部灯带
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff6e2 });
  const housingMat = toon(0xd6d0c0);
  const lampRows = [-8.5, -6.4, -4.3, -2.4];
  lampRows.forEach((z, ri) => {
    [-7.3, -4.2, -1.4].forEach((x) => {
      const housing = box(1.8, 0.08, 0.34, housingMat, { line: false });
      housing.position.set(x, S.ceiling - 0.06, z);
      base.add(housing);
      const lamp = box(1.66, 0.04, 0.24, lampMat, { line: false });
      lamp.position.set(x, S.ceiling - 0.11, z);
      base.add(lamp);
      if (ri < 2) {
        const glow = glowSprite(0xfff0cf, 1.9, 0.18);
        glow.position.set(x, S.ceiling - 0.2, z);
        base.add(glow);
      }
    });
  });

  // 空调出风口
  const vent = box(1.0, 0.06, 0.42, toon(0xd9d3c4), { line: false });
  vent.position.set(-3.2, S.ceiling - 0.06, -6.2);
  base.add(vent);

  // 监控摄像头
  const camBody = box(0.2, 0.14, 0.14, toon(0x40475a));
  camBody.position.set(-8.9, S.ceiling - 0.22, -2.15);
  base.add(camBody);
  const camLens = new THREE.Mesh(new THREE.CircleGeometry(0.045, 12), flat(0x8fd0ff));
  camLens.position.set(-8.9, S.ceiling - 0.22, -2.05);
  base.add(camLens);

  builder.add(base, { delay: 1.85, dur: 0.9, mode: 'rise' });

  /* ============ 靠墙冷柜（后墙） ============ */
  const fridges = new THREE.Group();
  const fridgeGlass = new THREE.MeshPhysicalMaterial({
    color: 0xd6f2ff,
    transparent: true,
    opacity: 0.1,
    roughness: 0.05,
    metalness: 0,
    depthWrite: false,
  });

  const products = new ProductBin();
  const fridgeStartX = -9.25;
  const unitW = 1.54;

  for (let u = 0; u < 5; u++) {
    const cx = fridgeStartX + unitW * u + unitW / 2;
    const frame = box(unitW, 2.34, 0.84, toon(0x333b4c));
    frame.position.set(cx, FY + 1.17, -9.56);
    fridges.add(frame);

    // 发光内胆
    const back = new THREE.Mesh(
      new THREE.PlaneGeometry(unitW - 0.18, 2.02),
      new THREE.MeshBasicMaterial({ color: 0xdff3ff })
    );
    back.position.set(cx, FY + 1.2, -9.95);
    fridges.add(back);

    // 顶部灯箱
    const lightbox = box(unitW - 0.16, 0.16, 0.1, flat(0xf7ffff), { line: false });
    lightbox.position.set(cx, FY + 2.24, -9.2);
    fridges.add(lightbox);

    // 4 层货架 + 饮料
    [0.68, 1.12, 1.56, 2.0].forEach((sy, row) => {
      const shelf = box(unitW - 0.14, 0.035, 0.62, toon(0xe6e9ef), { line: false });
      shelf.position.set(cx, FY + sy, -9.6);
      fridges.add(shelf);

      for (let c = 0; c < 6; c++) {
        const px = cx - 0.6 + c * 0.24;
        const color = PRODUCT_COLORS[(u * 3 + row * 4 + c) % PRODUCT_COLORS.length];
        products.add(px, FY + sy + 0.16, -9.66, 0.15, 0.27, 0.15, color, Math.random() * 0.4);
        // 前排再补一排矮瓶
        products.add(
          px,
          FY + sy + 0.11,
          -9.44,
          0.13,
          0.18,
          0.12,
          PRODUCT_COLORS[(c + row + u) % PRODUCT_COLORS.length],
          0
        );
      }
    });

    // 玻璃门 + 把手
    const door = plane(unitW - 0.12, 2.18, fridgeGlass);
    door.position.set(cx, FY + 1.14, -9.12);
    fridges.add(door);
    const handle = box(0.035, 0.9, 0.05, metalMat, { line: false });
    handle.position.set(cx + unitW / 2 - 0.17, FY + 1.3, -9.09);
    fridges.add(handle);
  }

  // 冷柜顶部品牌色带
  const band = box(7.78, 0.2, 0.06, toon(PAL.green), { line: false });
  band.position.set(-5.4, FY + 2.44, -9.13);
  fridges.add(band);

  fridges.add(products.build());
  builder.add(fridges, { delay: 1.95, dur: 0.9, mode: 'rise' });

  /* ============ 中央货架（两组） ============ */
  const gondolas = new THREE.Group();
  const shelfProducts = new ProductBin();
  const gondolaMat = toon(0xe8e2d2);
  const gondolaDark = toon(0x596173);

  [-7.55, -6.05].forEach((cz, gi) => {
    const len = 5.6;
    const cx = -5.95;

    const baseBox = box(len, 0.18, 0.94, gondolaDark);
    baseBox.position.set(cx, FY + 0.09, cz);
    gondolas.add(baseBox);

    const spine = box(len, 1.06, 0.08, gondolaMat, { line: false });
    spine.position.set(cx, FY + 0.71, cz);
    gondolas.add(spine);

    [0.62, 1.0, 1.36].forEach((sy, row) => {
      const shelf = box(len, 0.035, 0.9, gondolaMat, { line: false });
      shelf.position.set(cx, FY + sy, cz);
      gondolas.add(shelf);

      for (let c = 0; c < 15; c++) {
        const px = cx - 2.6 + c * 0.36;
        const color = PRODUCT_COLORS[(c + row * 3 + gi) % PRODUCT_COLORS.length];
        shelfProducts.add(
          px,
          FY + sy + 0.14,
          cz + 0.24,
          0.23,
          0.24,
          0.18,
          color,
          (Math.random() - 0.5) * 0.2
        );
        shelfProducts.add(
          px,
          FY + sy + 0.12,
          cz - 0.24,
          0.22,
          0.2,
          0.18,
          PRODUCT_COLORS[(c + row + gi + 4) % PRODUCT_COLORS.length],
          (Math.random() - 0.5) * 0.2
        );
      }
    });

    // 货架端头促销牌
    const promoTex = bannerTexture('SALE', '本日限り', '#1f9c6c');
    const promo = new THREE.Mesh(
      new THREE.PlaneGeometry(0.86, 0.28),
      new THREE.MeshBasicMaterial({ map: promoTex, side: THREE.DoubleSide })
    );
    promo.position.set(cx + len / 2 - 0.02, FY + 1.5, cz);
    promo.rotation.y = Math.PI / 2;
    gondolas.add(promo);
  });

  // 靠左墙的一组矮货架
  const sideShelf = box(0.9, 0.2, 4.6, gondolaDark);
  sideShelf.position.set(-8.9, FY + 0.1, -5.4);
  gondolas.add(sideShelf);
  for (let i = 0; i < 14; i++) {
    shelfProducts.add(
      -8.9,
      FY + 0.35,
      -7.6 + i * 0.31,
      0.3,
      0.26,
      0.24,
      PRODUCT_COLORS[i % PRODUCT_COLORS.length],
      0
    );
  }

  gondolas.add(shelfProducts.build());
  builder.add(gondolas, { delay: 2.05, dur: 0.95, mode: 'rise' });

  /* ============ 收银台区 ============ */
  const counterGroup = new THREE.Group();

  const counterBody = box(0.9, 1.0, 4.5, toon(0xf2ecdc));
  counterBody.position.set(1.5, FY + 0.5, -5.65);
  counterGroup.add(counterBody);

  const counterStripe = box(0.02, 0.2, 4.5, toon(PAL.green), { line: false });
  counterStripe.position.set(1.04, FY + 0.72, -5.65);
  counterGroup.add(counterStripe);

  const counterTop = box(1.02, 0.06, 4.62, toon(0xcfc7b4));
  counterTop.position.set(1.5, FY + 1.03, -5.65);
  counterGroup.add(counterTop);

  // 收银机
  const registerBase = box(0.44, 0.12, 0.34, toon(0x3f475a));
  registerBase.position.set(1.42, FY + 1.12, -4.15);
  counterGroup.add(registerBase);
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.34, 0.24),
    new THREE.MeshBasicMaterial({ color: 0x9fe9ff })
  );
  screen.position.set(1.42, FY + 1.34, -3.98);
  screen.rotation.x = -0.45;
  counterGroup.add(screen);
  const regPole = cyl(0.02, 0.02, 0.35, metalMat, { seg: 6 });
  regPole.position.set(1.42, FY + 1.3, -4.28);
  counterGroup.add(regPole);

  // 热食柜（暖光）
  const hotFrame = box(0.66, 0.46, 0.44, toon(0x4a5265));
  hotFrame.position.set(1.5, FY + 1.29, -5.55);
  counterGroup.add(hotFrame);
  const hotGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.56, 0.3),
    new THREE.MeshBasicMaterial({ color: 0xffc067 })
  );
  hotGlow.position.set(1.5, FY + 1.3, -5.32);
  counterGroup.add(hotGlow);
  const hotSign = glowSprite(0xffb457, 0.9, 0.35);
  hotSign.position.set(1.5, FY + 1.35, -5.3);
  counterGroup.add(hotSign);

  // 咖啡机
  const coffee = box(0.5, 0.66, 0.4, toon(0x2f3646));
  coffee.position.set(1.5, FY + 1.39, -6.85);
  counterGroup.add(coffee);
  const coffeePanel = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshBasicMaterial({ color: 0x7fe3ff })
  );
  coffeePanel.position.set(1.5, FY + 1.5, -6.64);
  counterGroup.add(coffeePanel);

  // 香烟架（右墙）
  const cigPanel = box(0.1, 1.2, 3.7, toon(0xdcd6c6), { line: false });
  cigPanel.position.set(1.96, FY + 1.95, -5.6);
  counterGroup.add(cigPanel);

  const cigProducts = new ProductBin();
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 16; c++) {
      cigProducts.add(
        1.86,
        FY + 1.45 + r * 0.22,
        -7.25 + c * 0.21,
        0.1,
        0.16,
        0.17,
        PRODUCT_COLORS[(r * 3 + c) % PRODUCT_COLORS.length],
        0
      );
    }
  }
  counterGroup.add(cigProducts.build());

  // 柜台后的小推车 / 购物篮
  const basketMat = toon(0x7d93ad);
  for (let i = 0; i < 4; i++) {
    const b = box(0.44, 0.06, 0.32, basketMat, { line: false });
    b.position.set(1.6, FY + 0.28 + i * 0.09, -2.95);
    counterGroup.add(b);
  }

  builder.add(counterGroup, { delay: 2.15, dur: 0.9, mode: 'rise' });

  /* ============ 窗边杂志架 ============ */
  const magazine = new THREE.Group();
  const rack = box(3.5, 0.82, 0.5, toon(0x4d5568));
  rack.position.set(-7.0, FY + 0.41, -2.32);
  magazine.add(rack);

  const coverColors = [0xe4573f, 0xf6d35c, 0x4aa3d8, 0x6cbf5a, 0xe88ab5, 0xf4efe2];
  for (let i = 0; i < 8; i++) {
    const cover = new THREE.Mesh(
      new THREE.PlaneGeometry(0.3, 0.44),
      new THREE.MeshBasicMaterial({ color: coverColors[i % coverColors.length] })
    );
    cover.position.set(-8.55 + i * 0.42, FY + 0.62, -2.06);
    magazine.add(cover);
  }

  // 窗边促销立牌
  const standTex = bannerTexture('NEW', '新商品入荷', '#e8452f');
  const stand = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 1.1),
    new THREE.MeshBasicMaterial({ map: standTex, side: THREE.DoubleSide })
  );
  stand.position.set(-2.6, FY + 0.95, -2.2);
  magazine.add(stand);
  const standFoot = box(0.7, 0.05, 0.4, toon(0x555d70), { line: false });
  standFoot.position.set(-2.6, FY + 0.38, -2.2);
  magazine.add(standFoot);

  builder.add(magazine, { delay: 2.25, dur: 0.85, mode: 'rise' });

  /* ============ 吊旗 ============ */
  const banners = new THREE.Group();
  [
    ['新商品', 'NEW ARRIVAL', '#e8452f', -6.4, -3.0],
    ['からあげ', 'HOT SNACK', '#f3a03a', -3.2, -3.4],
    ['コーヒー', 'HOT COFFEE', '#1f9c6c', 0.1, -5.2],
  ].forEach(([t, s, c, x, z]) => {
    const b = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 0.5),
      new THREE.MeshBasicMaterial({ map: bannerTexture(t, s, c), side: THREE.DoubleSide })
    );
    b.position.set(x, S.ceiling - 0.72, z);
    banners.add(b);
    const str1 = cyl(0.006, 0.006, 0.3, metalMat, { seg: 4 });
    str1.position.set(x - 0.7, S.ceiling - 0.5, z);
    banners.add(str1);
    const str2 = str1.clone();
    str2.position.x = x + 0.7;
    banners.add(str2);
  });
  builder.add(banners, { delay: 2.35, dur: 0.7, mode: 'rise' });

  /* ============ 店内灯光 ============ */
  const lights = new THREE.Group();
  const warm = 0xffe6bc;
  [
    [-6.6, 2.92, -4.4, 54, 13],
    [-1.6, 2.92, -7.6, 42, 11],
    [-5.0, 2.92, -8.6, 37, 10],
    [-1.0, 2.9, -2.8, 31, 8],
  ].forEach(([x, y, z, i, d]) => {
    const pl = new THREE.PointLight(warm, i, d, 2);
    pl.position.set(x, y, z);
    lights.add(pl);
  });
  const cool = new THREE.PointLight(0xdcf2ff, 30, 9, 2);
  cool.position.set(-5.2, 2.4, -8.9);
  lights.add(cool);

  builder.add(lights, { delay: 2.4, dur: 0.3, mode: 'rise' });

  return { products };
}
