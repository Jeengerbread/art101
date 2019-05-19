// JavaScript Document
var count = 15;
var posX = new Array(count);
var posY = new Array(count);
var speedX = new Array(count);
var speedY = new Array(count);
var sizeW = new Array(count);
var sizeH = new Array(count);
var colors = new Array(count);
var red = new Array(count);
var green = new Array(count);
var blue = new Array(count);
var shape = new Array(count);

function setup() {
  createCanvas(600, 600);
  for (var i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colors[i] = int(random(0, 255));
    red[i] = int(random(0, 255));
    green[i] = int(random(0, 255));
    blue[i] = int(random(0, 255));
    shape[i] = int(random(0,3));
  }
}

function draw() {
  background(155);
  fill(255);
  rect(40, 40, width-80, height-80);
  for (var i = 0; i < posX.length; i++) {
    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    //draw all balls
    fill(red[i], green[i], blue[i]);
    if (shape[i] == 0) {
      ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);
    }
    if (shape[i] == 1) {
      rect(posX[i], posY[i], sizeW[i], sizeW[i]);
    }
    if (shape[i] == 2) {
      ellipse(posX[i], posY[i], random(25), random(25));
    }
    //check boundaries for all balls

    if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }
  }
}