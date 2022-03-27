const Sequelize = require("sequelize");
const instance = require("../../database");

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("feed", "toy"),
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
  tableName: "providers",
  timestamps: true,
};

module.exports = instance.define("provider", columns, options);
