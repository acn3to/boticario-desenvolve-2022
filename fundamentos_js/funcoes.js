// Funções

// Declarando uma função com parâmetro (text)
function printText(text) {
  console.log(text);
}
// Declarando uma função sem parâmetro ()
function sum() {
  return 2 + 2;
}

// Chamando uma função (parâmetro)
printText("Hello");

// Imprimindo no console uma chamada de função sem parâmetro ()
console.log(sum());

// Chamando uma função dentro de uma função
printText(sum());
