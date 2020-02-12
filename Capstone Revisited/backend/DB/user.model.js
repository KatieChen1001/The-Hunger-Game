const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    question1: {
      type: String,
      required: true
    },
    question2: {
      type: Number,
      required: true
    },
    question3: {
      type: Number,
      required: true
    },
    question4: {
      type: Number,
      required: true
    },
    url: mongoose.ObjectId
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
