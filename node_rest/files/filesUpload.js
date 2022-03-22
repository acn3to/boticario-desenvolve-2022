const fs = require("fs");

fs.createReadStream("./assets/goku.png").pipe(
  fs.createWriteStream("./assets/goku-stream.png").on("finish", () => {
    console.log("Image was writed");
  })
);
