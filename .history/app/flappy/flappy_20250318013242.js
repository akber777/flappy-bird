import P5Config from "../config/p5Config";
import flappyBird from "../assets/sprites/bluebird-downflap.png";

class Flappy extends P5Config {
  flappyImg = null;

  constructor() {
    super();
    this.p5 = this.getInstance();
  }

  preload() {
    this.flappyImg = loadImage(flappyBird);
  }
}

export default Flappy;
