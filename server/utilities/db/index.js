const mongoose = require("mongoose");
const { logger } = require("../index");
const { success, error } = logger;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    success("Connected to Database");
  } catch (err) {
    error(err);
  }
};

module.exports = connectDB;
