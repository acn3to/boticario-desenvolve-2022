// Acessando valores de uma lista dentro de um objeto

const client = {
  name: "Arnaldo Costa Neto",
  age: 28,
  cpf: "85555547778",
  email: "costa@gmail.com",
  phones: ["7188888-8888", "7199999-8888", "7177777-8888"],
};

client.phones.forEach((phone) => console.log(phone));
