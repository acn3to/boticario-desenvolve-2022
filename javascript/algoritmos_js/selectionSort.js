const books = require("./booksList");
const lowestValue = require("./lowestValue");

for (let actual = 0; actual < books.length; actual++) {
  let lowest = lowestValue(books, actual);

  let actualBook = books[actual];
  console.log(`Actual:`, actual);
  console.log(`Actual book:`, books[actual]);
  let lowestPriceBook = books[lowest];
  console.log(`Lowest price book:`, books[lowest]);

  books[actual] = lowestPriceBook;
  books[lowest] = actualBook;
}

// console.log(books);
