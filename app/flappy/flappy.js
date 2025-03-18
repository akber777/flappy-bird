import flappyDownFlap from "../assets/sprites/bluebird-downflap.png";
import flappyUpFlap from "../assets/sprites/bluebird-upflap.png";
import Engine from "../config/engine";

class Flappy extends Engine {
  flappyImages = [];
  currentFlappyIndex = 0;
  flappyY = 200;
  flappyBody = null;

  drawFlappy() {
    this.updateEngine();
    for (let i = 0; i < 2; i++) {
      const { x, y } = this.flappyBody.position;
      this.p5.image(this.flappyImages[this.currentFlappyIndex], x, y);
    }

  }

  init() {
    const down = this.p5.loadImage(flappyDownFlap);
    const up = this.p5.loadImage(flappyUpFlap);

    this.flappyBody = Matter.Bodies.rectangle(600, 0, 34, 24, {
      isStatic: false,
      restitution: 0.5,
      density: 0.002,
      frictionAir: 0.07,
    });


    this.flappyImages.push(down);
    this.flappyImages.push(up);
  }

  flap() {
    this.matter.Body.applyForce(this.flappyBody, this.flappyBody.position, {
      x: 0.002,
      y: -0.05,
    });
  }
}

export default Flappy;
