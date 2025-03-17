class Scene {

    constructor(p5Instance) {
        this.p5Instance = p5Instance;
    }


    setup() {
        new this.p5Instance((p) => {
            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
            }
        })
    }

    draw() {
      

    }
}

export default Scene;

