// Var

var height = 5;
var width = 7;

area = height * width;

// console.log(area);

var area; // Var pode ser declarada após ser utilizada (não é uma boa prática)

// Let

let height2 = 10;
let width2 = 5;

// area2 = height2 * width2;

// console.log(area2); // O console retornará um erro, pois não é possível acessar uma variável let antes de inicializa-la

let area2;

// Const

const shape = "square";
const height3 = 5;
const width3 = 4;

const area3 = height3 * width3;

console.log(area3);

// Valores atribuidos a const não podem ser modificados.
if (shape === "square") {
  area3 = height3 * width3;
} else {
  area3 = (height3 * width3) / 2;
}
