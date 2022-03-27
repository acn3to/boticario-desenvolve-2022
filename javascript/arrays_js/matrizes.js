// Matrizes - Arrays de duas dimensões

const students = ["Ana", "Neto", "Lucas", "Igor"];
const scores = [10, 8, 2, 7];

const studentsAndScores = [students, scores];

console.log(
  `${studentsAndScores[0][1]}, your score is ${studentsAndScores[1][1]}`
);

const ages = [30, 35, 28];
const names = ["Ana", "Juliana", "Leonardo"];
const college = [false, true, true];

const employees = [names, ages, college];

console.log(
  `${employees[0][0]}, your age is ${employees[1][0]} and you are on college = ${employees[2][0]}`
);
