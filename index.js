const express = require("express");
const dotenv = require("dotenv").config();
const { logger, db } = require("./server/utilities");
const { success } = logger;
db();

const app = express();
const port = process.env.PORT || 5002;

app.listen(port, () => {
  success(`Server running on port ${port}`);
});
