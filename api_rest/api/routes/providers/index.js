const router = require("express").Router();
const ProviderTable = require("./ProviderTable");

router.get("/", async (req, res) => {
  const results = await ProviderTable.list();
  res.send(JSON.stringify(results));
});

module.exports = router;
