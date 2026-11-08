import * as THREE from 'three';
import { Builder } from './layout.js';
import { buildGround } from './ground.js';
import { buildStore } from './store.js';
import { buildBuildings } from './buildings.js';
import { buildProps } from './props.js';
import { Assembly } from './assembly.js';
import { createRain } from './rain.js';

/**
 * 世界编排：灯光 + 建模模块 + 装配时间线 + 雨效
 * 所有零件都通过 Builder 收集，交由 Assembly 统一注册入场动画。
 */
export function buildWorld(scene) {
  scene.fog = new THREE.Fog(0x0a1224, 46, 100);

  /* ---------------- 夜间光照 ---------------- */
  const hemi = new THREE.HemisphereLight(0x9dc2ff, 0x241f36, 1.15);
  scene.add(hemi);

  const ambient = new THREE.AmbientLight(0x39456e, 0.55);
  scene.add(ambient);

  // 月光主光：给建筑与道具投影，让模型有实体感
  const moon = new THREE.DirectionalLight(0xbdd6ff, 1.9);
  moon.position.set(16, 24, 14);
  moon.target.position.set(0, 0, -2);
  moon.castShadow = true;
  moon.shadow.mapSize.set(2048, 2048);
  moon.shadow.camera.near = 4;
  moon.shadow.camera.far = 72;
  moon.shadow.camera.left = -18;
  moon.shadow.camera.right = 18;
  moon.shadow.camera.top = 18;
  moon.shadow.camera.bottom = -18;
  moon.shadow.bias = -0.0008;
  moon.shadow.normalBias = 0.02;
  moon.shadow.radius = 1.2;
  scene.add(moon);
  scene.add(moon.target);

  // 冷色补光：勾出屋檐、电线杆的轮廓
  const fill = new THREE.DirectionalLight(0x6b8ed6, 0.6);
  fill.position.set(-18, 12, -14);
  scene.add(fill);

  /* ---------------- 建模 ---------------- */
  const builder = new Builder();
  buildGround(builder);
  buildStore(builder);
  buildBuildings(builder);
  buildProps(builder);

  const assembly = new Assembly(scene);
  builder.flush(assembly);

  /* ---------------- 雨 ---------------- */
  const rain = createRain(scene);

  /* ---------------- 霓虹呼吸 / 轻微闪烁 ---------------- */
  const signGlow = scene.getObjectByName('signGlow');
  const bladeGlow = scene.getObjectByName('bladeGlow');
  const signBase = signGlow ? signGlow.material.opacity : 0;
  const bladeBase = bladeGlow ? bladeGlow.material.opacity : 0;
  let clock = 0;

  return {
    assembly,
    rain,

    update(dt) {
      clock += dt;
      const t = assembly.update(dt);

      // 雨在装配尾段淡入
      rain.update(dt, THREE.MathUtils.smoothstep(t, 4.4, 5.8));

      // 竖招与门头光晕：慢呼吸 + 偶发电流闪烁
      const buzz = Math.sin(clock * 21.0) * Math.sin(clock * 6.7);
      const dip = buzz > 0.94 ? 0.45 : 1;
      const shown = THREE.MathUtils.smoothstep(t, 2.4, 3.2);

      if (signGlow) {
        signGlow.material.opacity = signBase * shown * (0.92 + Math.sin(clock * 1.7) * 0.08) * dip;
      }
      if (bladeGlow) {
        bladeGlow.material.opacity = bladeBase * shown * (0.88 + Math.sin(clock * 2.3) * 0.12);
      }
    },
  };
}
