import P5Config from "../config/p5Config";

class Flappy extends P5Config {
  constructor() {
    super();
    this.p5 = this.getInstance();
  }

  static init() {
    console.log(this);
  }
}

export default Flappy;
