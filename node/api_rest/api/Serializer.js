const UnsupportedValue = require("./errors/UnsupportedValue");

class Serializer {
  json(data) {
    return JSON.stringify(data);
  }

  serialize(data) {
    if (this.contentType === "application/json") {
      return this.json(this.filter(data));
    }

    throw new UnsupportedValue(this.contentType);
  }

  filterObject(data) {
    const newObject = {};

    this.publicFields.forEach((field) => {
      if (data.hasOwnProperty(field)) {
        newObject[field] = data[field];
      }
    });

    return newObject;
  }

  filter(data) {
    if (Array.isArray(data)) {
      data = data.map((item) => {
        return this.filterObject(item);
      });
    } else {
      data = this.filterObject(data);
    }

    return data;
  }
}

class ProviderSerializer extends Serializer {
  constructor(contentType, extraFields) {
    super();
    this.contentType = contentType;
    this.publicFields = ["id", "company", "category"].concat(extraFields || []);
  }
}

class ErrorSerializer extends Serializer {
  constructor(contentType, extraFields) {
    super();
    this.contentType = contentType;
    this.publicFields = ["id", "message"].concat(extraFields || []);
  }
}

module.exports = {
  Serializer: Serializer,
  ProviderSerializer: ProviderSerializer,
  ErrorSerializer: ErrorSerializer,
  acceptedFormats: ["application/json"],
};
