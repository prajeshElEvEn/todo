const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

// @desc    Gets all todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// @desc    Gets user todos
// @route   GET /api/todos/:id
// @access  Private
const getUserTodos = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const todos = await Todo.find({ author: userId });
  res.status(200).json(todos);
});

// @desc    Gets a todo
// @route   GET /api/todos/:id
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);
  res.status(200).json(todo);
});
