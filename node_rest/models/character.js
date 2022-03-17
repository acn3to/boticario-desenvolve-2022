const connection = require("../infra/connection");

class Character {
  add(character) {
    const sql = "INSERT INTO characters SET ?";

    connection.query(sql, character, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = new Character();
