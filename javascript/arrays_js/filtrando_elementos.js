// Filtrando elementos (.filter)

const students = ["Ana", "Neto", "Lucas", "Igor"];
const scores = [10, 4, 2, 7];

const reproveds = students.filter((_, index) => scores[index] < 5);

console.log(reproveds);
