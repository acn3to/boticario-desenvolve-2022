class Tables {
  init(connection) {
    this.connection = connection;

    this.createCharacter();
    this.createAndroid();
  }

  createCharacter() {
    const sql =
      "CREATE TABLE IF NOT EXISTS characters (id int NOT NULL AUTO_INCREMENT, name varchar(11) NOT NULL, race varchar(20), gender varchar(10), charCreated datetime NOT NULL, date datetime NOT NULL, PRIMARY KEY (id))";

    this.connection.query(sql, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Table characters created successfully");
      }
    });
  }

  createAndroid() {
    const sql =
      "CREATE TABLE IF NOT EXISTS androids (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, gender varchar(10), image varchar(200), PRIMARY KEY (id))";

    this.connection.query(sql, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Table androids created successfully");
      }
    });
  }
}

module.exports = new Tables();
