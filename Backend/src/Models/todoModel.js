const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  description: String,
  active: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", todoSchema);
