// condiconais relacionais
    // if e else if
    function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
    function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    
    if(mouseX > 250){
      ellipse(300, 200, 100, 100);
    } else if (mouseX > 150) {
      rect(300, 200, 100, 100);
    } else if (mouseX > 50) {
      line(0, 0, width, height);
    } else {
      point(300, 200);
    }
  }

    // AND ( && )

    function setup() {
        createCanvas(600, 400);
      }
      
      function draw() {
        background(0);
        stroke(255);
        strokeWeight(4);
        noFill();
        if (mouseX > 300 && mouseX < 400){
          fill(255, 0, 200);
        }
        rect(300, 200, 100, 100);
    }

    // OR ( || )

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
      
      if (x > width || x < 0 ) {
        speed = speed * -1;
      }
      x = x + speed 
    }