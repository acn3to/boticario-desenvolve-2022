const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const NotFound = require("./errors/NotFound");

app.use(bodyParser.json());

const router = require("./routes/providers");
app.use("/api/providers", router);

app.use((error, req, res, next) => {
  if (error instanceof NotFound) {
    res.status(404);
  } else {
    res.status(400);
  }
  res.send(JSON.stringify({ message: error.message, id: error.idError }));
});

app.listen(config.get("api.port"), () =>
  console.log("API running on port 3000")
);
