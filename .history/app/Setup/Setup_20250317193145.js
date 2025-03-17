import P5Config from "../config/p5Config";
import bgDayImage from "../assets/sprites/background-day.png";

class Setup extends P5Config {
  bgImage = null;

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
    this.p5.background(220);
    for (let i = 0; i < 20; i++) {
      this.p5.image(
        this.bgImage,
        0,
        -200,
        this.p5.windowWidth,
        this.p5.windowHeight
      );
    }
  }

  preload() {
    this.bgImage = this.p5.loadImage(bgDayImage);
  }
}

export default Setup;
