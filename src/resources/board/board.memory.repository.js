const memoryBoards = [];
const tasks = require('../tasks/tasks.service');

const getAll = async () => memoryBoards;

const get = async id => {
  const board = memoryBoards.filter(el => el.id === id)[0];
  if (!board) {
    throw new Error(`not found board for ${id}`);
  }
  return board;
};

const create = async user => {
  memoryBoards.push(user);
  return get(user.id);
};

const update = async (id, user) => {
  memoryBoards.map(elem => {
    if (elem.id === id) {
      Object.assign(elem, user);
    }
  });
  return get(id);
};

const remove = async id => {
  memoryBoards.map((el, index) => {
    if (id === el.id) {
      memoryBoards.splice(index, 1);
    }
  });

  const arr = await tasks.getAll();
  for (let i = 0; i < arr.length; i += 1) {
    if (id === arr[i].boardId) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  return;
};

module.exports = { getAll, get, create, update, remove };
