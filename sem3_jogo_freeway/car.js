// Código do carro

// Variáveis do carro
let xCar = 600;
let yCar = 40;

// Exibe o carro com seus devidos parâmetros
function showCar() {
  image(carImage, xCar, yCar, 50, 40);
}

// Movimenta o carro
function moveCar() {
  xCar -= 2;
}
