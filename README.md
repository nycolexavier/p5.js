# 📚 Projetos utlizando a [Biblioteca p5.js](https://p5js.org/) 

## Lidando com figuras 2D

### Animação 😀

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


## 💡 Definições importantes: 

* Variavel global é aquela que está disponível para todo o códido
* Tamanho da tela: createCanvas ( )
* Cor do fundo: background ( )
* noStroke ( )
* Cor: fill ( ) 
* circle ( )
* Clicar no mouse: function mousePressed ( )
* Tamanho da tela: createCanvas ( )
* windowWidth: preenche toda a largura
* windowHeight: preenche toda a altura


Feito com 💖 por [Nycole](https://github.com/nycolexavier:)

 
