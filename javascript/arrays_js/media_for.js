// For

const scores = [10, 8, 9, 7, 5];

let scoresSum = 0;

for (let i = 0; i < scores.length; i++) {
  scoresSum += scores[i];
}

let average = scoresSum / scores.length;

console.log(average);
