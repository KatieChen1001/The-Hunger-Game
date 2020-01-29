const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/user.js");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.json("sample text");
// });

router.post("/", async (req, res) => {
  const { alias, frequency } = req.body;
  let user = {};
  user.alias = alias;
  user.frequency = frequency;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});
module.exports = router;
