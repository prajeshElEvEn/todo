const chalk = require("chalk");

const formatTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const day = date.getDate();
  const mon = date.getMonth();
  const year = date.getFullYear();
  const time = chalk.whiteBright.bold(
    `[${day}-${mon}-${year} | ${hour}:${min}:${sec}]`
  );
  return time;
};

module.exports = formatTime;
