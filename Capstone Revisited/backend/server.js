const express = require("express"); // require returns the express function
const app = express(); //call the express function and store it in an object
const connectDB = require("./DB/db.js");
const userController = require("./Controller/user.js");
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:3001",
  optionSuccessStatus: 200
};

const port = process.env.PORT || 3000;
// In real production environment, ports are dynamically assigned
// It's good practice to use the PORT environment variable

connectDB();

app.use(cors(corsOption));

app.use(express.json({ extended: false }));
//??? still dont know why "extende: false"

app.use("/", userController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
