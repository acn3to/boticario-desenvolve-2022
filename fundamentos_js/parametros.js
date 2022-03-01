// Parametros

function sum(number1, number2) {
  return number1 + number2;
}

function nameAge(name, age) {
  return `My name is ${name} and my age is ${age}`;
}

function multiplication(number1 = 1, number2 = 1) {
  return number1 * number2;
}

console.log(sum(2, 2));

console.log(nameAge("Arnaldo", 28));

console.log(multiplication(sum(2, 2), sum(4, 5)));

console.log(multiplication(sum(4, 5)));
