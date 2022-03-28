const books = require("./booksList");

function insertionSort(list) {
  for (let actual = 0; actual < list.length; actual++) {
    let analysis = actual;

    while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {
      let analysisItem = list[analysis];
      let beforeItem = list[analysis - 1];

      list[analysis] = beforeItem;
      list[analysis - 1] = analysisItem;

      analysis--;
    }
  }

  console.log(list);
}

insertionSort(books);
