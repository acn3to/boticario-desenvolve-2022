// Código do carro

let yCars = [40, 96, 150];
let carSpeeds = [2, 2.2, 3];
let xCars = [600, 600, 600];

// Exibe o carro com seus devidos parâmetros
function showCar() {
  image(carImage, xCars[0], yCars[0], 50, 40);
  image(carImage2, xCars[1], yCars[1], 50, 40);
  image(carImage3, xCars[2], yCars[2], 50, 40);
}

// Movimenta o carro
function moveCar() {
  xCars[0] -= carSpeeds[0];
  xCars[1] -= carSpeeds[1];
  xCars[2] -= carSpeeds[2];
}

// Retorna o carro para posição inicial
function returnInitialPositionCar() {
  if (xCars[0] < -50) {
    xCars[0] = 600;
  }
  if (xCars[1] < -50) {
    xCars[1] = 600;
  }
  if (xCars[2] < -50) {
    xCars[2] = 600;
  }
}
