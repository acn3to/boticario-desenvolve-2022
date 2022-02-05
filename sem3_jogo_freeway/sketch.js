let roadImage;
let actorImage;
let carImage;

function preload() {
  roadImage = loadImage("./images/road.png");
  actorImage = loadImage("./images/actor-1.png");
  carImage = loadImage("./images/car-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(roadImage);
  image(actorImage, 100, 366, 30, 30);
  image(carImage, 400, 40, 50, 40);
}
