const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoURI =
  "mongodb://127.0.0.1:27017/inotebook?compressors=none&appName=mongodb";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongo successfully");
  });
};

module.exports = connectToMongo;
