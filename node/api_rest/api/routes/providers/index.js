const router = require("express").Router();
const ProviderTable = require("./ProviderTable");
const Provider = require("./Provider");

router.get("/", async (req, res) => {
  const results = await ProviderTable.list();
  res.status(200);
  res.send(JSON.stringify(results));
});

router.post("/", async (req, res) => {
  try {
    const receivedData = req.body;
    const provider = new Provider(receivedData);
    await provider.create();
    res.status(201);
    res.send(JSON.stringify(provider));
  } catch (error) {
    res.status(400);
    res.send(JSON.stringify({ message: error.message }));
  }
});

router.get("/:idProvider", async (req, res) => {
  try {
    const id = req.params.idProvider;
    const provider = new Provider({ id: id });
    await provider.load();
    res.status(200);
    res.send(JSON.stringify(provider));
  } catch (error) {
    res.status(404);
    res.send(JSON.stringify({ message: error.message }));
  }
});

router.put("/:idProvider", async (req, res) => {
  try {
    const id = req.params.idProvider;
    const receivedData = req.body;
    const data = Object.assign({}, receivedData, { id: id });
    const provider = new Provider(data);
    await provider.update();
    res.status(204);
    res.end();
  } catch (error) {
    res.status(400);
    res.send(JSON.stringify({ message: error.message }));
  }
});

router.delete("/:idProvider", async (req, res) => {
  try {
    const id = req.params.idProvider;
    const provider = new Provider({ id: id });
    await provider.load();
    await provider.remove();
    res.status(204);
    res.end();
  } catch (error) {
    res.status(404);
    res.send(JSON.stringify({ message: error.message }));
  }
});

module.exports = router;
