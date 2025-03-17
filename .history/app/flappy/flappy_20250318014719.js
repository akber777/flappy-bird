import P5Config from "../config/p5Config";
import flappyBird from "../assets/sprites/bluebird-downflap.png";
import Setup from "../Setup/Setup";

class Flappy extends Setup {
  flappyImg = null;

  constructor() {
    super();
    this.p5 = this.getInstance();
  }

  init() {
    return this.p5.loadImage(flappyBird);
  }
}

export default Flappy;
