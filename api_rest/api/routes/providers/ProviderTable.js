const Model = require("./ProviderTableModel");

module.exports = {
  list() {
    return Model.findAll();
  },

  insert(provider) {
    return Model.create(provider);
  },
};
