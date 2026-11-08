import * as THREE from 'three';
import { addEdgeLines } from './materials.js';

/** 常用几何体快速构造 + 摆放 */

export function box(w, h, d, mat, { line = null, opacity = 0.5 } = {}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  const auto = line === null ? Math.max(w, h, d) > 0.34 : line;
  if (auto) addEdgeLines(mesh, { opacity });
  return mesh;
}

export function cyl(rTop, rBottom, h, mat, { seg = 16, line = false, opacity = 0.45 } = {}) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, seg), mat);
  if (line) addEdgeLines(mesh, { opacity, threshold: 40 });
  return mesh;
}

export function plane(w, h, mat) {
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
}

export function circle(r, mat, seg = 32) {
  return new THREE.Mesh(new THREE.CircleGeometry(r, seg), mat);
}

/** 把对象摆到父级指定位置（局部坐标） */
export function put(parent, obj, x = 0, y = 0, z = 0, ry = 0) {
  obj.position.set(x, y, z);
  if (ry) obj.rotation.y = ry;
  parent.add(obj);
  return obj;
}

/** 让平面平躺在地面上（默认 PlaneGeometry 朝 +Z） */
export function layFlat(mesh, y = 0.02, ry = 0) {
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = ry;
  mesh.position.y = y;
  return mesh;
}

/** 生成一段悬垂电线（悬链线近似） */
export function wire(from, to, sag = 1.4, radius = 0.025, material = null, segments = 26) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = THREE.MathUtils.lerp(from.x, to.x, t);
    const z = THREE.MathUtils.lerp(from.z, to.z, t);
    const y = THREE.MathUtils.lerp(from.y, to.y, t) - Math.sin(Math.PI * t) * sag;
    points.push(new THREE.Vector3(x, y, z));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  const geo = new THREE.TubeGeometry(curve, segments, radius, 5, false);
  return new THREE.Mesh(geo, material ?? new THREE.MeshBasicMaterial({ color: 0x141a26 }));
}

/** 给对象加一层柔和接触阴影贴片（增强“模型摆件”的落地感） */
const shadowTex = (() => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,0.55)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.22)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
})();

export function contactShadow(w, d, opacity = 1) {
  const mat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = 2;
  return mesh;
}
