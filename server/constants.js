const constants = module.exports;
const path = require("path");

constants.paths = {
  baseDir: __dirname,
  uploadDir: path.join(__dirname, "uploads"),
  avatarDir: path.join(__dirname, "uploads", "avatars"),
};
