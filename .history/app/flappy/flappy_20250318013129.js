import P5Config from "../config/p5Config";
// import flappyBird from "../assets/sprites/bluebird-downflap.png";

class Flappy extends P5Config {
  flappy = null;

  constructor() {
    super();
    this.p5 = this.getInstance();
  }

  init() {
    // this.flappy = loadImage(flappyBird);
  }
}

export default Flappy;
