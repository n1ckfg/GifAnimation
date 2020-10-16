"use strict";

let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "dc6zaTOxFJmzC";
let query="rainbow";
let gif = [];
let anim = [];
let ready = false;

function preload() {
  let url = api + "&api_key=" + apiKey + "&q=" + query;
  loadJSON(url, gotData);
}

function setup() {
  createCanvas(640, 480);
  background(127);
}

function draw() {
  if (ready && mouseIsPressed) {
    anim.push(new Anim(mouseX, mouseY, gif[parseInt(random(gif.length))]));
  }

  for (let i=0; i<anim.length; i++) {
    anim[i].run();
    if (anim[i].y > height + 100) anim.splice(i, 1);
  }
}

function gotData(data) {
  for (let i=0; i<data.data.length; i++) {
    let url = data.data[i].images.original.url.split("?")[0];
    console.log(url);
    gif.push(loadGif(url));
  }

  ready = true;
}

class Anim {

  constructor(_x, _y, _gif) {
    this.x = _x;
    this.y = _y;
    this.gif = _gif;
    this.speed = random(0.5, 3);
  }

  update() {
    this.y += this.speed;
  }

  draw() {
    imageMode(CENTER);
    push();
    translate(this.x, this.y);
    scale(0.2, 0.2);
    image(this.gif, 0, 0);
    pop();
  }

  run() {
    this.update();
    this.draw();
  }

}
