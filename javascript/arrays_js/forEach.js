// forEach

const scores = [10, 8, 9, 7, 5];

let scoresSum = 0;

// Callback
scores.forEach((score) => {
  scoresSum += score;
});

let average = scoresSum / scores.length;

console.log(average);
