import P5Config from "../config/p5Config";
import bgDayImage from "../assets/sprites/background-night.png";
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

    let lastX = this.p5.windowWidth; // İlk boru ekranın sağından başlar
    for (let i = 0; i < this.pipesLength; i++) {
      let gap = this.p5.random(300, 800); // Borular arasındaki rastgele mesafe
      lastX += gap; // Yeni borunun başlangıç konumu
      this.pipes.push(lastX);
    }
  }

  draw() {
    this.p5.background("#000");

    this.p5.image(
      this.bgImg,
      0,
      -400,
      this.p5.windowWidth,
      this.p5.windowHeight + 400
    );

    for (let i = 0; i < this.pipes.length; i++) {
      let pipeX = this.pipes[i] - this.p5.frameCount * this.speed;

      // Boruyu çiz
      this.p5.image(
        this.pipeImg,
        pipeX,
        this.p5.windowHeight - this.pipeImg.height
      );
    }
  }

  rePositionPipe(i) {
    return this.pipes[i]; // Boruların başlangıç pozisyonlarını `setup()` içinde belirledik
  }

  preload() {
    this.bgImg = this.p5.loadImage(bgDayImage);
    this.pipeImg = this.p5.loadImage(pipeImage);
  }
}

export default Setup;
