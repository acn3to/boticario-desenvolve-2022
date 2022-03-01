// Conversão implícita

const number = 3;
const numberString = "3";

console.log(number === numberString); // False
console.log(number == numberString); // True
console.log(number + numberString); // 33 (Concatenação entre number e string)

// Conversão explícita

console.log(number + Number(numberString)); // Função Number() - 6

const password = "456a";
console.log(number + Number(password)); // NaN
