function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  var x = 0;
  while ( x <= width) {
    fill(0, 200, 255)
    ellipse(x, 100, 25, 25);
    x = x + 50;
  }
  
  // for: 
  // os dois exemplos são escritos diferentes mas tem o mesmo resultado!
  
  for (var x = 0; x <= width; x += 50) {
    fill(255, 0, 200)
    ellipse(x, 300, 25, 25);
  }
}