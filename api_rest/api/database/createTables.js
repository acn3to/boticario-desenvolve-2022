const TableModel = require("../routes/providers/ProviderTableModel");

TableModel.sync()
  .then(() => console.log("Table created successfully"))
  .catch(console.log);
