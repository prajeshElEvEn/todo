// multerStorage.js
const multer = require("multer");
const path = require("path");
const constants = require("../../constants");

const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, constants.paths.avatarDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.originalname}-${Date.now()}${ext}`);
  },
});

module.exports = {
  avatarStorage,
};
