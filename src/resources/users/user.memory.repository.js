// const boardsAndTasks = require('../tasks/tasks.service');
const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const get = async id => {
  const user = await User.findOne({ _id: id }).exec();
  console.log('USER [get id]:', user, typeof user);
  if (!user) throw new Error(`does not exist user: ${id}`);
  return user;
};

const create = async body => {
  const user = await User.create(body);
  console.log('USER: [create]', user, typeof user);
  if (!user) throw new Error('was not created');
  return user;
};

const update = async (id, body) => {
  const res = await User.updateOne({ _id: id }, body);
  if (!res.ok) throw new Error('was not update');
  return get(id);
};

const remove = async id => {
  const res = await User.deleteOne({ _id: id });
  if (!res.ok) throw new Error('was not delete');
  return res.ok;
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
