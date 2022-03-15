module.exports = (app) => {
  app.get("/character", (req, res) =>
    res.send("You are on the character route and using a GET request")
  );

  app.post("/character", (req, res) => {
    console.log(req.body);
    res.send("You are on the character route and using a POST request");
  });
};
