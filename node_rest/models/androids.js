const connection = require("../infra/connection");

class Android {
  add(android, res) {
    const sql = "INSERT INTO androids SET ?";

    connection.query(sql, android, (error) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error });
      } else {
        res.status(200).json(android);
      }
    });
  }
}

module.exports = new Android();
