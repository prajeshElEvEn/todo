const chalk = require("chalk");
const formatTime = require("./formatTime");

const logType = (type, message, color) => {
  const time = formatTime();
  let coloredMessage;

  switch (color) {
    case "WhiteBright":
      coloredMessage = chalk.whiteBright(message);
      break;
    case "Green":
      coloredMessage = chalk.green(message);
      break;
    case "Red":
      coloredMessage = chalk.red(message);
      break;
    case "Yellow":
      coloredMessage = chalk.yellow(message);
      break;
    default:
      coloredMessage = message;
  }

  const prefix = chalk["bg" + color].bold(`[${type.toUpperCase()}]`);
  console.log(`${time} ${prefix} ${coloredMessage}`);
};

const log = (message) => logType("log", message, "WhiteBright");
const success = (message) => logType("success", message, "Green");
const error = (message) => logType("error", message, "Red");
const warn = (message) => logType("warn", message, "Yellow");

module.exports = { log, success, error, warn };
