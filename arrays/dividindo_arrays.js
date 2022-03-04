// Dividindo arrays (.slice)

const names = [
  "Arnaldo",
  "Joao",
  "Lucas",
  "Rodrigo",
  "Paula",
  "Marcelo",
  "Renata",
  "Fabiano",
];

const classA = names.slice(0, names.length / 2);
const classB = names.slice(names.length / 2);

console.log(classA, classB);
