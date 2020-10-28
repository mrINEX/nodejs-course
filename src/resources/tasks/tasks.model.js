const mongoose = require('mongoose');
const uuid = require('uuid');

const taskScheme = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String
  },
  { versionKey: false }
);

const Task = mongoose.model('Task', taskScheme);

module.exports = Task;
