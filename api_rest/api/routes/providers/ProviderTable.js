const Model = require("./ProviderTableModel");

module.exports = {
  list() {
    return Model.findAll();
  },
};
