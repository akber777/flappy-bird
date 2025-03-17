class P5Config {
  constructor() {
    this.p5Instance = null;
  }

  getInstance() {
    if (!this.p5Instance) {
      this.p5Instance = new p5((p) => {
        p.setup = () => this.setup();
        p.draw = () => this.draw();
        p.keyPressed = () => this.keyPressed();
        p.mousePressed = () => this.mousePressed();
        p.preload = () => this.preload();
      });
    }
    return this.p5Instance;
  }

  setup() {}
  draw() {}
  keyPressed() {}
  mousePressed() {}
  preload() {}
}

export default P5Config;
