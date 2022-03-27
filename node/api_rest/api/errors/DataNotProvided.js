class DataNotProvided extends Error {
  constructor() {
    super("No data provided for update");
    this.name = "DataNotProvided";
    this.idError = 2;
  }
}

module.exports = DataNotProvided;
