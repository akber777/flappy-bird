import P5Config from "../config/p5Config";
import bgDayImage from "../assets/sprites//background-night.png";
import pipeImage from "../assets/sprites/pipe-green.png";

class Setup extends P5Config {
  bgImg = null;
  pipeImg = null;
  pipes = [];
  pipesLength = 200;
  speed = 1;

  constructor() {
    super();
    this.p5 = this.getInstance();
  }
  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, 600);
    this.p5.frameRate(90);
    this.p5.background(220);

    for (let i = 0; i < this.pipesLength; i++) {
      this.pipes.push(i);
    }
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

    for (let i = 0; i < this.pipes.length; i++) {
      let pipeX = this.rePositionPipe(i) * 1 - this.p5.frameCount * this.speed;

      this.p5.image(
        this.pipeImg,
        pipeX,
        this.p5.windowHeight - this.pipeImg.height
      );
    }
  }

  rePositionPipe(i) {
    if (i === 0) {
      return this.p5.windowWidth;
    } else if (i === 1) {
      return this.p5.windowWidth + 600;
    } else if (i === 2) {
      return this.p5.windowWidth + 1200;
    }

    return i * 800;
  }

  preload() {
    this.bgImg = this.p5.loadImage(bgDayImage);
    this.pipeImg = this.p5.loadImage(pipeImage);
  }
}

export default Setup;
