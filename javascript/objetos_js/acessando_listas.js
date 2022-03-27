// Acessando valores de uma lista

const client = {
  name: "Arnaldo Costa Neto",
  age: 28,
  cpf: "85555547778",
  email: "costa@gmail.com",
};

const keys = ["name", "age", "cpf", "email"];

console.log(`The client name is ${client[keys[0]]}`); // Acessando pelo index

console.log(`The client age is ${client["age"]}`); // Acessando pelo nome

keys.forEach((info) => console.log(client[info])); // Usando forEach
