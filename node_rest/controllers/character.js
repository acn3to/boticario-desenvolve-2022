const Character = require("../models/character");

module.exports = (app) => {
  app.get("/character", (req, res) => {
    Character.list(res);
  });

  app.get("/character/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Character.idSearch(id, res);
  });

  app.post("/character", (req, res) => {
    const character = req.body;
    Character.add(character, res);
  });
};
