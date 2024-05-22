import React, { useRef } from 'react';
import p5 from 'p5';

function Monster() {
  const p5Ref = useRef();

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(0);

      //Draw monster's head
      p.fill(255, 0, 0); // Red
      p.ellipse(p.width / 2, p.height / 4, 100, 100);

      //Draw eyes
      p.fill(0); 


export default Monster;
