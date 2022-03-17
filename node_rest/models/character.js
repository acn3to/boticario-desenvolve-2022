const moment = require("moment");
const connection = require("../infra/connection");

class Character {
  add(character) {
    const charCreated = moment().format("YYYY-MM-DD HH:mm:ss");
    const date = moment(character.date).format("YYYY-MM-DD HH:mm:ss");
    const charDate = { ...character, charCreated, date };
    const sql = "INSERT INTO characters SET ?";

    connection.query(sql, charDate, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = new Character();
