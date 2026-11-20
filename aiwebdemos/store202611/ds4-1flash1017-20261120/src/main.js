import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildWorld } from './world.js';

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
  '雨夜便利店街角的微缩三维场景，可拖拽旋转与缩放观看；屋顶的 BLOG 灯箱可点击打开博客'
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
controls.minDistance = 17;
controls.maxDistance = 70;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// 缓慢自动环绕，用户操作时暂停，静止后再恢复
const AUTO_ROTATE_SPEED = 0.32;
const IDLE_RESUME = 4.5;
controls.autoRotate = true;
controls.autoRotateSpeed = AUTO_ROTATE_SPEED;

let userActive = false;
let idleTime = 0;

controls.addEventListener('start', () => {
  userActive = true;
  controls.autoRotate = false;
});
controls.addEventListener('end', () => {
  userActive = false;
  idleTime = 0;
});

/* ---------------- 世界 ---------------- */
const world = buildWorld(scene);

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

function setBlogHover(on) {
  renderer.domElement.style.cursor = on ? 'pointer' : '';
  blog.setHover(on);
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

  // 拖动旋转超过阈值时不触发跳转
  if (Math.hypot(event.clientX - pressX, event.clientY - pressY) > 10) return;
  if (!world.assembly.finished || !hitsBlog(event)) return;

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
    setBlogHover(false);
    return;
  }
  setBlogHover(world.assembly.finished && hitsBlog(event));
});

renderer.domElement.addEventListener('pointerleave', () => setBlogHover(false));
renderer.domElement.addEventListener('pointercancel', () => {
  pressId = null;
  setBlogHover(false);
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

  if (!userActive) {
    idleTime += dt;
    if (idleTime > IDLE_RESUME) controls.autoRotate = true;
  }

  controls.update();
  renderer.render(scene, camera);

  if (firstFrame) {
    firstFrame = false;
    // 首帧渲染完成后再淡出黑场，避免白屏或闪烁
    requestAnimationFrame(() => fadeEl && fadeEl.classList.add('is-hidden'));
  }
});

