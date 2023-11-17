const utils = module.exports;
const { log, warn, error, success } = require("./logger");
const {
  generateToken,
  generateResetToken,
  sendResetEmail,
  validateResetToken,
} = require("./auth");
const { uploadAvatar } = require("./multer");

utils.log = log;
utils.success = success;
utils.warn = warn;
utils.error = error;
utils.loadEnv = require("./env");
utils.db = require("./db");
utils.generateToken = generateToken;
utils.generateResetToken = generateResetToken;
utils.sendResetEmail = sendResetEmail;
utils.validateResetToken = validateResetToken;
utils.uploadAvatar = uploadAvatar;
