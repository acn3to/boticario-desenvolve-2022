const Character = require("../models/character");

module.exports = (app) => {
  app.get("/character", (req, res) =>
    res.send("You are on the character route and using a GET request")
  );

  app.post("/character", (req, res) => {
    const character = req.body;
    Character.add(character);
    res.send("POST Character");
  });
};
