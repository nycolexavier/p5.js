// Flow / Variables
// Code! Programming with p5.javascript


let circleX = 100; // variável global é aquela que está disponível para todo o código

// tamanho da tela
function setup() {
    createCanvas(400,300);
}

// quando clico no mouse, ele vai para x = 0
function mousePressed() {
    circleX = 0;
}


function draw() {
    background(0);
    noStroke();
    fill(255);
    circle(circleX, 150, 64)
    circleX += 5;
}

// Lidando como uma variável
