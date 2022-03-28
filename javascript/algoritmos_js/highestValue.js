const books = require("./booksList");

/* Expensivest book on the list */
function highestValue(arrayProducts, initialPosition) {
  let expensivest = initialPosition;

  for (let actual = initialPosition; actual < arrayProducts.length; actual++) {
    if (arrayProducts[actual].price > arrayProducts[expensivest].price) {
      expensivest = initialPosition;
    }
  }

  return expensivest;
}

module.exports = highestValue;
