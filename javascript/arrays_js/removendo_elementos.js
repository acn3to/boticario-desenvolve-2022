// Removendo o ultimo elemento (.pop)

let scores = [10, 6.5, 8, 7.5];

scores.pop();

console.log(scores);

let average = (scores[0] + scores[1] + scores[2]) / scores.length;

console.log(average.toFixed(1)); // Formantando a quantidade de casas decimais (.toFixed)
