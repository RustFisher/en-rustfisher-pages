import * as THREE from 'three';
import { Builder } from './layout.js';
import { buildGround } from './ground.js';
import { buildStore } from './store.js';
import { buildBuildings } from './buildings.js';
import { buildProps } from './props.js';
import { buildBlogSign } from './blogSign.js';
import { buildSmokers } from './smokers.js';
import { buildCat } from './cat.js';
import { Assembly } from './assembly.js';
import { createRain } from './rain.js';
import { createEnvironment } from './environment.js';
import { createAutoDoor } from './autoDoor.js';

/**
 * 世界编排：灯光 + 建模模块 + 装配时间线 + 雨效
 * 所有零件都通过 Builder 收集，交由 Assembly 统一注册入场动画。
 */
export function buildWorld(scene, renderer) {
  scene.fog = new THREE.Fog(0x0a1224, 46, 100);

  /* ---------------- 环境光照 ---------------- */
  const hemi = new THREE.HemisphereLight(0x9dc2ff, 0x241f36, 1.15);
  hemi.name = 'hemiLight';
  scene.add(hemi);

  const ambient = new THREE.AmbientLight(0x39456e, 0.55);
  ambient.name = 'ambientLight';
  scene.add(ambient);

  // 主光：白天是太阳，夜晚是月光，负责投影
  const sun = new THREE.DirectionalLight(0xbdd6ff, 1.9);
  sun.name = 'sunLight';
  sun.target.position.set(0, 0, -2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 6;
  sun.shadow.camera.far = 96;
  sun.shadow.camera.left = -24;
  sun.shadow.camera.right = 24;
  sun.shadow.camera.top = 24;
  sun.shadow.camera.bottom = -24;
  sun.shadow.bias = -0.0008;
  sun.shadow.normalBias = 0.02;
  sun.shadow.radius = 1.2;
  scene.add(sun);
  scene.add(sun.target);

  // 冷色补光：勾出屋檐、电线杆的轮廓
  const fill = new THREE.DirectionalLight(0x6b8ed6, 0.6);
  fill.name = 'fillLight';
  fill.position.set(-18, 12, -14);
  scene.add(fill);

  /* ---------------- 建模 ---------------- */
  const builder = new Builder();
  buildGround(builder);
  const storeRefs = buildStore(builder);
  buildBuildings(builder);
  buildProps(builder);
  const blogSign = buildBlogSign(builder);
  const cat = buildCat(builder);
  const smokers = buildSmokers(builder);

  const assembly = new Assembly(scene);
  builder.flush(assembly);

  const environment = createEnvironment({ scene, renderer, hemi, ambient, sun, fill });

  const autoDoor = createAutoDoor({
    panels: storeRefs.doorPanels,
    sensorLamp: storeRefs.sensorLamp,
    cat: cat.group,
  });

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
    blogSign,
    cat,
    environment,
    autoDoor,
    doorPanels: storeRefs.doorPanels,
    sensorLamp: storeRefs.sensorLamp,

    update(dt) {
      clock += dt;
      const t = assembly.update(dt);

      environment.update(dt);

      // 雨在装配尾段淡入；天气切到晴朗/多云时雨量归零
      const assemblyRain = THREE.MathUtils.smoothstep(t, 4.4, 5.8);
      rain.update(dt, assemblyRain * environment.rainAmount);

      // 门口博客灯箱：呼吸光 + 悬停反馈
      blogSign.update(dt, t);

      // 后巷抽烟的两人：烟头明暗与烟团
      smokers.update(dt, t);

      // 门前小猫：按时间段调整作息，坐一会、跑一段、再跑回来
      cat.update(dt, t, environment.time, environment.weather);

      // 自动门：猫咪跑过门口时打开，离开后缓闭
      autoDoor.update(dt);

      // 竖招与门头光晕：慢呼吸 + 偶发电流闪烁
      const buzz = Math.sin(clock * 21.0) * Math.sin(clock * 6.7);
      const dip = buzz > 0.94 ? 0.45 : 1;
      const shown = THREE.MathUtils.smoothstep(t, 2.4, 3.2);
      const neon = environment.factors.neon;

      if (signGlow) {
        signGlow.material.opacity = signBase * shown * neon * (0.92 + Math.sin(clock * 1.7) * 0.08) * dip;
      }
      if (bladeGlow) {
        bladeGlow.material.opacity = bladeBase * shown * neon * (0.88 + Math.sin(clock * 2.3) * 0.12);
      }
    },
  };
}
