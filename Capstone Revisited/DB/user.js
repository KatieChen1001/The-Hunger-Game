const mongoose = require("mongoose");

const user = new mongoose.Schema({
  alias: {
    type: String
  },
  frequency: {
    type: String
  }
});

module.exports = User = mongoose.model("user", user);
