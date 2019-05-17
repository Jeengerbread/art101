
Squiggle[] squigglearray = new Squiggle[50];

void setup() {
  size(400,400);
  for (int i = 0; i < squigglearray.length; i++) {
   color colour = color(random(255), random(255), random(255));
   squigglearray[i] = new Squiggle(colour, random(250), random(500), random(4), random(4));
  }
}

void draw() {
  background(255);
  for (int i = 0; i < squigglearray.length; i++) {
  squigglearray[i].mover();
  squigglearray[i].rotater();
  squigglearray[i].display();
  }
}

class Squiggle { 
  color c;
  float xpos;
  float ypos;
  float xspeed;
  float yspeed;
  float xsize;
  float ysize;
 

  Squiggle(color tempC, float tempXpos, float tempYpos, float tempXspeed, float tempYspeed) { 
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
    yspeed = tempYspeed;
    xsize = random(5, 25);
    ysize = random(5, 25);
  }
  
  void mover() {
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;
    if (xpos > width) {
      xspeed = -xspeed;
    }
    if (xpos < 0) {
      xspeed = -xspeed;
    }
    if (ypos > height) {
      yspeed = -yspeed;
    }
    if (ypos < 0) {
      yspeed = -yspeed;
    }
  }
  
  void rotater() {
    translate(width/2, height/2);
    rotate(PI/3.0);
  }
  
  void display() {
    fill(c);
    rect(xpos,ypos,xsize,ysize,10);
  }
}
