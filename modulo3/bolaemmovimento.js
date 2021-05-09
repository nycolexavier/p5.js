var x = 0;
var speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);
  
  if (x > width) {
    speed = -3;
  }
  x = x + speed 
}

/// colocar a bola de cima para baixo, mudando cor e direção