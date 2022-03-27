const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const NotFound = require("./errors/NotFound");
const InvalidField = require("./errors/InvalidField");
const DataNotProvided = require("./errors/DataNotProvided");

app.use(bodyParser.json());

const router = require("./routes/providers");
app.use("/api/providers", router);

app.use((error, req, res, next) => {
  let status = 500;

  if (error instanceof NotFound) {
    status = 404;
  }

  if (error instanceof InvalidField || error instanceof DataNotProvided) {
    status = 400;
  }

  res.status(status);
  res.send(JSON.stringify({ message: error.message, id: error.idError }));
});

app.listen(config.get("api.port"), () =>
  console.log("API running on port 3000")
);
