// Variáveis da bola
let xBall = 100; // Eixo inicial X
let yBall = 200; // Eixo inicial Y
let diameter = 20; // Diametro da bola
let radius = diameter / 2; // Raio do círculo

// Variáveis de velocidade da bola
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

// Placar do jogo
let myPoints = 0;
let opponentPoints = 0;

// Variáveis de som do jogo
let hitRaket;
let pointSound;
let soundTrack;

// Carrega os sons do jogo
function preload() {
  soundTrack = loadSound("soundtrack.mp3");
  pointSound = loadSound("scorepoint.mp3");
  hitRaket = loadSound("hitraket.mp3");
}

// Função predefinida pelo P5 para criação do canvas
function setup() {
  createCanvas(600, 400);
  soundTrack.loop();
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
  includeScore();
  scorePoint();
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
// Movimenta a raquete do oponente
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
    hitRaket.play();
  }
}

// Desenha o placar do jogo
function includeScore() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(myPoints, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(opponentPoints, 470, 26);
}

// Marcar ponto
function scorePoint() {
  if (xBall > 590) {
    myPoints += 1;
    pointSound.play();
  }
  if (xBall < 10) {
    opponentPoints += 1;
    pointSound.play();
  }
}
