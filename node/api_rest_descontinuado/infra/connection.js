const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ne152127.",
  database: "dragon_ball_db",
});

module.exports = connection;
