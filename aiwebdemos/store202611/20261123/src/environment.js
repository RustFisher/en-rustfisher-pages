import * as THREE from 'three';

/**
 * 环境控制器：时间段 × 天气
 * ------------------------------------------------------------------
 * 单一控制器统一管理雾、太阳/月光、半球光、环境光、补光、曝光，
 * 以及路灯 / 霓虹的分组亮度，避免多个模块抢同一批灯光。
 */

export const TIME_MODES = ['morning', 'noon', 'dusk', 'night'];
export const WEATHER_MODES = ['rain', 'cloudy', 'clear'];

const deg = THREE.MathUtils.degToRad;

export const TIME_PRESETS = {
  morning: {
    sun: { az: 105, el: 20, dist: 38, color: 0xffd2a1, intensity: 2.7 },
    hemiSky: 0xffe3c4,
    hemiGround: 0x3f3a4a,
    hemi: 1.05,
    ambient: 0.48,
    fill: 0.55,
    fog: { near: 80, far: 180, color: 0xb9c6d6 },
    exposure: 1.05,
    street: 0.05,
    neon: 0.2,
    interior: 0.85,
    reflect: 0.7,
  },
  noon: {
    sun: { az: 18, el: 72, dist: 38, color: 0xfff4e2, intensity: 3.2 },
    hemiSky: 0xcfe4ff,
    hemiGround: 0x3a4252,
    hemi: 1.2,
    ambient: 0.52,
    fill: 0.55,
    fog: { near: 90, far: 220, color: 0xc8d9e8 },
    exposure: 1.1,
    street: 0,
    neon: 0.1,
    interior: 0.75,
    reflect: 0.5,
  },
  dusk: {
    sun: { az: -65, el: 12, dist: 38, color: 0xffa364, intensity: 2.5 },
    hemiSky: 0xffb98a,
    hemiGround: 0x2f2a3d,
    hemi: 1.15,
    ambient: 0.52,
    fill: 0.55,
    fog: { near: 55, far: 110, color: 0x6b5566 },
    exposure: 1.05,
    street: 0.85,
    neon: 0.9,
    interior: 0.95,
    reflect: 0.85,
  },
  night: {
    sun: { az: 40, el: 44, dist: 38, color: 0xbdd6ff, intensity: 2.6 },
    hemiSky: 0x9dc2ff,
    hemiGround: 0x241f36,
    hemi: 1.2,
    ambient: 0.55,
    fill: 0.6,
    fog: { near: 60, far: 140, color: 0x0a1224 },
    exposure: 1.05,
    street: 1,
    neon: 1,
    interior: 1,
    reflect: 1,
  },
};

export const WEATHER_PRESETS = {
  rain: {
    rain: 1,
    sun: 0.73,
    hemi: 0.96,
    ambient: 1,
    fill: 1,
    interior: 1,
    wetness: 1,
    fogNear: 0.77,
    fogFar: 0.71,
    fogTint: 0x141b28,
    fogMix: 0.5,
  },
  cloudy: {
    rain: 0,
    sun: 0.4,
    hemi: 0.92,
    ambient: 1,
    fill: 0.92,
    interior: 1,
    wetness: 0.65,
    fogNear: 0.68,
    fogFar: 0.76,
    fogTint: 0x5f6a78,
    fogMix: 0.35,
  },
  clear: {
    rain: 0,
    sun: 1,
    hemi: 1,
    ambient: 1,
    fill: 1,
    interior: 0.95,
    wetness: 0.4,
    fogNear: 1,
    fogFar: 1,
    fogTint: 0x000000,
    fogMix: 0,
  },
};

function combine(time, weather) {
  const t = TIME_PRESETS[time];
  const w = WEATHER_PRESETS[weather];

  return {
    az: deg(t.sun.az),
    el: deg(t.sun.el),
    dist: t.sun.dist,
    sunColor: new THREE.Color(t.sun.color),
    sunIntensity: t.sun.intensity * w.sun,
    hemiSky: new THREE.Color(t.hemiSky),
    hemiGround: new THREE.Color(t.hemiGround),
    hemi: t.hemi * w.hemi,
    ambient: t.ambient * w.ambient,
    fill: t.fill * w.fill,
    fogNear: t.fog.near * w.fogNear,
    fogFar: t.fog.far * w.fogFar,
    fogColor: new THREE.Color(t.fog.color).lerp(new THREE.Color(w.fogTint), w.fogMix),
    exposure: t.exposure,
    street: t.street,
    neon: t.neon,
    interior: t.interior * w.interior,
    reflect: t.reflect * w.wetness,
    rain: w.rain,
  };
}

const lerpAngle = (a, b, k) => {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * k;
};

export function createEnvironment({ scene, renderer, hemi, ambient, sun, fill }) {
  let time = 'night';
  let weather = 'rain';

  const target = combine(time, weather);

  const state = {
    az: target.az,
    el: target.el,
    dist: target.dist,
    sunColor: target.sunColor.clone(),
    sunIntensity: target.sunIntensity,
    hemiSky: target.hemiSky.clone(),
    hemiGround: target.hemiGround.clone(),
    hemi: target.hemi,
    ambient: target.ambient,
    fill: target.fill,
    fogNear: target.fogNear,
    fogFar: target.fogFar,
    fogColor: target.fogColor.clone(),
    exposure: target.exposure,
    street: target.street,
    neon: target.neon,
    interior: target.interior,
    reflect: target.reflect,
    rain: target.rain,
  };

  // 收集打了 lightGroup 标签的路灯 / 霓虹 / 店内灯对象
  const tagged = [];
  scene.traverse((obj) => {
    const group = obj.userData.lightGroup;
    if (group !== 'street' && group !== 'neon' && group !== 'interior') return;

    if (obj.isPointLight) {
      tagged.push({ obj, group, type: 'light', base: obj.intensity });
    } else if (obj.isSprite) {
      tagged.push({ obj, group, type: 'sprite', base: obj.material.opacity });
    } else if (obj.isMesh && obj.material && obj.material.color) {
      tagged.push({ obj, group, type: 'color', base: obj.material.color.clone() });
    }
  });

  // 水洼 / 霓虹倒影：按材质收集，避免共享材质被重复写入
  const reflectMats = new Map();
  scene.traverse((obj) => {
    if (!obj.isMesh || !obj.userData.reflect || !obj.material) return;
    if (reflectMats.has(obj.material.uuid)) return;
    reflectMats.set(obj.material.uuid, {
      mat: obj.material,
      base: obj.material.opacity,
    });
  });

  function apply() {
    if (scene.fog) {
      scene.fog.color.copy(state.fogColor);
      scene.fog.near = state.fogNear;
      scene.fog.far = state.fogFar;
    }

    hemi.color.copy(state.hemiSky);
    hemi.groundColor.copy(state.hemiGround);
    hemi.intensity = state.hemi;
    ambient.intensity = state.ambient;
    fill.intensity = state.fill;

    sun.color.copy(state.sunColor);
    sun.intensity = state.sunIntensity;
    const ce = Math.cos(state.el);
    sun.position.set(
      Math.sin(state.az) * ce * state.dist,
      Math.sin(state.el) * state.dist,
      Math.cos(state.az) * ce * state.dist
    );

    if (renderer) renderer.toneMappingExposure = state.exposure;

    for (const item of tagged) {
      const factor = state[item.group];
      if (item.type === 'light') item.obj.intensity = item.base * factor;
      else if (item.type === 'sprite') item.obj.material.opacity = item.base * factor;
      else item.obj.material.color.copy(item.base).multiplyScalar(factor);
    }

    for (const { mat, base } of reflectMats.values()) {
      mat.opacity = base * state.reflect;
    }
  }

  function snapToTarget() {
    state.az = target.az;
    state.el = target.el;
    state.dist = target.dist;
    state.sunColor.copy(target.sunColor);
    state.sunIntensity = target.sunIntensity;
    state.hemiSky.copy(target.hemiSky);
    state.hemiGround.copy(target.hemiGround);
    state.hemi = target.hemi;
    state.ambient = target.ambient;
    state.fill = target.fill;
    state.fogNear = target.fogNear;
    state.fogFar = target.fogFar;
    state.fogColor.copy(target.fogColor);
    state.exposure = target.exposure;
    state.street = target.street;
    state.neon = target.neon;
    state.interior = target.interior;
    state.reflect = target.reflect;
    state.rain = target.rain;
    apply();
  }

  function setTime(next, immediate = false) {
    if (!TIME_PRESETS[next]) return;
    time = next;
    Object.assign(target, combine(time, weather));
    if (immediate) snapToTarget();

  }

  function setWeather(next, immediate = false) {
    if (!WEATHER_PRESETS[next]) return;
    weather = next;
    Object.assign(target, combine(time, weather));
    if (immediate) snapToTarget();

  }

  apply();

  return {
    get time() {
      return time;
    },
    get weather() {
      return weather;
    },
    get rainAmount() {
      return state.rain;
    },
    get factors() {
      return {
        street: state.street,
        neon: state.neon,
        interior: state.interior,
        reflect: state.reflect,
      };
    },
    setTime,
    setWeather,

    update(dt) {
      const k = 1 - Math.exp(-dt * 2.2);

      state.az = lerpAngle(state.az, target.az, k);
      state.el += (target.el - state.el) * k;
      state.dist += (target.dist - state.dist) * k;
      state.sunColor.lerp(target.sunColor, k);
      state.sunIntensity += (target.sunIntensity - state.sunIntensity) * k;
      state.hemiSky.lerp(target.hemiSky, k);
      state.hemiGround.lerp(target.hemiGround, k);
      state.hemi += (target.hemi - state.hemi) * k;
      state.ambient += (target.ambient - state.ambient) * k;
      state.fill += (target.fill - state.fill) * k;
      state.fogNear += (target.fogNear - state.fogNear) * k;
      state.fogFar += (target.fogFar - state.fogFar) * k;
      state.fogColor.lerp(target.fogColor, k);
      state.exposure += (target.exposure - state.exposure) * k;
      state.street += (target.street - state.street) * k;
      state.neon += (target.neon - state.neon) * k;
      state.interior += (target.interior - state.interior) * k;
      state.reflect += (target.reflect - state.reflect) * k;
      state.rain += (target.rain - state.rain) * k;

      apply();
    },
  };
}
