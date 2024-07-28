const mongoose = require("mongoose");
require('dotenv').config();

// Localhost
// const url = "mongodb://localhost:27017/mydb";

// Local in env
// const url = process.env.MONGODB_URL_LOCAL
// Atlas
const url = process.env.MONGODB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

module.exports = db;
