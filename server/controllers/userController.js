const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { logger } = require("../utilities");
const { error } = logger;

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Fill in all the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      throw new Error();
    }
  } catch (err) {
    error(err);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const checkPassword = await bcrypt.compare(password, user.password);

    if (user && checkPassword) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    error(err);
  }
});

const getUser = asyncHandler(async (req, res) => {
  try {
    const { _id, name, email, avatar } = await User.findById(req.user.id);
    res.status(200).json({
      id: _id,
      name,
      email,
      avatar,
    });
  } catch (err) {
    error(err);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    avatar: updatedUser.avatar,
  });

  try {
  } catch (err) {
    error(err);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    const deletedUser = await user.deleteOne();

    res.status(200).json({
      id: deletedUser._id,
      name: deletedUser.name,
      email: deletedUser.email,
      avatar: deletedUser.avatar,
    });
  } catch (err) {
    error(err);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
};
