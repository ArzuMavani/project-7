const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  image: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
