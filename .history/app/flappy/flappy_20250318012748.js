import P5Config from "../config/p5Config";

class Flappy extends P5Config {
  constructor() {
    super();
  }

  static init() {
    console.log(this.p5);
  }
}

export default Flappy;
