/**
 * 场景平面布局（单位：米级，整体约 26 x 26 的方形展台）
 * 坐标：X 向右，Z 朝向默认镜头，Y 向上。
 */
export const L = {
  half: 13,
  ground: 0,
  sidewalkH: 0.18,

  // 便利店主体
  store: {
    x1: -9.5,
    x2: 2.2,
    z1: -10.2,
    z2: -1.6,
    h: 4.05,
    glassBottom: 0.42,
    glassTop: 2.52,
    fasciaBottom: 2.52,
    fasciaTop: 3.34,
    parapetTop: 3.95,
    ceiling: 3.12,
    floorY: 0.24,
  },

  // 店铺右侧的小巷（夹在便利店与右侧楼之间）
  alley: { x1: 2.2, x2: 4.6, z1: -10.2, z2: -1.6 },

  // 右侧邻楼
  rightBuilding: { x1: 4.6, x2: 8.4, z1: -10.2, z2: -1.6, h: 5.8 },

  // 背后的街区剪影（收住画面后方）
  backRow: { z1: -13, z2: -10.2 },

  // 人行道
  walk: {
    front: { x1: -13, x2: 8.4, z1: -1.6, z2: 1.4 },
    sideNorth: { x1: 8.4, x2: 9.6, z1: -10.2, z2: 1.4 },
    sideSouth: { x1: 8.4, x2: 9.6, z1: 7.6, z2: 13 },
    far: { x1: -13, x2: 9.6, z1: 7.6, z2: 10.4 },
  },

  // 车行道
  road: {
    front: { x1: -13, x2: 9.6, z1: 1.4, z2: 7.6 },
    side: { x1: 9.6, x2: 13, z1: -13, z2: 13 },
  },

  // 街角（两条路的交角）
  corner: { x: 9.6, z: 1.4 },

  // 便利店出入口
  entrance: { x1: -1.5, x2: 1.25, z: -1.6 },

  // 便利店屋顶的可点击博客灯箱（宽幅，面向默认机位）
  blogSign: { x: -4.2, y: 4.82, z: -1.62, ry: 0 },

  // 黑猫 catblack01：巷口出现、与门口猫打闹、沿街逃跑
  blackCat: {
    spawn: { x: 3.5, y: 0.22, z: -1.8 },
    meetOffset: { x: 0.55, z: 0.05 },
    flee: { x: -13.2, z: 0.32 },
    cooldown: [60, 110],
  },

  // 乌鸦的两个落脚点：便利店屋顶 / 后巷垃圾桶旁
  crow: {
    perches: {
      roof: { x: 1.1, y: 4.15, z: -2.8 },
      bin: { x: 4.05, y: 0.22, z: -1.9 },
    },
  },

  // 路口信号灯（西南角人行道，悬臂伸向前街）
  trafficLight: { x: 9.0, y: 0.18, z: 8.15 },

  // 过路车：日本靠左行驶，前街北侧车道东行，路口左转进侧路北向车道
  car: {
    speed: 2.6,
    path: [
      { x: -12.0, z: 2.95 },
      { x: -6.0, z: 2.95 },
      { x: 2.5, z: 2.95 },
      { x: 6.8, z: 2.95 },
      { x: 8.6, z: 2.9 },
      { x: 9.8, z: 2.35 },
      { x: 10.35, z: 1.3 },
      { x: 10.45, z: 0.2 },
      { x: 10.45, z: -13.2 },
    ],
  },
  // 门前小猫：雨天躲在雨棚靠里，晴天回到路边
  cat: {
    shelter: {
      y: 0.222,
      home: { x: -1.15, z: -1.35 },
      far: { x: 0.85, z: -1.35 },
    },
    road: {
      y: 0.18,
      home: { x: -1.15, z: 1.0 },
      far: { x: 0.85, z: 1.0 },
    },
  },

  // 后巷服务门外的抽烟点（巷子地面顶面 y≈0.22）
  smokeSpot: {
    y: 0.22,
    a: { x: 2.55, z: -4.8, ry: 1.34, height: 1.7, lean: -0.07, phase: 0.7 },
    b: { x: 2.5, z: -5.45, ry: 1.1, height: 1.63, lean: -0.02, phase: 3.4 },
    ashtray: { x: 2.34, z: -6.02 },
    lamp: { x: 2.22, y: 2.58, z: -6.2 },
  },
};

/** 收集需要做入场动画的对象 */
export class Builder {
  constructor() {
    this.parts = [];
  }

  /** @param {THREE.Object3D} obj */
  add(obj, opts = {}) {
    this.parts.push({ obj, opts });
    return obj;
  }

  flush(assembler) {
    for (const { obj, opts } of this.parts) assembler.add(obj, opts);
    this.parts.length = 0;
  }
}
