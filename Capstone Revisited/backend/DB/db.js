const mongoose = require("mongoose");

const URI =
  "mongodb+srv://katieAdmin:742JbbN5NALXoGMp@hunger-game-v1-jwoum.azure.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(
    URI,
    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    },
    err => {
      if (!err) {
        console.log("MongoDB Connection Success");
      } else {
        console.log("Err is " + err);
      }
    }
  );
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("MongoDB Altas Connection Success");
});

module.exports = connectDB;
