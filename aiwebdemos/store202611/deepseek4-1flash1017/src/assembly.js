import * as THREE from 'three';

/**
 * 入场装配系统
 * ------------------------------------------------------------------
 * 所有场景零件通过 add(obj, opts) 注册，按时间线从“散件”长成完整模型：
 *  - rise : 以自身底部为轴纵向生长（地面、墙体、内景等）
 *  - drop : 从上方落下就位（电线、护栏）
 *  - pop  : 从底部中心弹性放大（小道具）
 * opts: { delay, dur, mode, from }
 *   delay/dur 单位为秒；from 用于 drop 的落下高度。
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// easeOutBack：末尾轻微过冲，让 “pop” 更有弹性
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export class Assembly {
  constructor(root = null) {
    this.root = root;
    this.items = [];
    this.time = 0;
    this.duration = 0;
    this.finished = false;
  }

  add(obj, opts = {}) {
    const { delay = 0, dur = 1, mode = 'rise', from = 1 } = opts;

    // 记录基准包围盒，用于计算“以底部为轴”的缩放补偿
    obj.updateMatrixWorld(true);
    const bbox = new THREE.Box3().setFromObject(obj);
    const hasBox = Number.isFinite(bbox.min.y);
    const minY = hasBox ? bbox.min.y : obj.position.y;
    const center = new THREE.Vector3();
    if (hasBox) bbox.getCenter(center);
    else center.set(obj.position.x, obj.position.y, obj.position.z);

    this.items.push({
      obj,
      delay,
      dur,
      mode,
      from,
      minY,
      cx: center.x,
      cz: center.z,
      base: {
        x: obj.position.x,
        y: obj.position.y,
        z: obj.position.z,
        sx: obj.scale.x,
        sy: obj.scale.y,
        sz: obj.scale.z,
      },
      started: false,
      done: false,
    });

    obj.visible = false;
    this.duration = Math.max(this.duration, delay + dur);
    if (this.root) this.root.add(obj);
    return obj;
  }

  update(dt) {
    this.time += dt;
    let allDone = true;

    for (const it of this.items) {
      if (it.done) continue;

      const t = (this.time - it.delay) / it.dur;
      if (t < 0) {
        allDone = false;
        continue;
      }

      if (!it.started) {
        it.started = true;
        it.obj.visible = true;
      }

      const p = Math.min(1, t);
      const e = it.mode === 'pop' ? easeOutBack(p) : easeOutCubic(p);
      const { obj, base, minY } = it;

      if (it.mode === 'rise') {
        const k = Math.max(0.001, e);
        obj.scale.set(base.sx, base.sy * k, base.sz);
        obj.position.y = base.y + (1 - k) * (minY - base.y);
      } else if (it.mode === 'drop') {
        const k = 1 - e;
        obj.position.y = base.y + k * it.from;
      } else {
        const k = Math.max(0.001, e);
        obj.scale.set(base.sx * k, base.sy * k, base.sz * k);
        // 以“底部中心”为缩放轴心，避免零件从原点方向飞入
        obj.position.x = base.x + (1 - k) * (it.cx - base.x);
        obj.position.z = base.z + (1 - k) * (it.cz - base.z);
        obj.position.y = base.y + (1 - k) * (minY - base.y);
      }

      if (p >= 1) {
        obj.scale.set(base.sx, base.sy, base.sz);
        obj.position.set(base.x, base.y, base.z);
        it.done = true;
      } else {
        allDone = false;
      }
    }

    this.finished = allDone;
    return this.time;
  }
}
