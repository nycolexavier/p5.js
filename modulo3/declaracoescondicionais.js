function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();
  
    if(mouseX > 300){
      fill(255, 0, 200);
    }
  
    ellipse(300, 200, 100, 100);
}

// mudar a forma quando atingir um certo número para outra forma geométrica

