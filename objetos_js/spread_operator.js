// Sintaxe de espalhamento / Spread operator

const clients = [
  {
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
        name: "Theo Joao Cosa",
        kinship: "Son",
        age: 10,
        bornDate: "03/06/2012",
      },
    ],
  },
  {
    name: "Ana Paula",
    age: 28,
    cpf: "99999999999",
    email: "ana.souto@gmail.com",
    phones: ["7185888-4444", "7777777-8888", "7177777-9999"],
    dependents: [
      {
        name: "Ana Paula Souto",
        kinship: "Daughter",
        age: 5,
        bornDate: "05/06/2018",
      },
      {
        name: "Ana Julia Souza",
        kinship: "Daughter",
        age: 8,
        bornDate: "05/06/2014",
      },
    ],
  },
];

const dependentsList = [...clients[0].dependents, ...clients[1].dependents];

console.table(dependentsList); // Exibe as informações em formato de tabela
