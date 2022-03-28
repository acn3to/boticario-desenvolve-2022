class UnsupportedValue extends Error {
  constructor(contentType) {
    super(`The type of content type ${contentType} is unsupported`);
    this.name = "UnsupportedValue";
    this.idError = 3;
  }
}

module.exports = UnsupportedValue;
