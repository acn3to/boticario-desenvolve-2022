const UnsupportedValue = require("./errors/UnsupportedValue");

class Serializer {
  json(data) {
    return JSON.stringify(data);
  }

  serialize(data) {
    if (this.contenType === "apolication/json") {
      return this.json(data);
    }

    throw new UnsupportedValue(this.contenType);
  }
}

module.exports = {
  Serializer: Serializer,
  acceptedFormats: ["application/json"],
};
