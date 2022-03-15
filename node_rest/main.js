const customExpress = require("./config/customExpress");
const connection = require("./infra/connection");

connection.connect((error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("Database connection established!");
    const app = customExpress();
    app.listen(3000, () => console.log("Server running on port 3000"));
  }
});
