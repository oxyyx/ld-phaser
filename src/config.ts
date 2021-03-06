import { MainScene } from './scenes/main-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'ld-phaser',
  version: '1.0',
  width: 1280,
  height: 720,
  backgroundColor: 0x222222,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 }
    }
  },
  parent: 'game-container',
  scene: [MainScene]
};