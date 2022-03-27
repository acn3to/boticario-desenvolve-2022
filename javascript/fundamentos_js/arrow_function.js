// Arrow functions

// Função convencional
function sayName(name) {
  return `Hi, my name is ${name}`;
}

//Arrow function
const showArrowFunction = (name) => `Hi, my name is ${name}`;
const sum = (number1, number2) => number1 + number2;

//Arrow function com + de 1 linha de instruções
const sumSmallNumber = (number1, number2) => {
  if (number1 >= 10 || number2 >= 10) {
    return "Only numbers between 1 and 9";
  } else {
    return number1 + number2;
  }
};

console.log(sumSmallNumber(9, 6));
