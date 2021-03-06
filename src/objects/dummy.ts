import { IImageConstructor } from '../interfaces/image.interface';

export class Dummy extends Phaser.GameObjects.Image {
  body: Phaser.Physics.Arcade.Body;

  constructor(dummy: IImageConstructor) {
    super(dummy.scene, dummy.x, dummy.y, dummy.texture, dummy.frame);

    this.initSprite();
    this.initPhysics();
    this.scene.add.existing(this);
  }

  private initSprite() {
    this.setScale(1);
  }

  private initPhysics() {
    this.scene.physics.world.enable(this);

    this.body.setVelocity(250, 250);
    this.body.setBounce(1, 1);
    this.body.setCollideWorldBounds(true);
  }
}