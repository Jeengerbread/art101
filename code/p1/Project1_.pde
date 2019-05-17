char currentkey = '1';
color bgc = color(255);

void setup() {
  size(400,400);
  background(255);
  smooth();
}

void draw() {
// triggering the clear_print function
if(keyPressed) {
clear_print(); 
}
// triggering the newkeychoice
if(mousePressed) {
  drawChoice(); 
}
}
void drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
 
   
 // key global variable contains whatever key was last pressed 
 char currentkey = key;
   
switch(currentkey) {
case '1': 
  create_bubbles(color(random(255), random(255), random(255)),mouseX, mouseY); // raindbow bubbles
  break;
case '2':
  create_bubbles(color(0,255,0), mouseX, mouseY); // green bubbles
  break;
case '3':
  bubble_explosion();
  break;
case '4': 
  println("2");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
  break;
default:             // Default executes if the case labels
  println("None");   // don't match the switch parameter
  break;   
}
}

void eraser(color k,int lx,int ly,int sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz); 
}

void create_bubbles(color k, int lx, int ly){
  fill(k);
  float size = random(30);
  ellipse(lx, ly, size, size);
}

void bubble_explosion(){
  for (int i= 0; i < 50; i++) {
        fill(color(random(255), random(255), random(255)));
        float size = random(45);
        ellipse(random(400), random(400), size, size);
      }
}

void clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } else if (key == 'p' || key == 'P') {
     saveFrame("x_xxx_####.png");
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
     delay(500);
  }
}
