import React from "react";
import { useState } from "react";
import Sketch from "react-p5";

//let x = 50;
export default function TimeFrame({
  x,
  setX,
  timeFramesCount,
  setTimeFramesCount,
  passedFunction,
  width,
  height,
}) {
  //  const [width, setWidth] = useState(window.screen.width);
  // const [height, setHeight] = useState(window.screen.height);
  const [flipflop, setFlipflop] = useState(false);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
    p5.fill(0, 0, 0, 0);
    p5.strokeWeight(1);
    p5.stroke(255, 255, 255);
    p5.describe(
      "Camera orbits around a box when mouse is hold-clicked & then moved."
    );
  };
  const funA = (p5, x) => {
    p5.ellipse(Math.cos(x / 22.4) * (width / 6), 0, 10, 10);
    p5.ellipse(0, Math.sin(x / 22.4) * (height / 4), 10, 10);
  };
  const funB = (p5, i) => {
    let x = i;
    let y = i;
    if (parseInt((x / (width / 4)) % 2) == 1) {
      x = width / 4 - (x % (width / 4));
    } else x = x % (width / 4);

    if (parseInt((y / (height / 4)) % 2) == 1) {
      y = height / 4 - (y % (height / 4));
    } else y = y % (height / 4);

    p5.ellipse(x, y, 10, 10);
    p5.ellipse(width / 4 - x, height / 4 - y, 10, 10);
  };
  const draw = (p5) => {
    p5.background(0);

    p5.orbitControl();
    p5.push();
    p5.rotateX(p5.PI / 2);
    for (let x = p5.frameCount; x < p5.frameCount + timeFramesCount; x++) {
      p5.translate(0, 0, 5);
      try {
        eval(passedFunction);
      } catch (e) {
        console.log("got errorrr", e);
      }
      p5.noFill();
      p5.strokeWeight(1);
      p5.stroke(255, 255, 255);
      p5.box(width, height, 5);
    }
    p5.pop();
    setX(x + 1);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}
