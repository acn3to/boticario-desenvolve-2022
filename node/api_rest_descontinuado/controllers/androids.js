const Android = require("../models/androids");

module.exports = (app) => {
  app.post("/android", (req, res) => {
    const android = req.body;

    Android.add(android, res);
  });
};
