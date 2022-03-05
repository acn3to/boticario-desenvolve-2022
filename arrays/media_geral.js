// Somando elementos de um array (.reduce)

const jsClass = [7, 8, 9, 3, 5.6, 10, 7.4];
const pythonClass = [6, 8.9, 9.9, 4, 5.6, 10, 7];
const dartClass = [6, 4.5, 10, 8, 5.4, 10, 5];

function averageClass(classScores) {
  const scoresSum = classScores.reduce((acum, actual) => actual + acum, 0);
  return scoresSum / classScores.length;
}

console.log(averageClass(jsClass).toFixed(2));
console.log(averageClass(pythonClass).toFixed(2));
console.log(averageClass(dartClass).toFixed(2));

const scores = [10, 8, 9, 7, 5];

const average =
  scores.reduce((acum, actual) => actual + acum, 0) / scores.length;

console.log(average);
