const booksList = require("./array");
const changePlace = require("./findMinors");

function quickSort(array, left, right) {
  if (array.length > 1) {
    let actualIndex = partition(array, left, right);
    if (left < actualIndex - 1) {
      quickSort(array, left, actualIndex - 1);
    }
    if (actualIndex < right) {
      quickSort(array, actualIndex, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  console.log("array", array);
  console.log("left, right", left, right);
  let pivo = array[Math.floor((left + right) / 2)];
  let actualLeft = left; //0
  let actualRight = right; //10

  while (actualLeft <= actualRight) {
    while (array[actualLeft].preco < pivo.preco) {
      actualLeft++;
    }

    while (array[actualRight].preco > pivo.preco) {
      actualRight--;
    }

    if (actualLeft <= actualRight) {
      changePlace(array, actualLeft, actualRight);
      actualLeft++;
      actualRight--;
    }
  }
  return actualLeft;
}

console.log(quickSort(booksList, 0, booksList.length - 1));
