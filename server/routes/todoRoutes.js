const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(getTodos)
  .get(protect, getTodos)
  .post(protect, createTodo);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);
