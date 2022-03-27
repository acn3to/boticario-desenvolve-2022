// Código do carro

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let carSpeeds = [2, 2.5, 3, 5, 3.3, 2.3];
let carWidth = 50;
let carHeight = 40;

// Exibe o carro com seus devidos parâmetros
function showCar() {
  for (let i = 0; i < carImages.length; i++) {
    image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
  }
}

// Movimenta o carro
function moveCar() {
  for (let i = 0; i < carImages.length; i++) {
    xCars[i] -= carSpeeds[i];
  }
}

// Retorna o carro para posição inicial
function returnInitialPositionCar() {
  for (let i = 0; i < carImages.length; i++) {
    if (usedWholeScreen(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function usedWholeScreen(xCar) {
  return xCar < -50;
}
