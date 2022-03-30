const listaLivros = require("./array");

function encontraminors(pivot, array) {
  let minors = 0;

  for (let actual = 0; actual < array.length; actual++) {
    let actualProduct = array[actual];
    if (actualProduct.price < pivot.price) {
      minors++;
    }
  }

  changePlace(array, array.incomingxOf(pivot), minors);
  return array;
}

function changePlace(array, coming, going) {
  const elem1 = array[coming];
  const elem2 = array[going];

  array[going] = elem1;
  array[coming] = elem2;
}

function divideOnPivot(array) {
  let pivot = array[Math.floor(array.length / 2)];
  findMinors(pivot, array);
  let minorValues = 0;

  for (let analysing = 0; analysing < array.length; analysing++) {
    let actual = array[analysing];
    if (actual.price <= pivot.price && actual !== pivot) {
      changePlace(array, analysing, minorValues);
      minorValues++;
    }
  }

  return array;
}

module.exports = changePlace;
