// Código do carro

// Variáveis do carro 1
let xCar = 600;
let yCar = 40;
let carSpeed = 2;

// Variáveis do carro 2
let xCar2 = 600;
let yCar2 = 96;
let carSpeed2 = 2.5;

// Variáveis do carro 3
let xCar3 = 600;
let yCar3 = 150;
let carSpeed3 = 3;

// Exibe o carro com seus devidos parâmetros
function showCar() {
  image(carImage, xCar, yCar, 50, 40);
  image(carImage2, xCar2, yCar2, 50, 40);
  image(carImage3, xCar3, yCar3, 50, 40);
}

// Movimenta o carro
function moveCar() {
  xCar -= carSpeed;
  xCar2 -= carSpeed2;
  xCar3 -= carSpeed3;
}

// Retorna o carro para posição inicial
function returnInitialPositionCar() {
  if (xCar < -50) {
    xCar = 600;
  }
  if (xCar2 < -50) {
    xCar2 = 600;
  }
  if (xCar3 < -50) {
    xCar3 = 600;
  }
}
