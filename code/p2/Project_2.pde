ArrayList<Curve> curves = new ArrayList<Curve>();
int timer;

void setup() {
  background(255);
  size(1440,900);
  // noStroke();
  color colour = color(random(255),random(255),random(255));
  curves.add(new Curve(colour, random (1920), random(1080), random(1920), random(1080), mouseX, mouseY));
  println(curves.size());
}

void draw() {
  //frameRate(30);
  for (int i = 0; i < curves.size(); i++) {
    curves.get(i).mmUpdater();
    curves.get(i).mmPaste();
  }
  if (millis() - timer >= 2000) {
    if (curves.size() > 0) {
      curves.remove(0);
    }
    timer = millis();
  }
  saveFrame("one-####.png");
}

void mousePressed() {
  color colour = color(random(255),random(255),random(255));
  curves.add(new Curve(colour, random (1920), random(1080), random(1920), random(1080), mouseX, mouseY));
  println(curves.size());
}

class Curve { 
  color c;
  float cpx1;
  float cpy1;
  float cpx2;
  float cpy2;
  float xpos;
  float ypos;
  float nextx;
  float nexty;

  // The Constructor is defined with arguments.
  Curve(color tempC, float temp_cpx1, float temp_cpy1, float temp_cpx2, float temp_cpy2, float temp_xpos, float temp_ypos) { 
    c = tempC;
    cpx1 = temp_cpx1;
    cpy1 = temp_cpy1;
    cpx2 = temp_cpx2;
    cpy2 = temp_cpy2;
    xpos = temp_xpos;
    ypos = temp_ypos;
    nextx = xpos + random(-50, 50);
    nexty = ypos + random(-50,50);
  }

  void mmUpdater(){
    xpos = xpos + random(-25,25);
    ypos = ypos + random(-25,25);
    nextx = nextx + random(-25,25);
    nexty = nexty + random(-25,25);
  }

  void mmPaste() {
    noFill();
    stroke(c);
    beginShape();
    vertex(xpos, ypos); // first point
    bezierVertex(cpx1+random(-25,25), cpy1+random(-25,25), cpx2+random(-25,25), cpy2+random(-25,25), nextx, nexty);
    endShape();
  }
 
}
