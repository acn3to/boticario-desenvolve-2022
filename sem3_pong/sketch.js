// Variáveis da bola
let xBall = 100; // Eixo inicial X
let yBall = 200; // Eixo inicial Y
let diameter = 20; // Diametro da bola
let radius = diameter / 2; // Raio do círculo
let speedXBall = 5; // Velocidade no eixo X
let speedYBall = 5; // Velocidade no eixo Y

//Variáveis da raquete
let xRaket = 5; // Eixo inicial X
let yRaket = 150; // Eixo inicial Y
let widthRaket = 10; // Comprimento da raquete
let heightRaket = 90; // Altura da raquete

// Função predefinida pelo P5 para criação do canvas
function setup() {
  createCanvas(600, 400);
}

// Função predefinida pelo P5 para desenhar no canvas
function draw() {
  background(0);
  showBall();
  moveBall();
  verifyCollisionBorder();
  showRaket();
  moveRaket();
}

// Desenha a bola
function showBall() {
  circle(xBall, yBall, diameter);
}

// Desenha a raquete
function showRaket() {
  rect(xRaket, yRaket, widthRaket, heightRaket);
}

// Movimenta a bola nos eixos X e Y
function moveBall() {
  xBall += speedXBall;
  yBall += speedYBall;
}

// Movimenta raquete no eixo Y
function moveRaket() {
  if (keyIsDown(UP_ARROW)) {
    yRaket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaket += 10;
  }
}

// Aplica a lógica para verificar a colisão com as bordas
function verifyCollisionBorder() {
  if (xBall + radius > width || xBall - radius < 0) {
    speedXBall *= -1;
  }
  if (yBall + radius > height || yBall - radius < 0) {
    speedYBall *= -1;
  }
}
