const dotenv = require("dotenv");

const loadEnv = () => {
  let env;

  if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" });
    env = "production";
  } else {
    dotenv.config({ path: ".env.development" });
    env = "development";
  }

  return env;
};

module.exports = loadEnv;
