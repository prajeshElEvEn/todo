const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  uploadAvatar,
} = require("../controllers/userController");
const constants = require("../../constants");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, constants.paths.uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.filename}`);
  },
});

const upload = multer({ storage: storage });

router
  .route("/profile")
  .get(protect, getUser)
  .post(protect, upload.single("avatar"), uploadAvatar)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
