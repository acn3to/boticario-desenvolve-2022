// Atualizando arrays (.splice)

const list = [
  "Arnaldo",
  "Joao",
  "Lucas",
  "Rodrigo",
  "Paula",
  "Marcelo",
  "Renata",
  "Fabiano",
];

// list.splice(1, 2, "Neto"); // Começando no indice 1, removendo 2 elementos e adicionando "Neto"

list.splice(2, 0, "Vini"); // Começando do indice 2, não removendo nenhum elemento e adinando "vini"

console.log(list);
