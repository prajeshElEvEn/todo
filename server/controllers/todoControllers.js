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
// @route   GET /api/todos/:userId
// @access  Private
const getUserTodos = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
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

// @desc    Creates a todo
// @route   POST /api/todos/
// @access  Private
const createTodo = asyncHandler(async (req, res) => {
  const { title, author } = req.body;

  if (!title) {
    res.status(404);
    throw new Error("please fill in all the fields");
  }

  if (!author) {
    res.status(404);
    throw new Error("author not found");
  }

  const todo = new Todo({
    title,
    author,
  });

  await todo.save();

  return res.status(201).json(todo);
});

// @desc    Updates a todo
// @route   PUT /api/todos/
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todoId = req.params.id;
  const { title } = req.body;

  const todo = await Todo.findById(todoId);

  if (!todo) {
    res.status(404);
    throw new Error("todo not found");
  }

  if (title) {
    todo.title = title;
  }

  const updatedTodo = await todo.save();

  res.status(200).json(updatedTodo);
});

// @desc    Deletes a todo
// @route   DELETE /api/todos/
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todoId = req.params.id;

  const todo = await Todo.findById(todoId);

  if (!todo) {
    res.status(404);
    throw new Error("todo not found");
  }

  if (title) {
    poster.title = title;
  }

  await poster.deleteOne();

  res.status(204).json({ id: poster._id, message: "Poster deleted" });
});

module.exports = {
  getTodos,
  getUserTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
