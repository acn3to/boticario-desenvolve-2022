const connection = require("../infra/connection");
const filesUpload = require("../files/filesUpload");
class Android {
  add(android, res) {
    const sql = "INSERT INTO androids SET ?";

    filesUpload(android.image, android.name, (error, newPath) => {
      if (error) {
        res.status(400).json({ error });
      } else {
        const newAndroid = {
          name: android.name,
          gender: android.gender,
          image: newPath,
        };

        connection.query(sql, newAndroid, (error) => {
          if (error) {
            console.log(error);
            res.status(400).json(error);
          } else {
            res.status(200).json(newAndroid);
          }
        });
      }
    });
  }
}

module.exports = new Android();
