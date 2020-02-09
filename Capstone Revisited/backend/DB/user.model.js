const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    question1: {
      type: String,
      required: true
    },
    question2: {
      type: String,
      required: true
    },
    question3: {
      type: String,
      required: true
    },
    question4: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
