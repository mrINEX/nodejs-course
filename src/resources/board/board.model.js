const mongoose = require('mongoose');
const uuid = require('uuid');

const boardScheme = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    title: String,
    columns: [
      {
        id: {
          type: String,
          default: uuid
        },
        title: { type: String },
        order: { type: Number }
      }
    ]
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardScheme);

module.exports = Board;
