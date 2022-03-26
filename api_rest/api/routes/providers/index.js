const router = require("express").Router();
const ProviderTable = require("./ProviderTable");
const Provider = require("./Provider");

router.get("/", async (req, res) => {
  const results = await ProviderTable.list();
  res.send(JSON.stringify(results));
});

router.post("/", async (req, res) => {
  const receivedData = req.body;
  const provider = new Provider(receivedData);
  await provider.create();
  res.send(JSON.stringify(provider));
});

module.exports = router;
