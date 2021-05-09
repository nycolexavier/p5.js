// Flow / Variables
// Code! Programming with p5.javascript
// variável global é aquela que está disponível para todo o código



let squareSize;
let lineWidth;


// tamanho da tela
function setup() {
    createCanvas(windowWidth, windowHeigth);
    background(100);
}


function draw() {
    lineWidth = random(4, 28);
    squareSize = random(5, 250);

    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(0, 0, 255);
    fill(0, 255, 0, 10)
    square(200, 150, squareSize);
}