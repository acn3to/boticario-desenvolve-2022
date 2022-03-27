// Comportamento de objetos - Métodos

const client = {
  name: "Arnaldo Costa Neto",
  age: 28,
  cpf: "85555547778",
  email: "costa@gmail.com",
  phones: ["7188888-8888", "7199999-8888", "7177777-8888"],
  dependents: [
    {
      name: "Theo Costa Lobo",
      kinship: "Son",
      age: 3,
      bornDate: "03/06/2018",
    },
    {
      name: "Another Son",
      kinship: "Son",
      age: 1,
      bornDate: "03/05/2021",
    },
  ],
  balance: 100,
  deposit: function (value) {
    this.balance += value;
  },
};

console.log(client.balance);
client.deposit(200);
console.log(client.balance);

