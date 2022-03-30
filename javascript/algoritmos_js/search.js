const booksList = require("./orderedArray");

function search(array, from, to, searchValue) {
  console.log("from, to", from, to);
  const middle = Math.floor((from + to) / 2);
  const actual = array[middle];

  if (from > to) {
    return -1;
  }

  if (searchValue === actual.price) {
    return middle;
  }

  if (searchValue < actual.price) {
    return search(array, from, middle - 1, searchValue);
  }

  if (searchValue > actual.price) {
    return search(array, middle + 1, to, searchValue);
  }
}

console.log(search(booksList, 0, booksList.length - 1, 20));

// console.log(search(booksList, 0, booksList.length - 1, 60)) // Stack Overflow
