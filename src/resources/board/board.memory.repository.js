const Board = require('./board.model');
const Task = require('../tasks/tasks.model');

const getAll = async () => {
  return Board.find({});
};

const get = async id => {
  const board = await Board.findOne({ id }).exec();
  if (!board) throw new Error(`does not exist board: ${id}`);
  return board;
};

const create = async body => {
  const board = await Board.create(body);
  if (!board) throw new Error('was not created');
  return board;
};

const update = async (id, body) => {
  const res = await Board.updateOne({ id }, body);
  if (!res.ok) throw new Error('board was not update');
  return get(id);
};

const remove = async id => {
  const res = await Board.deleteOne({ id });
  if (!res.deletedCount) throw new Error('board was not delete');

  // await Task.deleteOne({ boardId: id });
  await Task.deleteMany({ boardId: id });
  return res;
};

module.exports = { getAll, get, create, update, remove };
