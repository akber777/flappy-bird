import P5Config from "../config/p5Config";
import bgDayImage from "../assets/sprites/background-day.png";
import pipeImage from "../assets/sprites/background-day.png";

class Setup extends P5Config {
  bgImg = null;
  pipeImg = null;
  pipes = [];

  constructor() {
    super();
    this.p5 = this.getInstance();
  }
  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, 600);
    this.p5.frameRate(90);
    this.p5.background(220);
  }

  draw() {
    this.p5.background("#000");
    for (let i = 0; i < 20; i++) {
      this.p5.image(
        this.bgImg,
        0,
        -400,
        this.p5.windowWidth,
        this.p5.windowHeight + 400
      );
    }
  }

  preload() {
    this.bgImg = this.p5.loadImage(bgDayImage);
    this.pipeImg = this.p5.loadImage(pipeImage);
  }
}

export default Setup;
