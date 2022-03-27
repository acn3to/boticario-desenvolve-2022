// Acessando chaves de um objeto (.keys)

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

function offerInsurance(obj) {
  const propsClients = Object.keys(obj);
  if (propsClients.includes("dependents")) {
    console.log(`Offer life insurance for ${obj.name}`);
  }
}

console.log(Object.entries(client));
console.log(Object.values(client));
offerInsurance(client);
