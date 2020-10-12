const memoryTasks = [];

const getAll = async () => memoryTasks;

const get = async id => {
  const board = memoryTasks.filter(el => el.id === id)[0];
  if (!board) {
    throw new Error('sdf');
  }
  return board;
};

const create = async user => {
  memoryTasks.push(user);
  return get(user.id);
};

const update = async (id, user) => {
  memoryTasks.map(elem => {
    if (elem.id === id) {
      Object.assign(elem, user);
    }
  });
  return get(id);
};

const remove = async id => {
  memoryTasks.map((el, index) => {
    if (id === el.id) {
      memoryTasks.splice(index, 1);
    }
  });
  return;
};

module.exports = { getAll, create, get, update, remove };
