const express = require("express");
const dotenv = require("dotenv");
const { logger, db } = require("./server/utilities");
const { success } = logger;
dotenv.config();

const app = express();
const port = process.env.PORT || 5002;

app.use("/api/user", require("./server/routes/userRoutes"));

app.listen(port, async () => {
  await db();
  success(`Server running on port ${port}`);
});
