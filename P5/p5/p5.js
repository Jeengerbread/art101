// JavaScript Document
let creepySound;
let thunderSound;
let rainSound;
let bandSound;

let forestVid;
let soundImg;
let thunderImg;
let rainBackground;

let soundButton;
let thunderButton;

var sprites = [];
var mgr;

function preload() {
  creepySound = loadSound('forest.mp3');
  thunderSound = loadSound('thunder.mp3')
  rainSound = loadSound('rain.mp3');
  bangSound = loadSound('bang.mp3');

  forestVid = createVideo(['https://dl.dropboxusercontent.com/s/f6d7w28jz60zagp/Forest.mp4?dl=1',
                        'https://dl.dropboxusercontent.com/s/ziu0ihow3i1diuo/Forest.webm?dl=1']);
  forestVid.hide();
  soundImg = loadImage('sound.jpg');
  thunderImg = loadImage('thunder.png');
  rainBackground = loadImage('rainbackground.jpg');
}

function setup() {
  createCanvas(1250, windowHeight);

  mgr = new SceneManager();
  mgr.addScene ( welcome);
  mgr.addScene ( rainSounds );
  mgr.addScene ( forest );

  mgr.showScene( welcome );

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
    mgr.showScene( forest );
    break;
    case '3':
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
    rainSound.stop();
    if (soundButton) {
      creepySound.stop();
      soundButton.remove();
    }
    if (thunderButton) {
      thunderSound.stop();
      thunderButton.remove();
    }
  }

  this.draw = function () {
    textAlign(CENTER);
    textSize(width / 20);
    text("Welcome", width / 2, height / 4);
    textSize(24);
    text("Press 1 for a relaxing experience. Press 2 for a creepy experience. Press 3 to return home.",
          width  / 2, height - 100);
    text("Click anywhere for fireworks.", width / 2, height - 50);
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
    bangSound.play();
  }
}

function rainSounds() {
  this.enter = function() {
    forestVid.stop();
    forestVid.hide();
    image(rainBackground, 0, 0, width, height);
    if (soundButton) {
      creepySound.stop();
      soundButton.remove();
    }
    thunderButton = createSprite(width/2, 100, 30, 30)
    thunderButton.mouseActive = true;
    thunderButton.onMousePressed = function() {
      thunderSound.play();
    }
    thunderButton.addImage(thunderImg);
    rainSound.play();
    thunderSound.play();
  }

  this.draw = function () {
    image(rainBackground, 0, 0, width, height);
    drawSprites();
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
    rainSound.stop();
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
    soundButton.addImage(soundImg);
    if (thunderButton) {
      thunderSound.stop();
      thunderButton.remove();
    }
  }

  this.draw = function () {
    image(forestVid,0,0);
    drawSprites();
  }

  this.mousePressed = function() {

  }
}
