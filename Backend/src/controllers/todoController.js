const todoModel = require("../Models/todoModel");

const postTodo = async (req, res) => {
  try {
    const response = await todoModel.create(req.body);
    console.log("post", response);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const response = await todoModel.findById(req.query.id).exec();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ msg: "No Todo to retrieve" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const response = await todoModel.findByIdAndDelete(req.query.id).exec();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ msg: "No Todo to delete" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    const response = await todoModel
      .findByIdAndUpdate(req.query.id, req.body)
      .exec();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ msg: "No Todo to update" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
