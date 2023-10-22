const express = require("express");
const { checkAuth, checkAdmin } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.route("/").get(checkAuth, checkAdmin).post(checkAuth);
router
  .route("/:id")
  .get(checkAuth)
  .get(checkAuth)
  .put(checkAuth)
  .delete(checkAuth);

module.exports = router;
