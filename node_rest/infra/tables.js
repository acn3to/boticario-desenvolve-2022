class Tables {
  init(connection) {
    this.connection = connection;

    this.createCharacter();
  }

  createCharacter() {
    const sql =
      "CREATE TABLE IF NOT EXISTS characters (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, race varchar(20), gender varchar(10), charCreated datetime NOT NULL, date datetime NOT NULL, PRIMARY KEY (id))";

    this.connection.query(sql, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Table character created successfully");
      }
    });
  }
}

module.exports = new Tables();
