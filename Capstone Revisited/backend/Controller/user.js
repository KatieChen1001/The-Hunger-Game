const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/user.model");
const router = express.Router();

router.post("/", (req, res) => {
  const alias = req.body.alias;
  const frequency = req.body.frequency;

  let newUser = new User({ alias, frequency });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/", (req, res) => {
  res.json("My backend server is here and running");
});

module.exports = router;
// console.log(module); // this will log this module information in the console.
