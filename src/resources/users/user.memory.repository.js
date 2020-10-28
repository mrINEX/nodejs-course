const User = require('./user.model');
const Task = require('../tasks/tasks.model');

const getAll = async () => {
  return User.find({});
};

const get = async id => {
  return User.findOne({ id });
};

const create = async body => {
  return User.create(body);
};

const update = async (id, body) => {
  return User.updateOne({ id }, body);
};

const remove = async id => {
  const res = await User.deleteOne({ id });
  if (!res.deletedCount) throw new Error('user was not deleted');

  await Task.updateOne({ userId: id }, { userId: null });
  return res;
};

module.exports = { getAll, create, get, update, remove };
