const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "127.0.0.1";
const currentEnvironment = environment();
const mongoURI = getMongoURI(currentEnvironment);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(constants.paths.uploadDir));

// app.use("/api/auth", require("./server/routes/authRoutes"));

app.use(errorHandler);

app.listen(port, hostname, async () => {
  try {
    await connectToDB(mongoURI);
    success(`Server running: http://${hostname}:${port}`);
  } catch (err) {
    error(`Error starting the server: ${err.message}`);
  }
});
