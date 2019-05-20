// JavaScript Document
let clickSound;
let clackSound;
let hornSound;
let creepySound;
let forestVid;
let soundImg;
let soundButton;
var sprites = [];
var mgr;

function preload() {
  click = loadSound('../../sounds/yeet.mp3');
  clack = loadSound('../../sounds/horn.mp3');
  creepySound = loadSound('../../sounds/forest.aac');
  soundImg = loadImage('sound.jpg');
  forestVid = createVideo(['https://dl.dropboxusercontent.com/s/f6d7w28jz60zagp/Forest.mp4?dl=1',
                        'https://dl.dropboxusercontent.com/s/ziu0ihow3i1diuo/Forest.webm?dl=1']);
  forestVid.hide();
}

function setup() {
  createCanvas(1250, windowHeight);

  mgr = new SceneManager();
  mgr.addScene ( welcome);
  mgr.addScene ( rainSounds );
  mgr.addScene ( asmr );
  mgr.addScene ( forest );

  mgr.showScene( welcome );

  soundButton = createSprite(100, 100, 20, 20);
  soundButton.mouseActive = true;
  soundButton.onMousePressed = function() {
    if (creepySound.isPlaying()) {
      creepySound.pause();
    }
    else {
      creepySound.play();
    }
  }
}

function draw() {
  mgr.draw();
}

function keyPressed() {
  switch(key) {
    case '1':
    mgr.showScene( rainSounds );
    break;
    case '2':
    mgr.showScene( asmr );
    break;
    case '3':
    mgr.showScene( forest );
    break;
    case '4':
    mgr.showScene( welcome );
    break;
  }
  mgr.handleEvent("keyPressed");
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}

function welcome() {
  this.enter = function() {
    background(21, 58, 203);
    forestVid.hide();
    if (soundButton) {
      soundButton.remove();
    }
  }

  this.draw = function () {
    textSize(width / 20);
    text("Welcome", width / 4, height / 2);
    background(21, 58, 203, 30);
    drawSprites();
  }

  this.mousePressed = function() {
    background(18,67,255);
    for (var i = 0; i < 10; i++) {
      sprites[i] = createSprite(mouseX, mouseY, 5, 5);
      sprites[i].velocity.x = random(-5, 5);
      sprites[i].velocity.y = random(-5, 5);
    }
  }
}

function rainSounds() {
  this.enter = function() {

  }

  this.draw = function () {

  }

  this.mousePressed = function() {

  }
}

function asmr() {

  this.draw = function() {

  }

  this.mousePressed = function() {

  }
}

function forest() {
  this.enter = function() {
    if (sprites) {
      for (i=0; i < sprites.length; i++){
        sprites[i].remove();
      }
    }
    forestVid.play();
    soundButton.addImage(soundImg);
    creepySound.loop();
  }

  this.draw = function () {
    image(forestVid,0,0);
    drawSprites();
  }

  this.mousePressed = function() {

  }
}
