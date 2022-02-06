// Função predefinida pelo P5 para criação do canvas
function setup() {
  createCanvas(500, 400);
}

// Função predefinida pelo P5 para desenhar no canvas (aqui é onde o jogo ocorre)
function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnInitialPositionCar();
}
