const moment = require("moment");
const connection = require("../infra/connection");

class Character {
  add(character, res) {
    const charCreated = moment().format("YYYY-MM-DD HH:mm:ss");
    const date = moment(character.date, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm:ss"
    );

    const dateIsValid = moment(date).isSameOrAfter(charCreated);
    const nameIsValid = character.name.length >= 3;

    const validations = [
      {
        name: "data",
        valid: dateIsValid,
        menssage: "Date must be greater than or equal to charCreated",
      },
      {
        name: "character",
        valid: nameIsValid,
        menssage: "Character must have at least three characters",
      },
    ];

    const errors = validations.filter((field) => !field.valid);
    const errorsExist = errors.length;

    if (errorsExist) {
      res.status(400).json(errors);
    } else {
      const charDate = { ...character, charCreated, date };

      const sql = "INSERT INTO characters SET ?";

      connection.query(sql, charDate, (err, result) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(201).json({ character });
        }
      });
    }
  }

  list(res) {
    const sql = "SELECT * FROM characters";

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  }

  idSearch(id, res) {
    const sql = `SELECT * FROM characters WHERE id =${id}`;

    connection.query(sql, (err, result) => {
      const character = result[0];
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(character);
      }
    });
  }

  update(id, values, res) {
    if (values.date) {
      values.date = moment(values.date, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:mm:ss"
      );
    }

    const sql = `UPDATE characters SET ? WHERE id=?`;

    connection.query(sql, [values, id], (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ ...values, id });
      }
    });
  }

  del(id, res) {
    const sql = "DELETE FROM characters WHERE id=?";

    connection.query(sql, id, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

module.exports = new Character();
