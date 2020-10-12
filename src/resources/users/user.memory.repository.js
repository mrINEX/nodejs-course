const boardsAndTasks = require('../tasks/tasks.service');
const memoryUsers = [];

const getAll = async () => memoryUsers;

const get = async id => memoryUsers.filter(el => el.id === id)[0];

const create = async user => {
  memoryUsers.push(user);
  return get(user.id);
};

const update = async (id, user) => {
  memoryUsers.map(elem => {
    if (elem.id === id) {
      Object.assign(elem, user);
    }
  });
  return get(id);
};

const remove = async id => {
  const user = memoryUsers.map((el, index) => {
    if (id === el.id) {
      memoryUsers.splice(index, 1);
    }
  });

  const arr = await boardsAndTasks.getAll();
  arr.map(el => {
    if (id === el.userId) {
      el.userId = null;
    }
  });
  return user;
};

module.exports = { getAll, create, get, update, remove };
