const mongoose = require('mongoose');
const uuid = require('uuid');

const userScheme = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid
    },
    name: String,
    login: String,
    password: String
  },
  { versionKey: false }
);

userScheme.static('toResponse', user => {
  const { _id, id, name, login } = user;
  return { _id, id, name, login };
});

const User = mongoose.model('User', userScheme);

module.exports = User;
