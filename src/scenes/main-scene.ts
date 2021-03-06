import { Dummy } from '../objects/dummy';

export class MainScene extends Phaser.Scene {
  private dummy: Dummy;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload(): void {
    this.load.image('dummy', '../assets/img/dummy.png');
    this.load.image('particle', '../assets/img/particle.png');
  }

  create(): void {
    const particles = this.add.particles('particle');

    const emitter = particles.createEmitter({
      speed: 200,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    this.dummy = new Dummy({
      scene: this,
      x: 50,
      y: 50,
      texture: 'dummy'
    });

    emitter.startFollow(this.dummy);
  }
}