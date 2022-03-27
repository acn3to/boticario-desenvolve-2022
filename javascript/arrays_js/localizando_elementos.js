// Localizando elementos

const students = ["Ana", "Neto", "Lucas", "Igor"];
const scores = [10, 8, 2, 7];

const studentsAndScores = [students, scores];

const showNameAndScore = (studentName) => {
  if (studentsAndScores[0].includes(studentName)) {
    let index = studentsAndScores[0].indexOf(studentName); // Retorna o indice do valor passado no parâmetro (indexOf) e guarda na variável index
    return (
      studentsAndScores[0][index] +
      ", your score is " +
      studentsAndScores[1][index]
    );
  } else {
    return "Student not found";
  }
};

console.log(showNameAndScore("Lucas"));
