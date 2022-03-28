const books = require("./booksList");

/* Cheapest book on the list */
function lowestValue(arrayProducts, initialPosition) {
  let cheapest = initialPosition;

  for (let actual = initialPosition; actual < arrayProducts.length; actual++) {
    if (arrayProducts[actual].price < arrayProducts[cheapest].price) {
      cheapest = actual;
    }
  }

  return cheapest;
}

module.exports = lowestValue;
