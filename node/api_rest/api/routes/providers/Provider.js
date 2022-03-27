const ProviderTable = require("./ProviderTable");

class Provider {
  constructor({ id, company, email, category, createdAt, updatedAt, version }) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.version = version;
  }

  async create() {
    const result = await ProviderTable.insert({
      company: this.company,
      email: this.email,
      category: this.category,
    });

    this.id = result.id;
    this.createdAt = result.created;
    this.updatedAt = result.updated;
    this.version = result.version;
  }

  async load() {
    const found = await ProviderTable.getById(this.id);
    this.company = found.company;
    this.email = found.email;
    this.category = found.category;
    this.createdAt = found.createdAt;
    this.updatedAt = found.updatedAt;
    this.version = found.version;
  }

  async update() {
    await ProviderTable.getById(this.id);
    const fields = ["company", "email", "category"];
    const dataForUpdate = {};

    fields.forEach((field) => {
      const value = this[field];
      if (typeof value === "string" && value.length > 0) {
        dataForUpdate[field] = value;
      }
    });

    if (Object.keys(dataForUpdate).length === 0) {
      throw new Error("No data for update");
    }

    await ProviderTable.update(this.id, dataForUpdate);
  }
}

module.exports = Provider;
