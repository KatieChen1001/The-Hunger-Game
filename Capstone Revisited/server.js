const express = require("express");
const app = express();
const connectDB = require("./DB/db.js");
const userController = require("./Controller/user.js");

// const port = process.env.port || 3000;

connectDB();
app.use(express.json({ extended: false }));
app.use("/", userController);
app.listen(3000, () => {
  console.log("Server started");
});
