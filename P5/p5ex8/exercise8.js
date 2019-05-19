// JavaScript Document
let yeet;
let boing;
let horn;

function preload() {
  yeet = loadSound('../../sounds/yeet.mp3');
  horn = loadSound('../../sounds/horn.mp3');
}

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 30, 30);
  s.velocity.x = random(-3, 3);
  s.velocity.y = random(-3, 3);
  yeet.play();
}