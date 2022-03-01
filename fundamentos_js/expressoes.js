// Declaração de função

function sum1(number1, number2) {
  return number1 + number2;
}

// Expressao de função

const sum2 = function (number1, number2) {
  return number1 + number2;
};

console.log(sum2(1, 2));

// Principal diferença

// Funciona
console.log(showText());
function showText() {
  return "Hi there!";
}

// Não funciona
console.log(divide(10, 2));
const divide = function (number1, number2) {
  return number1 / number2;
};
