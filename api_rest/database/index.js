const Sequelize = require("sequelize");
const config = require("config");

const instance = new Sequelize(
  config.get("mysql.database"),
  config.get("mysql.user"),
  config.get("mysql.password"),
  config.get("mysql.host"),
  { host: "127.0.0.1", dialect: "mysql" }
);

module.exports = instance;
