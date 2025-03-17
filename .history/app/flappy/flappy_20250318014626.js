import P5Config from "../config/p5Config";
import flappyBird from "../assets/sprites/bluebird-downflap.png";

class Flappy extends P5Config {
  flappyImg = null;

  constructor() {
    super();
  }

  init() {
    return this.p5.loadImage(flappyBird);
  }
}

export default Flappy;
