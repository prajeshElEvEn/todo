const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllTodos,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

router
  .route("/")
  .get(getAllTodos)
  .get(protect, getTodos)
  .post(protect, createTodo);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
