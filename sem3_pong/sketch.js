// Variáveis da bola
let xBall = 100; // Eixo inicial X
let yBall = 200; // Eixo inicial Y
let diameter = 20; // Diametro da bola
let radius = diameter / 2; // Raio do círculo

// Velocidade da bola
let xSpeedBall = 5; // Velocidade no eixo X
let ySpeedBall = 5; // Velocidade no eixo Y

// Variáveis da raquete
let xRaket = 5; // Eixo inicial X
let yRaket = 150; // Eixo inicial Y
let widthRaket = 10; // Comprimento da raquete
let heightRaket = 90; // Altura da raquete

// Variáveis da raquete do oponente
let xOpponentRaket = 585; // Eixo inicial X
let yOpponentRaket = 150; // Eixo inicial Y
let yOpponentSpeed;

let hit = false;

// Função predefinida pelo P5 para criação do canvas
function setup() {
  createCanvas(600, 400);
}

// Função predefinida pelo P5 para desenhar no canvas (aqui é onde o jogo ocorre)
function draw() {
  background(0);
  showBall();
  moveBall();
  verifyCollisionBorder();
  showRaket(xRaket, yRaket);
  showRaket(xOpponentRaket, yOpponentRaket);
  moveRaket();
  //verifyCollisionRaket();
  verifyCollisionRaketLib(xRaket, yRaket);
  moveOpponentRaket();
  verifyCollisionRaketLib(xOpponentRaket, yOpponentRaket);
}

// Desenha a bola
function showBall() {
  circle(xBall, yBall, diameter);
}

// Desenha a raquete
function showRaket(x, y) {
  rect(x, y, widthRaket, heightRaket);
}

// Movimenta a bola nos eixos X e Y
function moveBall() {
  xBall += xSpeedBall;
  yBall += ySpeedBall;
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

function moveOpponentRaket() {
  yOpponentSpeed = yBall - yOpponentRaket - widthRaket / 2 - 30;
  yOpponentRaket += yOpponentSpeed;
}

// Lógica para verificar a colisão com as bordas
function verifyCollisionBorder() {
  if (xBall + radius > width || xBall - radius < 0) {
    xSpeedBall *= -1;
  }
  if (yBall + radius > height || yBall - radius < 0) {
    ySpeedBall *= -1;
  }
}

// Lógica para verificar a colisão com a raquete
function verifyCollisionRaket() {
  if (
    xBall - radius < xRaket + widthRaket &&
    yBall - radius < yRaket + heightRaket &&
    yBall + radius > yRaket
  ) {
    xSpeedBall *= -1;
  }
}

// Lógica para verificar a colisão com a raquete (Biblioteca externa)
function verifyCollisionRaketLib(x, y) {
  hit = collideRectCircle(x, y, widthRaket, heightRaket, xBall, yBall, radius);
  if (hit) {
    xSpeedBall *= -1;
  }
}
