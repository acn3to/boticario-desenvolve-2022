// Atualizando arrays (map)

const scores = [10, 9, 8, 7, 6];

const scoresUpdated = scores.map((score) => (score == 10 ? score : ++score)); // ++score != score++

console.log(scoresUpdated);
