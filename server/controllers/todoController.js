const asyncHandler = require("express-async-handler");
const Todo = require("../models/todo");

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
});

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.status(200).json(todos);
});

const createTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
});
