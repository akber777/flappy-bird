import Setup from "./setup/setup";
import listener from "./listener/listener";
import p5 from "p5";

const scene = new Setup();

new p5((p) => {
  p.setup = function () {
    listener.emit("p5", p);
    scene.init(p);
  };
  p.draw = function () {
    p.frameRate(120);
    scene.createScence();
  };
  p.preload = function () {
    listener.emit("p5", p);
    scene.loadImages();
  };
  p.keyPressed = function () {
    scene.keyPressed();
  };
});
