// Código do ator

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
