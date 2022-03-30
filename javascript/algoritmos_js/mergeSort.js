const booksList = require("./mergeSortArray");

function mergeSort(array, nestingLevel = 0) {
  console.log("")
  console.log(`Nesting level: ${nestingLevel}`);
  console.log(array);

  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, middle), nestingLevel + 1);
    const part2 = mergeSort(
      array.slice(middle, array.length),
      nestingLevel + 1
    );
    array = orders(part1, part2);
  }
  return array;
}

function orders(part1, part2) {
  let actualPosition1 = 0;
  let actualPosition2 = 0;
  let result = [];

  while (actualPosition1 < part1.length && actualPosition2 < part2.length) {
    let actualProduc1 = part1[actualPosition1];
    let actualProduc2 = part2[actualPosition2];

    if (actualProduc1.price < actualProduc2.price) {
      result.push(actualProduc1);
      actualPosition1++;
    } else {
      result.push(actualProduc2);
      actualPosition2++;
    }
  }

  return result.concat(
    actualPosition1 < part1.length
      ? part1.slice(actualPosition1)
      : part2.slice(actualPosition2)
  );
}

console.log(mergeSort(booksList));
