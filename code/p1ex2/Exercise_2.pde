int value = 0;
PImage b;
PFont f; 

void setup() {
  size(800, 800);
  rectMode(CENTER);
  noStroke();
  
  // font stuff
  // first, Create the font
  printArray(PFont.list());
  //load font
  f = createFont("Georgia", 24);
  //set the font for drawing
  textFont(f);
  // set color of text
  fill(0, 255, 0);
  //draw out text
  text("Green is good", 100, 100);
  
  //image stuff 
  // Images must be in the "data" directory to load correctly 
  b = loadImage("RUR.jpg"); 
  image(b, 0, 0, width, height);
}
void draw() {
  background(255-value); 
  fill(value);
  rect(200, 200, 50, 50);
  ellipse(width/2, height/2, 100, 100);
  
  for ( int value = 0; value < width; value += 32 ) {
    fill(mouseX, mouseY, 100, 100);
    rect(value, height/2, 20, height);
    image(b, mouseX, mouseY);
  } 
  
  value++;
  
  if ( value > 255) {
    value = 0;
  }
  
  fill(value, 204);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(value, 204);
  
  fill(20, 10);
  rect(0, 0, width, height);
  StevesRanDots();
  
  fill(50, 30);
  rect(0, 0, width, height);
  textAlign(RIGHT);
  myDrawType("First Name (right)", mouseX, 100);
  textAlign(CENTER);
  myDrawType("Middle Name (center)", mouseX, 200);
  textAlign(LEFT);
  myDrawType("Last Name (left)", mouseX, 300);
  
  sdSign1("Open for Business", 30,100);
      
  sdSign2("Closed for Lunch",30,300);
} 

void mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

void keyPressed() { 

  if ( key == 'b' || key == 'B' ) { 
    // example of toggle logic 
    if (value == 0) { 
      value = 255;
    } else { 
      value = 0;
    }
  }
}

void StevesRanDots() {

  float r = random(50);
  float rloop = random(20);
  for (int i = 0; i < r; i++) {
    fill(r+150, rloop+10, random(150));
    ellipse(random(width), random(height), r+10, r+10);
  }
}

void myDrawType(String s, int x, int y ) {
  fill(255, 0, 0);
  text(s, x, y);
  fill(200);
  rect(x, y, 5, 5);
}

void sdSign1(String ss , int locx, int loy) {
       fill(120,50);
       rect(locx,loy,300,50);
       fill(34);
       rect(locx-10,loy-10,300,50);
       color k = color(0,255,0);
       sdDrawText(ss,locx+5,loy+20,k);
       sdRanGrcs(locx,loy,color(200,255,0,30));
     }
     
void sdSign2(String ss,int locx, int loy) {
       fill(20,50);
       rect(locx,loy,300,50);
       fill(100);
       rect(locx-10,loy-10,300,50);
       color k = color(255,0,0);
       sdDrawText(ss,locx+5,loy+20,k);
       sdRanGrcs(locx+300,loy,color(255,0,0,30));
     }
     
void sdDrawText(String s, int lx, int ly, color c ) {
      fill(c);
      text(s, lx, ly,20);
    }
    
void sdRanGrcs(int lx, int ly, color c) {
      fill(c);
      float r = random(50); 
      
      for (int i= 0; i < 30; i++) {
        ellipse(lx-r,ly-r,10,10);
      }
       
    }
