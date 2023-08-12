const asyncHandler = require("express-async-handler");
const Todo = require("../models/todo");
const { logger } = require("../utilities");
const { error } = logger;

const getAllTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    error(err);
  }
});

const getTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    error(err);
  }
});

const createTodo = asyncHandler(async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400);
      throw new Error("Fields are empty");
    }

    const todo = await Todo.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json(todo);
  } catch (err) {
    error(err);
  }
});

const updateTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }
    if (!req.user) {
      res.status(401);
      throw new Error("User not found");
    }

    if (todo.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("Not authorized");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedTodo);
  } catch (err) {
    error(err);
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }
    if (!req.user) {
      res.status(401);
      throw new Error("User not found");
    }

    if (todo.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("Not authorized");
    }

    const deletedTodo = await todo.deleteOne();

    res.status(200).json(deletedTodo);
  } catch (err) {
    error(err);
  }
});

module.exports = {
  getAllTodos,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
