const Model = require("./ProviderTableModel");

module.exports = {
  list() {
    return Model.findAll();
  },

  insert(provider) {
    return Model.create(provider);
  },

  async getById(id) {
    const found = await Model.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new Error("Provider not found");
    }

    return found;
  },

  update(id, dataForUpdate) {
    return Model.update(dataForUpdate, {
      where: { id: id },
    });
  },

  remove(id) {
    return Model.destroy({
      where: { id: id },
    });
  },
};
