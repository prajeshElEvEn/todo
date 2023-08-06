const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router
  .route("/profile")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
