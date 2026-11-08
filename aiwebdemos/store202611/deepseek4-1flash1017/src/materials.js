import * as THREE from 'three';

/**
 * 全局配色：夜色下的低饱和冷调 + 局部霓虹暖光。
 * 数值型色值便于直接传给 three 材质。
 */
export const PAL = {
  asphalt: 0x1a2130,
  asphaltDark: 0x121722,
  sidewalk: 0x4c5368,
  sidewalkDark: 0x3b4154,
  curb: 0x697086,
  line: 0xe4ecf7,

  storeWall: 0xe2d9c8,
  storeWallShade: 0xb9ae9d,
  storeTrim: 0x2b3242,
  green: 0x1f9c6c,
  greenDeep: 0x11724e,
  orange: 0xf3a03a,

  metal: 0x606879,
  metalDark: 0x2f3546,
  wood: 0x6b4b3a,
  concrete: 0x6b7285,
  concreteDark: 0x474d5e,

  warmLight: 0xffd9a0,
  coolLight: 0xbfe4ff,
  neonPink: 0xff4f9a,
  neonCyan: 0x4fe3ff,
  neonAmber: 0xffb457,
  neonRed: 0xff5a4d,

  glass: 0xbfe6ff,
  interiorWarm: 0xfff1d4,
};

/** 三渲二渐变（4 阶硬边明暗） */
const gradientMap = (() => {
  const data = new Uint8Array([28, 96, 172, 255]);
  const tex = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
})();

/** 卡通材质 */
export function toon(color, opts = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap, ...opts });
}

/**
 * 屋顶专用材质：Lambert 按 N·L 计算受光，背光面直接为 0。
 * toon 的渐变采样把 dotNL∈[-1,0] 映射到渐变图的上半段，
 * 会让店内的点光源从下方在屋顶顶面照出一圈圈光斑，故选 Lambert。
 */
export function roofSurface(color) {
  return new THREE.MeshLambertMaterial({ color });
}

/** 自发光 / 纯色材质（招牌、灯管、霓虹等） */
export function flat(color, opts = {}) {
  return new THREE.MeshBasicMaterial({ color, ...opts });
}

/* ------------------------------------------------------------------ */
/* 程序化画布贴图                                                      */
/* ------------------------------------------------------------------ */

export function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return { canvas, ctx: canvas.getContext('2d') };
}

export function canvasTexture(w, h, draw, { repeat = null, srgb = true } = {}) {
  const { canvas, ctx } = makeCanvas(w, h);
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  tex.anisotropy = 4;
  return tex;
}

function speckle(ctx, w, h, count, alpha = 0.05, light = 255) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const s = Math.random() * 2 + 0.4;
    ctx.fillStyle = `rgba(${light},${light},${light},${Math.random() * alpha})`;
    ctx.fillRect(x, y, s, s);
  }
}

/* —— 沥青路面 —— */
export const asphaltTexture = () =>
  canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      ctx.fillStyle = '#1a2130';
      ctx.fillRect(0, 0, w, h);
      // 大块深浅斑驳
      for (let i = 0; i < 70; i++) {
        ctx.beginPath();
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = 30 + Math.random() * 90;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(52,66,92,${Math.random() * 0.16})`);
        g.addColorStop(1, 'rgba(52,66,92,0)');
        ctx.fillStyle = g;
        ctx.fill();
      }
      speckle(ctx, w, h, 5200, 0.055);
      // 细裂缝
      ctx.strokeStyle = 'rgba(8,11,18,0.5)';
      for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.lineWidth = Math.random() * 1.4 + 0.4;
        let x = Math.random() * w;
        let y = Math.random() * h;
        ctx.moveTo(x, y);
        for (let k = 0; k < 5; k++) {
          x += (Math.random() - 0.5) * 60;
          y += (Math.random() - 0.5) * 60;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    },
    { repeat: [4, 4] }
  );

/* —— 人行道方砖 —— */
export const sidewalkTexture = () =>
  canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      ctx.fillStyle = '#4c5368';
      ctx.fillRect(0, 0, w, h);
      const cell = 64;
      for (let y = 0; y < h; y += cell) {
        for (let x = 0; x < w; x += cell) {
          ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.035})`;
          ctx.fillRect(x, y, cell, cell);
        }
      }
      ctx.strokeStyle = 'rgba(28,33,46,0.85)';
      ctx.lineWidth = 3;
      for (let i = 0; i <= w; i += cell) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }
      speckle(ctx, w, h, 2600, 0.06);
    },
    { repeat: [10, 10] }
  );

/* —— 店内浅色地砖 —— */
export const storeFloorTexture = () =>
  canvasTexture(
    512,
    512,
    (ctx, w, h) => {
      ctx.fillStyle = '#efe6d2';
      ctx.fillRect(0, 0, w, h);
      const cell = 64;
      ctx.strokeStyle = 'rgba(196,186,164,0.9)';
      ctx.lineWidth = 2;
      for (let i = 0; i <= w; i += cell) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, 20, 20);
      }
    },
    { repeat: [5, 4] }
  );

/* —— 便利店正门招牌 —— */
export const storeSignTexture = () =>
  canvasTexture(1024, 200, (ctx, w, h) => {
    ctx.fillStyle = '#f6f3e7';
    ctx.fillRect(0, 0, w, h);

    // 左侧品牌色块
    ctx.fillStyle = '#177a56';
    ctx.fillRect(0, 0, 250, h);
    ctx.fillStyle = '#f3a03a';
    ctx.fillRect(0, h - 26, 250, 26);

    // 星星 Logo
    ctx.save();
    ctx.translate(125, 92);
    ctx.fillStyle = '#f7f4e6';
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 52 : 22;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 主文字
    ctx.fillStyle = '#0f5c40';
    ctx.font = 'bold 96px "Arial Black", "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('HOSHII MART', 286, 84);

    ctx.fillStyle = '#2a9d6d';
    ctx.font = 'bold 40px "Segoe UI", sans-serif';
    ctx.fillText('24 HOURS  ·  OPEN', 290, 158);

    // 右侧竖条装饰
    ctx.fillStyle = '#f3a03a';
    ctx.fillRect(w - 60, 0, 22, h);
  });

/* —— 竖式侧招 —— */
export const bladeSignTexture = () =>
  canvasTexture(256, 768, (ctx, w, h) => {
    ctx.fillStyle = '#0f7a56';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#f7f4e6';
    ctx.lineWidth = 10;
    ctx.strokeRect(14, 14, w - 28, h - 28);

    ctx.fillStyle = '#f7f4e6';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 120px "Arial Black", sans-serif';
    ctx.fillText('24', w / 2, 150);
    ctx.font = 'bold 150px "Arial Black", sans-serif';
    ctx.fillText('H', w / 2, 330);

    ctx.fillStyle = '#f3a03a';
    ctx.fillRect(52, 430, w - 104, 12);

    ctx.fillStyle = '#f7f4e6';
    ctx.font = 'bold 52px "Segoe UI", sans-serif';
    ['M', 'A', 'R', 'T'].forEach((c, i) => ctx.fillText(c, w / 2, 520 + i * 58));
  });

/* —— 自动贩卖机正面 —— */
export const vendingTexture = () =>
  canvasTexture(512, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#eef4fb';
    ctx.fillRect(0, 0, w, h);

    // 顶部品牌条
    ctx.fillStyle = '#1f6fd0';
    ctx.fillRect(0, 0, w, 96);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('DRINK', w / 2, 50);

    // 商品陈列（三排饮料）
    const cols = 5;
    const rows = 4;
    const bw = 74;
    const bh = 108;
    const ox = (w - cols * bw) / 2;
    const oy = 130;
    const colors = ['#e94f4f', '#f2c14e', '#4fc3f7', '#7ed957', '#f0803c', '#b06ff2', '#ffffff'];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = ox + c * bw + 6;
        const y = oy + r * (bh + 18);
        // 罐体
        ctx.fillStyle = colors[(r * cols + c) % colors.length];
        ctx.beginPath();
        ctx.roundRect(x, y, bw - 12, bh, 16);
        ctx.fill();
        // 高光
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fillRect(x + 8, y + 12, 8, bh - 26);
        // 价格灯
        ctx.fillStyle = '#ffcf5a';
        ctx.fillRect(x, y + bh + 4, bw - 12, 10);
        // 选择按钮
        ctx.fillStyle = 'rgba(30,40,60,0.25)';
        ctx.fillRect(x + 10, y + bh - 26, bw - 32, 14);
      }
    }

    // 投币 / 取物口
    ctx.fillStyle = '#2f3546';
    ctx.fillRect(w - 118, 340, 86, 260);
    ctx.fillStyle = '#8ecbff';
    ctx.fillRect(w - 104, 372, 58, 26);
    ctx.fillStyle = '#ffb457';
    ctx.fillRect(w - 104, 428, 58, 12);

    ctx.fillStyle = '#232a3a';
    ctx.fillRect(60, h - 190, w - 120, 120);
    ctx.fillStyle = '#0d1320';
    ctx.fillRect(84, h - 168, w - 168, 74);

    // 底部品牌
    ctx.fillStyle = '#1f6fd0';
    ctx.font = 'bold 44px "Segoe UI", sans-serif';
    ctx.fillText('COLD  ·  HOT', w / 2, h - 40);
  });

/* —— 公告栏 —— */
export const bulletinTexture = () =>
  canvasTexture(512, 320, (ctx, w, h) => {
    ctx.fillStyle = '#7a5b45';
    ctx.fillRect(0, 0, w, h);
    speckle(ctx, w, h, 900, 0.08, 0);

    const papers = [
      [24, 24, 140, 180, '#f7f2e2'],
      [186, 40, 122, 152, '#fdf7e6'],
      [326, 22, 150, 196, '#f5eeda'],
      [40, 218, 160, 78, '#f7e9c9'],
      [238, 210, 200, 88, '#fdf6e4'],
    ];
    papers.forEach(([x, y, pw, ph, color], i) => {
      ctx.save();
      ctx.translate(x + pw / 2, y + ph / 2);
      ctx.rotate((Math.random() - 0.5) * 0.06);
      ctx.fillStyle = color;
      ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      // 假文字
      ctx.fillStyle = i % 2 ? '#c8553d' : '#3d6fa8';
      ctx.fillRect(-pw / 2 + 10, -ph / 2 + 10, pw - 20, 16);
      ctx.fillStyle = 'rgba(60,60,60,0.55)';
      for (let l = 0; l < 5; l++) {
        ctx.fillRect(-pw / 2 + 10, -ph / 2 + 40 + l * 14, (pw - 20) * (0.5 + Math.random() * 0.45), 5);
      }
      // 图钉
      ctx.fillStyle = '#d34b45';
      ctx.beginPath();
      ctx.arc(0, -ph / 2 + 8, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  });

/* —— 卷帘门 —— */
export const shutterTexture = () =>
  canvasTexture(
    256,
    256,
    (ctx, w, h) => {
      ctx.fillStyle = '#5a6172';
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 16) {
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(0, y, w, 6);
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.fillRect(0, y + 10, w, 6);
      }
    },
    { repeat: [2, 2] }
  );

/* —— 店外海报 —— */
export const posterTexture = (title = 'NEW') =>
  canvasTexture(256, 360, (ctx, w, h) => {
    ctx.fillStyle = '#fdf8ea';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#e8452f';
    ctx.fillRect(0, 0, w, 96);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 54px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(title, w / 2, 50);
    ctx.fillStyle = '#f3a03a';
    ctx.beginPath();
    ctx.arc(w / 2, 190, 58, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fdf8ea';
    ctx.beginPath();
    ctx.arc(w / 2, 190, 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#39465e';
    ctx.font = 'bold 30px "Segoe UI", sans-serif';
    ctx.fillText('からあげ', w / 2, 288);
    ctx.fillText('20% OFF', w / 2, 328);
  });

/* —— 地面霓虹倒影（加色混合） —— */
export const puddleTexture = () =>
  canvasTexture(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(180,225,255,0.55)');
    g.addColorStop(0.55, 'rgba(140,190,255,0.22)');
    g.addColorStop(1, 'rgba(120,170,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // 竖向霓虹拉丝
    for (let i = 0; i < 14; i++) {
      const x = Math.random() * w;
      const c = ['255,120,170', '110,220,255', '255,190,120'][i % 3];
      const grd = ctx.createLinearGradient(x, 0, x, h);
      grd.addColorStop(0, `rgba(${c},0)`);
      grd.addColorStop(0.5, `rgba(${c},${0.18 + Math.random() * 0.25})`);
      grd.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(x, 0, 3 + Math.random() * 9, h);
    }
  });

/* —— 暖光光池（店内灯光洒向人行道） —— */
export const lightPoolTexture = (color = '255,226,170') =>
  canvasTexture(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, `rgba(${color},0.55)`);
    g.addColorStop(0.45, `rgba(${color},0.2)`);
    g.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });

/* —— 光晕精灵贴图 —— */
const glowTexture = (() => {
  const { canvas, ctx } = makeCanvas(128, 128);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.14)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
})();

/** 加色光晕精灵 */
export function glowSprite(color, size = 2, opacity = 0.7) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glowTexture,
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  sprite.scale.set(size, size, 1);
  return sprite;
}

/**
 * 动漫描边：用 EdgesGeometry 生成深色线稿，挂在网格下。
 * 只用于有一定体积的块面，避免小物件产生噪点。
 */
export function addEdgeLines(mesh, { color = 0x0a0e18, opacity = 0.55, threshold = 24 } = {}) {
  const geo = new THREE.EdgesGeometry(mesh.geometry, threshold);
  const line = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false })
  );
  line.raycast = () => {};
  line.renderOrder = 1;
  mesh.add(line);
  return line;
}
