// Adicionando e acessando objetos dentro de um objeto

const client = {
  name: "Arnaldo Costa Neto",
  age: 28,
  cpf: "85555547778",
  email: "costa@gmail.com",
  phones: ["7188888-8888", "7199999-8888", "7177777-8888"],
};

client.dependents = {
  name: "Theo Costa Lobo",
  kinship: "Son",
  age: 3,
  bornDate: "03/06/2018",
};

console.log(client);

client.dependents.name = "Theo Costa";

console.log(client);
