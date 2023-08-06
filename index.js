const express = require("express");
const dotenv = require("dotenv");
const { logger, db } = require("./server/utilities");
const { errorHandler } = require("./server/middlewares/errorMiddleware");
const { success } = logger;
dotenv.config();

const app = express();
const port = process.env.PORT || 5002;
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", require("./server/routes/userRoutes"));
app.use("/api/todo", require("./server/routes/todoRoutes"));

app.use(errorHandler);

app.listen(port, async () => {
  await db();
  success(`Server running on port ${port}`);
});
