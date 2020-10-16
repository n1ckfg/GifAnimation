"use strict";

let gif;
let robots = [];

function preload() {
  gif = loadGif("./images/robot.gif");
}

function setup() {
  createCanvas(960, 540);
}

function draw() {
  background(127);

  if (mouseIsPressed) {
  	robots.push(new Robot(mouseX, mouseY, gif));
  }

  for (let i=0; i<robots.length; i++) {
  	robots[i].run();
  }
}

function keyPressed() {
	robots = [];
}

class Robot {

	constructor(_x, _y, _gif) {
		this.x = _x;
		this.y = _y;
		this.gif = _gif;
	}

	run() {
		imageMode(CENTER);
		image(this.gif, this.x, this.y);
	}

}

