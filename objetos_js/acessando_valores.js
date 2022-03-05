// Acessando valores de um objeto e aplicando métodos JavaScript

const client = {
  name: "Arnaldo Costa Neto",
  age: 28,
  cpf: "85555547778",
  email: "costa@gmail.com",
};

console.log(
  `The client name is ${client.name}
His age is ${client.age}
The 3 first numbers of his CPF is ${client.cpf.substring(0, 3)}
His email is ${client.email}`
);
