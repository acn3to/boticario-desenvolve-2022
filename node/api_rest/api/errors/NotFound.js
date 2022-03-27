class NotFound extends Error {
  constructor() {
    super("Provider not found");
    this.name = "NotFound";
    this.idError = 0;
  }
}

module.exports = NotFound;
