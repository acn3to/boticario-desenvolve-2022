// Criando listas de objetos e acesando seus valore

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
  ],
};

client.dependents.push({
  name: "Another Son",
  kinship: "Son",
  age: 1,
  bornDate: "03/05/2021",
});

//console.log(client);

const olderSon = client.dependents.filter(
  (dependent) => dependent.bornDate === "03/06/2018"
);

console.log(olderSon);
console.log(olderSon[0].name);
