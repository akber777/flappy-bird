import listener from "../listener/listener";


class Engine {
  constructor() {
    this.p5 = null;
    this.matter = Matter;
    this.engine = this.matter.Engine.create();
    this.world = this.engine.world;

    listener.on("p5", (p) => {
      this.p5 = p;
    });
  }

  updateEngine() {
    this.matter.Engine.update(this.engine);
  }
}

export default Engine;
