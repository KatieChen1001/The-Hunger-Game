const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    alias: {
      type: String,
      required: true
    },
    frequency: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
