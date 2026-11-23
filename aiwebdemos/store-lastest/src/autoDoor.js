import * as THREE from 'three';

/**
 * 便利店自动门
 * ------------------------------------------------------------------
 * 猫咪跑过门口触发区时双开玻璃门外滑，离开后延时缓闭。
 * 感应灯待机绿色，开门时变橙并轻微闪烁。
 */

const TRIGGER_MIN = -0.75;
const TRIGGER_MAX = 0.55;
const SLIDE = 0.65;
const CLOSE_DELAY = 1.0;

const LAMP_CLOSED = new THREE.Color(0x7bffb0);
const LAMP_OPEN = new THREE.Color(0xffd27b);

export function createAutoDoor({ panels, sensorLamp, actors }) {
  const [panelL, panelR] = panels;
  const baseL = panelL.position.x;
  const baseR = panelR.position.x;

  let openT = 0;
  let closeTimer = 0;
  let time = 0;
  let lampColor = LAMP_CLOSED.clone();

  function actorNearDoor() {
    for (const actor of actors) {
      if (!actor) continue;
      const x = actor.position.x;
      const z = actor.position.z;
      // 门口两侧都算，但路边的角色不会触发
      if (z > -2.6 && z < -0.55 && x > TRIGGER_MIN && x < TRIGGER_MAX) return true;
    }
    return false;
  }

  function apply() {
    panelL.position.x = baseL - openT * SLIDE;
    panelR.position.x = baseR + openT * SLIDE;

    const flicker = openT > 0.15 ? 0.75 + Math.sin(time * 12) * 0.25 : 1;
    lampColor.copy(LAMP_CLOSED).lerp(LAMP_OPEN, openT * flicker);
    sensorLamp.material.color.copy(lampColor);
  }

  apply();

  return {
    get openT() {
      return openT;
    },

    update(dt) {
      time += dt;

      if (actorNearDoor()) {
        closeTimer = 0;
      } else {
        closeTimer += dt;
      }

      const target = actorNearDoor() || closeTimer < CLOSE_DELAY ? 1 : 0;
      const k = 1 - Math.exp(-dt * (target > openT ? 9 : 3));
      openT += (target - openT) * k;

      apply();
    },
  };
}
