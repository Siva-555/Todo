require("dotenv").config();
require("./src/database/config");

const express = require("express");
const todoRoutes = require("./src/routes/todoRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
  // console.log("req - ", req);
  console.log(req.method, req.path);
  next();
});

app.use("/api/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
