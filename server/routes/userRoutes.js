const express = require("express");
const router = express.Router();

router
  .route("/profile")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
