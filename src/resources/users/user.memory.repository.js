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
  const resT = await Task.updateOne({ userId: id }, { userId: null });
  const res = await User.deleteOne({ id });
  console.log('USER - Task update:', resT);
  console.log('USER - Board delete:', res);

  if (!res.deletedCount) throw new Error('user was not deleted');
  // if (!resT.nModified) throw new Error('user`s tasks was not update');
  return res;
};

module.exports = { getAll, create, get, update, remove };
