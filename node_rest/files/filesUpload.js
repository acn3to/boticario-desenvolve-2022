const fs = require("fs");

fs.readFile("./assets/goku.png", (error, buffer) => {
  console.log("The image was buffered");

  fs.writeFile("./assets/goku2.png", buffer, (error) => {
    console.log("The image was wireted");
  });
});

