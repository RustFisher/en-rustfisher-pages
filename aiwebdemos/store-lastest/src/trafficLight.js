import * as THREE from 'three';
import { toon, glowSprite } from './materials.js';
import { box, cyl } from './kit.js';
import { L } from './layout.js';

/**
 * 路口信号灯
 * ------------------------------------------------------------------
 * 灯杆在路口西南角，悬臂伸到前街上方。
 * 前街灯头双面显示，侧路灯头也双面显示；
 * 两相位循环：前街绿 → 黄 → 全红 → 侧路绿 → 黄 → 全红。
 */

const PHASES = [
  { name: 'frontGreen', dur: 12, front: 'green', side: 'red' },
  { name: 'frontYellow', dur: 2.5, front: 'yellow', side: 'red' },
  { name: 'allRedA', dur: 1.5, front: 'red', side: 'red' },
  { name: 'sideGreen', dur: 8, front: 'red', side: 'green' },
  { name: 'sideYellow', dur: 2.5, front: 'red', side: 'yellow' },
  { name: 'allRedB', dur: 1.5, front: 'red', side: 'red' },
];

const LENSES = [
  { name: 'red', y: 0.32, dim: 0x4a1010, bright: 0xff3b30 },
  { name: 'yellow', y: 0, dim: 0x4a3a10, bright: 0xffc24a },
  { name: 'green', y: -0.32, dim: 0x0f3a22, bright: 0x45ff8c },
];

const housingMat = toon(0x20252f);
const visorMat = toon(0x151a22);
const metalMat = toon(0x4a5568);

function makeHead(dual = true) {
  const head = new THREE.Group();
  const housing = box(0.38, 1.06, 0.26, housingMat);
  head.add(housing);

  const lenses = {};

  for (const dir of dual ? [1, -1] : [1]) {
    const z = dir * 0.15;

    for (const lens of LENSES) {
      const mat = new THREE.MeshBasicMaterial({ color: lens.dim, toneMapped: false });
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(0.1, 18), mat);
      mesh.position.set(0, lens.y, z);
      if (dir < 0) mesh.rotation.y = Math.PI;
      head.add(mesh);

      const glow = glowSprite(lens.bright, 0.62, 0);
      glow.position.set(0, lens.y, z + dir * 0.05);
      head.add(glow);

      const visor = box(0.28, 0.035, 0.14, visorMat, { line: false });
      visor.position.set(0, lens.y + 0.13, z + dir * 0.04);
      head.add(visor);

      if (!lenses[lens.name]) lenses[lens.name] = [];
      lenses[lens.name].push({ mat, glow, lens });
    }
  }

  return { head, lenses };
}

function setLenses(lenses, activeName) {
  for (const [name, list] of Object.entries(lenses)) {
    const active = name === activeName;
    for (const item of list) {
      item.mat.color.setHex(active ? item.lens.bright : item.lens.dim);
      item.glow.material.opacity = active ? 0.55 : 0;
    }
  }
}

export function buildTrafficLight(builder) {
  const pos = L.trafficLight;
  const root = new THREE.Group();
  root.name = 'trafficLight';
  root.position.set(pos.x, pos.y, pos.z);

  const pole = cyl(0.06, 0.075, 4.6, metalMat, { seg: 10 });
  pole.position.y = 2.3;
  root.add(pole);

  const arm = cyl(0.045, 0.045, 3.15, metalMat, { seg: 8 });
  arm.rotation.x = Math.PI / 2;
  arm.position.set(0, 4.3, -1.575);
  root.add(arm);

  const front = makeHead(true);
  front.head.position.set(0, 4.0, -3.15);
  front.head.rotation.y = -Math.PI / 2;
  root.add(front.head);

  const side = makeHead(true);
  side.head.position.set(0, 3.25, 0);
  root.add(side.head);

  builder.add(root, { delay: 3.6, dur: 0.7, mode: 'pop' });

  let index = 0;
  let timer = 0;

  const apply = () => {
    const phase = PHASES[index];
    setLenses(front.lenses, phase.front);
    setLenses(side.lenses, phase.side);
  };

  apply();

  return {
    group: root,

    get state() {
      return PHASES[index].name;
    },
    get frontColor() {
      return PHASES[index].front;
    },
    get sideColor() {
      return PHASES[index].side;
    },
    get frontGreen() {
      return PHASES[index].front === 'green';
    },

    update(dt) {
      timer += dt;
      while (timer >= PHASES[index].dur) {
        timer -= PHASES[index].dur;
        index = (index + 1) % PHASES.length;
        apply();
      }
    },
  };
}
