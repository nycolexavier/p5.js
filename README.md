# 📚 Projetos utlizando a [Biblioteca p5.js](https://p5js.org/) 

## Módulo 1 😀

```js
    function setup() {
    createCanvas(windowWidth, windowHeight);
    background(123, 224, 173);
  }
  
    function draw() {
  
    noStroke();
    fill(255, 50);
    circle(mouseX, mouseY, 25);    
  }

    function mousePressed() {
    background(123, 224, 173)
}
```
### Cor e formas 🎨
```javascript
    function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(115, 171, 132);
  
    rectMode(CENTER);

    fill(0, 255, 100);
    stroke(0, 255, 0);
    rect(200, 150, 150, 150);

    fill(121, 199, 197, 255);
    noStroke();
    ellipse(150, 250, 100, 75); 
  }
```
## Módulo 2 😁
### Variáveis ✨
```javascript
// Variável global
  let circleX = 100;
// Tamanho da tela
  function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Quando clico no mouse, ele vai para x = 0
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
```
### Movimento 🏃‍♀️
```javascript
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
    fill(0, 255, 0, 10);
    square(200, 150, squareSize);
}
```
### Preenchimento ⌛
```javascript
let x, y, r, g, b;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    r = random(255);
    g = 0;
    b = random(255);
    x = random(width);
    y = random(height);
    noStroke();
    fill(r, g, b, 100);
    circle(x, y, 24)
}
```
### Mudança de cor 🖍️
```javascript
let squareSize;
let lineWidth;

var r = 0;
var b = 255;

  function setup() {
    createCanvas (windowWidth, windowHeight);
}

  function draw() {
    // background
    r = map(mouseX, 0, 600, 0, 255)
    b = map(mouseX, 0, 600, 255, 0)
    background(r, 0, b);
    //ellipse
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}
```
### Gráficos ⭐
```javascript
let x = 200;
let y = 200;
let extracanvas;

function setup() {
    createCanvas(windowWidth, windowHeight);
    extraCanvas = createGraphics(windowWidth, windowHeight);
    extraCanvas.clear();
    background(0);
}

function draw() {
    image(extraCanvas, 0, 0);

    // No trails!
    background(0);
    x += random(-5, 5);
    y += random(-5, 5);

    // trails
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    extraCanvas.ellipse(starX, starY, 10, 10);

    image(extraCanvas, 0, 0);
    fill(255, 0, 0);
    stroke(255);
    rectMode(CENTER);
    rect(x, y, 20, 20);
}
```
## Módulo 3 😄
### Declarações condicionais ( if ) 🧮
```javascript
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

### Declarações condiconais ( if and else if) 🧮
```javascript
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
```
### Declarações condicioanis ( && ) 🧮
```javascript
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
```

### Bola em movimento ( if ) ⚽
``` javascript
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
  
  if (ball.x > width || ball.x < 0 ) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0 ) {
    ball.yspeed = ball.yspeed * -1;
  }
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
```

### Variáveis booleanas 🔄
```javascript
var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(0, 255, 0);
  } else {
    background(0);
  }
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
  fill(255, 0, 200)
}
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
  }
}
```
## Módulo 4 🙂
### While e Loops 🧵
```javascript
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
```
### Aninhando os loops
```javascript
function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(220);
    strokeWeight(4);
    stroke(255);
    
    for (var x = 0; x <= mouseX; x += 50) {
      for (var y = 0; y <= height; y += 50 ) {
        fill(random(255), 0, random(255));
        ellipse(x, y, 25, 25)
      }
    }
}
```
## Módulo 5 🤓
### Functions ⚡
```javacript
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  move();
  bounce();
  display();
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0 ) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0 ) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24); 
}
```
### Function Parameters and Arguments
```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  
  lollipop(100, 100, 50);
  lollipop(300, 200, 50);
}

function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 250);
  
  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}
```

## 💡 Definições importantes: 

* Variavel global é aquela que está disponível para todo o códido
* Variável local: aquela que é colocada dentro de uma função
* Tamanho da tela: createCanvas ( )
* Cor do fundo: background ( )
* stroke ( )
* noStroke ( )
* strokeWeight ( )
* Borda: fill ( ) 
* circle ( )
* Fornece um valor aleatório entre um intervalo: Random ( )
* Desenha um ellipse na tela: ellipse ( )
* Clicar no mouse: function mousePressed ( )
* Tamanho da tela: createCanvas ( )
* Preenchimento: fill ( )
* windowWidth: preenche toda a largura
* windowHeight: preenche toda a altura



Feito com 💖 por [Nycole](https://github.com/nycolexavier:)

(repositório em desenvolvimento)
 
