// JavaScript Document
let click;
let clack;
let horn;
var mgr;

function preload() {
  click = loadSound('../../sounds/yeet.mp3');
  clack = loadSound('../../sounds/horn.mp3');
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
            mgr.showScene( rainSounds );
            break;
        case '2':
            mgr.showScene( asmr );
            break;
		case '3':
            mgr.showScene( screams );
            break;
    }
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}

function mousePressed() {
	mgr.handleEvent("mousePressed");
}

function rainSounds()
{
    
    this.enter = function()
    {
        background(21, 58, 203);
		textAlign(CENTER);
		text("Welcome", width / 2, height / 2);
    }
	
	this.draw = function ()
	{
		background(21, 58, 203, 30);
		drawSprites();
	}

    this.keyPressed = function()
    {
        
    }

    this.mousePressed = function()
    {
		background(18,67,255);
		var sprites = [];
		for (var i = 0; i < 10; i++){
			var sprites[i] = createSprite(mouseX, mouseY, 5, 5);
  			sprites[i].velocity.x = random(-5, 5);
  			sprites[i].velocity.y = random(-5, 5);
		}

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
function screams()
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