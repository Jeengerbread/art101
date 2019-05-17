float rand = 0;
String gridName = "Gary";

void setup() {
  size(800, 800);
  background(127);
  noStroke();
  
  background(0, 50, 100);
  Float a = 0.0;
  float inc = TWO_PI/10.0;
  println(" The inc = " + inc);
  stroke(255, 0, 0);
  
  for (int i = 5; i < 95; i += 5) {
    if (i < 35) {
      line( 30, i, 80, i );
    } else {
      line( 20, i, 90, i );
    }
  }
  
  for (int j=0; j < height; j+=20) {
  fill(0);
  rect(0, j, width, 10);
  fill(255);
  rect(j, 0, 10, height);
  
  for (int i=0; i<300; i+=4) {
    line(i, 50, i, 50+sin(a)*40.0);
    println(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;
  }
}
}

void draw() {
  for (int i = 0; i < 200; i += 20) {
    for (int j = 0; j < 200; j += 20) {
      rand = random(255);
      fill(rand);
      rect( i, j, 10, 10 );
      println(gridName + ", now has a fill value of " + rand);
    }
  }
}
