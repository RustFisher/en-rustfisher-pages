import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildWorld } from './world.js';
import { TIME_MODES, WEATHER_MODES } from './environment.js';
import { playMeow } from './audio.js';

/**
 * 雨夜便利店街角 · 微缩模型
 * 纯 3D 画布：无任何 UI 控件，交互仅为拖拽旋转 / 滚轮缩放。
 */

const canvasHost = document.body;

/* ---------------- 渲染器 ---------------- */
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.domElement.setAttribute('role', 'img');
renderer.domElement.setAttribute(
  'aria-label',
  '雨夜便利店街角的微缩三维场景，可拖拽旋转与缩放观看；屋顶的 BLOG 灯箱可点击打开博客，屋檐下的小猫可以摸'
);
canvasHost.appendChild(renderer.domElement);

/* ---------------- 场景与相机 ---------------- */
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  32,
  window.innerWidth / window.innerHeight,
  0.5,
  240
);
camera.position.set(18, 16.5, 27);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 2.4, -2.2);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.enablePan = false;
controls.rotateSpeed = 0.75;
controls.zoomSpeed = 0.8;
controls.minDistance = 8;
controls.maxDistance = 70;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// 自动环绕：off / left / right 三档，默认关闭，由左上角控件切换
const ROTATE_SPEED = 0.32;
let rotateMode = 'off';
let dragging = false;

controls.autoRotate = false;

function applyRotateMode() {
  controls.autoRotate = rotateMode !== 'off' && !dragging;
  controls.autoRotateSpeed = rotateMode === 'left' ? ROTATE_SPEED : -ROTATE_SPEED;
}

controls.addEventListener('start', () => {
  dragging = true;
  applyRotateMode();
});
controls.addEventListener('end', () => {
  dragging = false;
  applyRotateMode();
});


/* ---------------- 世界 ---------------- */
const world = buildWorld(scene, renderer);

/* ---------------- 时间 / 天气 / 旋转切换 ---------------- */
const TIME_KEY = 'rainy-store:time';
const WEATHER_KEY = 'rainy-store:weather';
const ROTATE_KEY = 'rainy-store:rotate';
const ROTATE_MODES = ['off', 'left', 'right'];
const timeButtons = Array.from(document.querySelectorAll('button[data-time]'));
const weatherButtons = Array.from(document.querySelectorAll('button[data-weather]'));
const rotateButtons = Array.from(document.querySelectorAll('button[data-rotate]'));

function loadMode(key, modes, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return modes.includes(saved) ? saved : fallback;
  } catch {
    return fallback;
  }
}

function applyAtmosphereUI(timeMode, weatherMode, rotateMode2) {
  document.body.dataset.time = timeMode;
  document.body.dataset.weather = weatherMode;
  timeButtons.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.time === timeMode));
  });
  weatherButtons.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.weather === weatherMode));
  });
  rotateButtons.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.rotate === rotateMode2));
  });
}

function storeMode(key, mode) {
  try {
    localStorage.setItem(key, mode);
  } catch {
    /* 隐私模式下忽略持久化失败 */
  }
}

function trackChange(name, payload, clarityEvent) {
  if (typeof window.gtag === 'function') window.gtag('event', name, payload);
  if (typeof window.clarity === 'function') window.clarity('event', clarityEvent);
}

const initialTime = loadMode(TIME_KEY, TIME_MODES, 'night');
const initialWeather = loadMode(WEATHER_KEY, WEATHER_MODES, 'rain');
const initialRotate = loadMode(ROTATE_KEY, ROTATE_MODES, 'off');
world.environment.setTime(initialTime, true);
world.environment.setWeather(initialWeather, true);
rotateMode = initialRotate;
applyRotateMode();
applyAtmosphereUI(initialTime, initialWeather, initialRotate);

function setTime(mode) {
  if (!TIME_MODES.includes(mode) || mode === world.environment.time) return;

  world.environment.setTime(mode);
  applyAtmosphereUI(mode, world.environment.weather, rotateMode);
  storeMode(TIME_KEY, mode);
  trackChange('time_change', { time: mode, weather: world.environment.weather }, 'time_' + mode);
}

function setWeather(mode) {
  if (!WEATHER_MODES.includes(mode) || mode === world.environment.weather) return;

  world.environment.setWeather(mode);
  applyAtmosphereUI(world.environment.time, mode, rotateMode);
  storeMode(WEATHER_KEY, mode);
  trackChange('weather_change', { time: world.environment.time, weather: mode }, 'weather_' + mode);
}

function setRotateMode(mode) {
  if (!ROTATE_MODES.includes(mode) || mode === rotateMode) return;

  rotateMode = mode;
  applyRotateMode();
  applyAtmosphereUI(world.environment.time, world.environment.weather, mode);
  storeMode(ROTATE_KEY, mode);
  trackChange('rotate_change', { mode }, 'rotate_' + mode);
}

timeButtons.forEach((btn) => {
  btn.addEventListener('click', () => setTime(btn.dataset.time));
});
weatherButtons.forEach((btn) => {
  btn.addEventListener('click', () => setWeather(btn.dataset.weather));
});
rotateButtons.forEach((btn) => {
  btn.addEventListener('click', () => setRotateMode(btn.dataset.rotate));
});

/* ---------------- 场景内博客灯箱交互 ---------------- */
const blog = world.blogSign;
const blogRaycaster = new THREE.Raycaster();
const blogPointer = new THREE.Vector2();
let pressId = null;
let pressX = 0;
let pressY = 0;

function hitsBlog(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  blogPointer.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  );
  blogRaycaster.setFromCamera(blogPointer, camera);
  return blogRaycaster.intersectObject(blog.hit, false).length > 0;
}

function hitsCat(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  blogPointer.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  );
  blogRaycaster.setFromCamera(blogPointer, camera);
  return blogRaycaster.intersectObject(world.cat.hit, false).length > 0;
}

function setHoverState(onBlog, onCat) {
  blog.setHover(onBlog);
  renderer.domElement.style.cursor = onBlog || onCat ? 'pointer' : '';
}

renderer.domElement.addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return;
  pressId = event.pointerId;
  pressX = event.clientX;
  pressY = event.clientY;
});

renderer.domElement.addEventListener('pointerup', (event) => {
  if (event.pointerId !== pressId) return;
  pressId = null;

  // 拖动旋转超过阈值时不触发交互
  if (Math.hypot(event.clientX - pressX, event.clientY - pressY) > 10) return;
  if (!world.assembly.finished) return;

  if (hitsCat(event)) {
    world.cat.pet();
    playMeow();
    if (typeof window.gtag === 'function') window.gtag('event', 'cat_pet', { target: 'store_cat' });
    if (typeof window.clarity === 'function') window.clarity('event', 'cat_pet');
    return;
  }

  if (!hitsBlog(event)) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'blog_link_click', {
      link_url: blog.url,
      link_position: 'store_sign',
    });
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', 'blog_sign_click');
  }
  window.open(blog.url, '_blank', 'noopener,noreferrer');
});

renderer.domElement.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'mouse' && event.buttons !== 0) {
    setHoverState(false, false);
    return;
  }
  const ready = world.assembly.finished;
  setHoverState(ready && hitsBlog(event), ready && hitsCat(event));
});

renderer.domElement.addEventListener('pointerleave', () => setHoverState(false, false));
renderer.domElement.addEventListener('pointercancel', () => {
  pressId = null;
  setHoverState(false, false);
});

/* ---------------- 尺寸自适应 ---------------- */
const BASE_DIST = 37.1; // 初始机位到目标的距离
const FIT_HALF_WIDTH = 13.6; // 底座半宽 + 少量留白

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const aspect = w / h;
  camera.aspect = aspect;

  // 按底座宽度反推需要的垂直 FOV：宽屏保持 32°，竖屏最多放宽到 52°
  const needed = THREE.MathUtils.radToDeg(
    2 * Math.atan(FIT_HALF_WIDTH / (BASE_DIST * aspect))
  );
  camera.fov = THREE.MathUtils.clamp(needed, 32, 52);
  camera.updateProjectionMatrix();

  // 窄屏再自动后拉相机（只拉远不推近），保证模型完整入画
  const fitDist = Math.min(
    FIT_HALF_WIDTH / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * aspect),
    62
  );
  const dist = camera.position.distanceTo(controls.target);
  if (dist < fitDist) {
    const dir = camera.position.clone().sub(controls.target).normalize();
    camera.position.copy(controls.target).addScaledVector(dir, fitDist);
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
}
window.addEventListener('resize', resize);
resize();

/* ---------------- 主循环 ---------------- */
const clock = new THREE.Clock();
const fadeEl = document.getElementById('fade');
let firstFrame = true;

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);

  world.update(dt);

  controls.update();
  renderer.render(scene, camera);

  if (firstFrame) {
    firstFrame = false;
    // 首帧渲染完成后再淡出黑场，避免白屏或闪烁
    requestAnimationFrame(() => fadeEl && fadeEl.classList.add('is-hidden'));
  }
});


