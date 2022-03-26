const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");

app.use(bodyParser.json());

const router = require("./routes/providers");
app.use("/api/providers", router);

app.listen(config.get("api.port"), () =>
  console.log("API running on port 3000")
);
