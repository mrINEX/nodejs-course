// const boardsAndTasks = require('../tasks/tasks.service');
const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const get = async id => {
  return User.findOne({ _id: id });
};

const create = async user => {
  return User.create(user);
};

const update = async (id, user) => {
  return User.updateOne({ _id: id }, user);
};

const remove = async id => {
  return User.deleteOne({ _id: id });

  // const user = memoryUsers.map((el, index) => {
  //   if (id === el.id) {
  //     memoryUsers.splice(index, 1);
  //   }
  // });

  // const arr = await boardsAndTasks.getAll();
  // arr.map(el => {
  //   if (id === el.userId) {
  //     el.userId = null;
  //   }
  // });
  // return user;
};

module.exports = { getAll, create, get, update, remove };
