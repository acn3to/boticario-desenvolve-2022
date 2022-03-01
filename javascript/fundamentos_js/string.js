// Tipo string

const text = "Hello, world!";
const password = "superSecurePass123";
const numberString = "123456";
const cite = 'He said "hi", his name is ';
const myName = "John";

// Concatenação (+)

console.log(cite + myName);

// Template string

var a = 5;
var b = 10;

console.log(`Quinze é ${a + b} e não ${2 * a + b}.`);

const client = "Neto";
const age = 28;
const drinkOver18 = "beer";
const drinkUnder18 = "juice";

// Template string com operador ternário

const order = `${client} says: "please, wanna drink some ${
  age >= 18 ? drinkOver18 : drinkUnder18
}."`;
console.log(order);
