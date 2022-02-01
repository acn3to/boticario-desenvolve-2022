let xBall = 100; // Eixo inicial X
let yBall = 200; // Eixo inicial Y
let diameter = 20; // Diametro da bola
let speedXBall = 5; // Velocidade no eixo X
let speedYBall = 5; // Velocidade no eixo Y

// Função predefinida pelo P5 para criação do canvas
function setup() {
  createCanvas(600, 400);
}

// Função predefinida pelo P5 para desenhar no canvas
function draw() {
  background(0);
  circle(xBall, yBall, diameter); // Desenhando a bola passando os devidos parametros
  xBall += speedXBall; // Determinando a velocidade no eixo X
  yBall += speedYBall; // Determinando a velocidade no eixo Y

  // Aplicando a lógica para que a bola bata na parede e retorne
  if (xBall > width || xBall < 0) {
    speedXBall *= -1;
  }

  if (yBall > height || yBall < 0) {
    speedYBall *= -1;
  }
}
