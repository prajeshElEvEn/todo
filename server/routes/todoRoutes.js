const express = require("express");
const { checkAuth, checkAdmin } = require("../middlewares/authMiddlewares");
const {
  getTodos,
  createTodo,
  getUserTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const router = express.Router();

router
  .route("/")
  .get(checkAuth, checkAdmin, getTodos)
  .post(checkAuth, createTodo);

router.route("/user/:userId").get(checkAuth, getUserTodos);

router
  .route("/:id")
  .get(checkAuth, getTodo)
  .put(checkAuth, updateTodo)
  .delete(checkAuth, deleteTodo);

module.exports = router;
