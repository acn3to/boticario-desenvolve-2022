// Código do ator

let hit = false;

// Variávies do ator
let yActor = 366;
let xActor = 100;

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
    yActor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += 3;
  }
}

function verifyCollision() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
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
      collided();
    }
  }
}

function collided() {
  yActor = 366;
}
