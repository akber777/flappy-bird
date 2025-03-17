import flappyBird from "../assets/sprites/bluebird-downflap.png";

class Flappy {
  flappyImg = null;

  constructor() {
    this.p5 = this.getInstance();
  }

  init() {
    return this.p5.loadImage(flappyBird);
  }
}

export default Flappy;
