const express = require("express");
const app = express();
const connectDB = require("./DB/db.js");
const userController = require("./Controller/user.js");
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:3001",
  optionSuccessStatus: 200
};

connectDB();
app.use(cors(corsOption));
app.use(express.json({ extended: false }));
app.use("/", userController);
app.listen(3000, () => {
  console.log("Server started");
});
