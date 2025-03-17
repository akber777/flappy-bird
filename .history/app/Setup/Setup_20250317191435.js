import P5Manage from "../config/P5Manage.js";
import bgImage from "../../assets/sprites/background-day.png";

class Setup extends P5Manage {
  constructor() {
    super();
    this.p5 = this.getInstance();
  }
  setup() {
   
  }

  draw() {
    this.p5.background(220);
    dffwe
  }

  preload() {
    console.log(bgImage);
  }
}

export default Setup;
