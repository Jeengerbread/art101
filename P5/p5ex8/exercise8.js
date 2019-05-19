// JavaScript Document
let yeet;
let boing;
let horn;

function preload() {
  yeet = loadSound('../../sounds/yeet.mp3');
  horn = loadSound('../../sounds/horn.mp3');
}

function setup() {
  createCanvas(710, 200);
  background(0, 255, 0);
}

function mousePressed() {
  if (yeet.isPlaying()) {
    // .isPlaying() returns a boolean
    yeet.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    yeet.play();
    background(0, 255, 0);
  }
}