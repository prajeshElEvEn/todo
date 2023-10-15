const multer = require("multer");
const { avatarStorage } = require("./storage");

const uploadAvatar = multer({
  storage: avatarStorage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = {
  uploadAvatar,
};
