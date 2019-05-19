// JavaScript Document
let yeet;
let boing;
let horn;
var mgr;

function preload() {
  yeet = loadSound('../../sounds/yeet.mp3');
  horn = loadSound('../../sounds/horn.mp3');
}

function setup() {
	createCanvas(800, 800);
	background(255);
	
	mgr = new SceneManager();

	// Preload scenes. Preloading is normally optional
	// ... but needed if showNextScene() is used.
	mgr.addScene ( Animation1 );
	mgr.addScene ( Animation2 );

	mgr.showNextScene();
}

function draw() {
	mgr.draw();
}

function keyPressed()
{
    switch(key)
    {
        case '1':
            mgr.showScene( Animation1 );
            break;
        case '2':
            mgr.showScene( Animation2 );
            break;
    }
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}

function mousePressed() {
	mgr.handleEvent("mousePressed");
}

function Animation1()
{
    
    this.enter = function()
    {
        background("teal");
    }
	
	this.draw = function ()
	{
		drawSprites();
	}

    this.keyPressed = function()
    {
        var s = createSprite(mouseX, mouseY, 30, 30);
  		s.velocity.x = random(-3, 3);
  		s.velocity.y = random(-3, 3);
  		yeet.play();
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

function Animation2()
{
    this.y = 0;
    
    this.draw = function()
    {
        background("red");

        line(0, this.y, width, this.y);
        this.y++;

        if ( this.y > height )
            this.y = 0;
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}