import P5Config from "../config/p5Config";
import bgDayImage from "../assets/sprites/background-night.png";
import pipeImage from "../assets/sprites/pipe-green.png";

class Setup extends P5Config {
  bgImg = null;
  pipeImg = null;
  pipes = [];
  pipesLength = 10; // Kaç tane boru olacağını belirler
  speed = 2;

  constructor() {
    super();
    this.p5 = this.getInstance();
  }

  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, 600);
    this.p5.frameRate(90);
    this.p5.background(220);

    // Boruların başlangıç X konumlarını ayarla
    for (let i = 0; i < this.pipesLength; i++) {
      this.pipes.push(this.rePositionPipe(i));
    }
  }

  draw() {
    this.p5.background("#000");

    // Arkaplanı çiz
    this.p5.image(
      this.bgImg,
      0,
      -400,
      this.p5.windowWidth,
      this.p5.windowHeight + 400
    );

    // Boruları hareket ettir ve çiz
    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i] -= this.speed; // Boruları sola hareket ettir

      // Boru ekran dışına çıktıysa, diziden kaldır
      if (this.pipes[i] + this.pipeImg.width < 0) {
        this.pipes.splice(i, 1);
        i--; // Bir eleman kaldırıldığında dizinin boyu azalır, bunu dengelemek için i'yi azalt
        continue;
      }

      // Boruyu çiz
      this.p5.image(
        this.pipeImg,
        this.pipes[i],
        this.p5.windowHeight - this.pipeImg.height
      );
    }
  }

  rePositionPipe(i) {
    return this.p5.windowWidth + i * 400;
  }

  preload() {
    this.bgImg = this.p5.loadImage(bgDayImage);
    this.pipeImg = this.p5.loadImage(pipeImage);
  }
}

export default Setup;
