import bgDayImage from "../assets/sprites//background-night.png";
import pipeImage from "../assets/sprites/pipe-green.png";
import pipeUpImage from "../assets/sprites/pipe-red.png";
import Flappy from "../flappy/flappy";
import Engine from "../config/engine";

class Setup extends Engine {
  bgImg = null;
  pipeImg = null;
  pipeUpImg = null;
  pipesDown = [];
  pipesUp = [];
  pipesLength = 200;
  speed = 2;
  flappy = null;
  ground = null
  pipesUpPos = null

  constructor() {
    super();
    this.flappy = new Flappy();
  }

  init() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, 600);
    this.p5.frameRate(90);
    this.p5.background(220);


    this.ground = this.matter.Bodies.rectangle(
      this.p5.windowWidth / 2,
      this.p5.windowHeight - 50,
      this.p5.windowWidth,
      100,
      { isStatic: true }
    );

    for (let i = 0; i < this.pipesLength; i++) {
      const pipeDown = this.matter.Bodies.rectangle(this.rePositionPipe(i), this.p5.windowHeight - 250, 50, 300, { isStatic: true })
      const pipeUp = this.matter.Bodies.rectangle(this.rePositionPipe(i), this.p5.random(100, 300), 50, 300, { isStatic: true })
      this.pipesDown.push(pipeDown);
      this.pipesUp.push(pipeUp)
    }
    this.matter.Composite.add(this.world, [this.ground, this.flappy.flappyBody, ...this.pipesDown, ...this.pipesUp]);
  }


  createPipe() {
    const pipesDown = this.pipesDown;
    const pipesUp = this.pipesUp;
    for (let i = 0; i < pipesDown.length; i++) {
      this.p5.push();
      this.matter.Body.setPosition(pipesDown[i], {
        x: pipesDown[i].position.x - this.speed,
        y: pipesDown[i].position.y
      });

      this.p5.imageMode(this.p5.CENTER);
      this.p5.image(this.pipeImg, pipesDown[i].position.x, this.p5.windowHeight - 250, 50, 300);

      const collides = this.matter.Collision.collides(this.flappy.flappyBody, pipesDown[i])
      if (collides) {
        this.gameOver()
      }

      this.p5.pop();
    }


    for (let i = 0; i < pipesUp.length; i++) {
      this.p5.push();
      this.matter.Body.setPosition(pipesUp[i], {
        x: pipesUp[i].position.x - this.speed,
        y: pipesUp[i].position.y
      });
      this.p5.imageMode(this.p5.CENTER);
      this.p5.image(this.pipeUpImg, pipesUp[i].position.x, pipesUp[i].position.y, 50, 300);

      const collides = this.matter.Collision.collides(this.flappy.flappyBody, pipesUp[i])
      if (collides) {
        this.gameOver()
      }
      this.p5.pop();

    }

  }

  createScence() {
    this.updateEngine();
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

    this.createPipe()

    this.p5.fill(150);
    this.p5.noStroke();
    this.p5.rect(
      this.ground.position.x - this.p5.windowWidth / 2,
      this.ground.position.y - 50,
      this.p5.windowWidth,
      100
    );

    this.flappy.drawFlappy();

    const collised = this.matter.Collision.collides(this.flappy.flappyBody, this.ground);

    if (collised) {
      this.gameOver()
    }

  }

  gameOver() {
    this.p5.noLoop()
    this.p5.textSize(100);
    const textWidth = this.p5.textWidth("Wings Are Tired")
    this.p5.fill("#BF3131")
    this.p5.text("Wings Are Tired", this.p5.windowWidth / 2 - textWidth / 2, this.p5.windowHeight / 2)
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

  loadImages() {
    this.bgImg = this.p5.loadImage(bgDayImage);
    this.pipeImg = this.p5.loadImage(pipeImage);
    this.pipeUpImg = this.p5.loadImage(pipeUpImage);
    this.flappy.init();
  }

  keyPressed() {
    this.flappy.flap();
  }
}

export default Setup;
