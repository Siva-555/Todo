const { Router } = require("express");

const todoModel = require("../Models/todoModel");
const {
  postTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getTodo);

router.post("/", postTodo);

router.put("/", updateTodo);

router.delete("/", deleteTodo);

module.exports = router;
