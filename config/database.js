const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://arzumavani1:12345@cluster0.eb8vjf9.mongodb.net/Blog_7"
  );
  console.log("Database Connected Successfully");
};

module.exports = db;
