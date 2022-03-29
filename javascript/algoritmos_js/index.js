const { publisher1, publisher2 } = require("./arrays");

function joinLists(list1, list2) {
  let finalList = [];
  let actualPosition1 = 0;
  let actualPosition2 = 0;
  let actual = 0;

  while (actualPosition1 < list1.length && actualPosition2 < list2.length) {
    let actualProduc1 = list1[actualPosition1];
    let actualProduc2 = list2[actualPosition2];

    if (actualProduc1.price < actualProduc2.price) {
      finalList[actual] = actualProduc1;
      actualPosition1++;
    } else {
      finalList[actual] = actualProduc2;
      actualPosition2++;
    }
    actual++;
  }

  while (actualPosition1 < list1.length) {
    finalList[actual] = list1[actualPosition1];
    actualPosition1++;
    actual++;
  }

  while (actualPosition2 < list2.length) {
    finalList[actual] = list2[actualPosition2];
    actualPosition2++;
    actual++;
  }

  return finalList;
}

console.log(joinLists(publisher1, publisher2));
