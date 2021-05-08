# 📚 Projetos utlizando a [Biblioteca p5.js](https://p5js.org/) 

## Lidando com figuras 2D

### Animação 


&nbsp;

#### Código dessa animação 👇
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



## 💡 Definições importantes: 

* createCanvas ( )
* background ( )
* noStroke ( )
* Cor: fill ( ) 
* circle ( )
* function mousePressed ( )
* Tamanho da tela: createCanvas ( )


Feito com 💖 por [Nycole](https://github.com/nycolexavier:)

 
