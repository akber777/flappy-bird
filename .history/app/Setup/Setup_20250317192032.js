import P5Config from "../config/p5Config";

class Setup extends P5Config {
  constructor() {
    super();
    this.p5 = this.getInstance();
  }
  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, 600);
    this.p5.frameRate(60);
    this.p5.background(220);
  }

  draw() {
    this.p5.background(220);
  }

  preload() {
    console.log(loadImage(path, [successCallback], [failureCallback]))
  }
}

export default Setup;
