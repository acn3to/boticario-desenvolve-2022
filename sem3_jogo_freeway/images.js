// Imagens e sons do jogo

// Variáveis das imagens
let roadImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;

let soundTrack;
let soundHit;
let soundPoints;

// Carregando as imagens no projeto
function preload() {
  roadImage = loadImage("./images/road.png");
  actorImage = loadImage("./images/actor-1.png");
  carImage = loadImage("./images/car-1.png");
  carImage2 = loadImage("./images/car-2.png");
  carImage3 = loadImage("./images/car-3.png");
  carImages = [carImage, carImage2, carImage3, carImage, carImage2, carImage3];

  soundTrack = loadSound("./sounds/track.mp3");
  soundHit = loadSound("./sounds/hit.mp3");
  soundPoints = loadSound("./sounds/points.wav");
}
