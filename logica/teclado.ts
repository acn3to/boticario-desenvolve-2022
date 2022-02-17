let tela: any = document.querySelector("canvas");
let pincel: any = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

let x: number = 20;
let y: number = 20;

// Códigos do teclado

let esquerda: number = 37;
let cima: number = 38;
let direita: number = 39;
let baixo: number = 40;

let taxa: number = 10;

function desenhaCirculo(x: number, y: number, raio: number) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
  limpaTela();
  desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function leDoTeclado(evento: any) {
  if (evento.keyCode == cima) {
    y = y - taxa;
  } else if (evento.keyCode == baixo) {
    y = y + taxa;
  } else if (evento.keyCode == esquerda) {
    x = x - taxa;
  } else if (evento.keyCode == direita) {
    x = x + taxa;
  }
}

document.onkeydown = leDoTeclado;
