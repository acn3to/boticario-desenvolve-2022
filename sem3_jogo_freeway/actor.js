// Código do ator

let hit = false;
let myPoints = 0;

// Variávies do ator
let yActor = 366;
let xActor = 85;

// Exibe o ator com seus devidos parâmetros
function showActor() {
  image(actorImage, xActor, yActor, 30, 30);
}

// Movimenta o ator
function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (doesMove()) yActor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += 3;
  }
}

// Verifica colisão
function verifyCollision() {
  for (let i = 0; i < carImages.length; i++) {
    hit = collideRectCircle(
      xCars[i],
      yCars[i],
      carWidth,
      carHeight,
      xActor,
      yActor,
      15
    );
    if (hit) {
      returnInitialPositionActor();
      if (pointsOverZero()) {
        myPoints -= 1;
      }
    }
  }
}

// Retorna o ator para posição inicial
function returnInitialPositionActor() {
  yActor = 366;
}

// Exibe pontuação
function showScore() {
  fill(255, 240, 0);
  textAlign(CENTER);
  textSize(25);
  text(myPoints, width / 5, 27);
}

// Marca ponto
function score() {
  if (yActor < 15) {
    myPoints += 1;
    returnInitialPositionActor();
  }
}

function pointsOverZero() {
  return myPoints > 0;
}

function doesMove() {
  return yActor < 366;
}
