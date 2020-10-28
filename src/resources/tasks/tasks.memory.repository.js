const Task = require('./tasks.model');

const getAll = async () => {
  return Task.find({});
};

const get = async id => {
  const task = await Task.findOne({ id }).exec();
  if (!task) throw new Error(`does not exist task: ${id}`);
  return task;
};

const create = async body => {
  const task = await Task.create(body);
  if (!task) throw new Error('task was not created');
  return task;
};

const update = async (id, body) => {
  const res = await Task.updateOne({ id }, body);
  if (!res.ok) throw new Error('task was not update');
  return get(id);
};

const remove = async id => {
  const res = await Task.deleteOne({ id });
  if (!res.ok) throw new Error('task was not delete');
  return 'success';
};

module.exports = { getAll, create, get, update, remove };
