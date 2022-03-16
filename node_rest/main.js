const customExpress = require("./config/customExpress");
const connection = require("./infra/connection");
const Tables = require("./infra/tables");

connection.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("Database connection established");

    Tables.init(connection);

    const app = customExpress();

    app.listen(3000, () => console.log("Server running on port 3000"));
  }
});
