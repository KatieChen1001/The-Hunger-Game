const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/user.model");
const router = express.Router();

router.post("/", (req, res) => {
  const profile = req.body.profile;

  let newUser = new User({
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4
  });

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
