const fs = require("fs");
const path = require("path");

module.exports = (filePath, file, callBackImageCreated) => {
  const validTypes = ["jpg", "png", "jpge"];
  const type = path.extname(filePath);
  const typeIsValid = validTypes.indexOf(type.substring(1)) !== -1;

  if (typeIsValid) {
    const newPath = `./assets/images/${file}${type}`;

    fs.createReadStream(filePath)
      .pipe(fs.createWriteStream(newPath))
      .on("finish", () => callBackImageCreated(false, newPath));
  } else {
    const error = "Type is invalid!";
    console.log("Error! Invalid type");
    callBackImageCreated(error);
  }
};
