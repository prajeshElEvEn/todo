const express = require("express");
const router = express.Router();
const { checkAuth, checkAdmin } = require("../middlewares/authMiddlewares");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const { uploadAvatar } = require("../utils");

router.route("/").get(checkAuth, checkAdmin, getUsers);
router.route("/profile/:id").get(checkAuth, getUser);
router
  .route("/profile/:id/update")
  .put(checkAuth, uploadAvatar.single("avatar"), updateUser);
router.route("/profile/:id/delete").delete(checkAuth, deleteUser);

module.exports = router;
