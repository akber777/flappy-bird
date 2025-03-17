import P5Manage from "../config/P5Manage.js";
import bgImage from "../../assets/sprites/background-day.png";

class Setup extends P5Manage {
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
    console.log("ok");
  }
}

export default Setup;
