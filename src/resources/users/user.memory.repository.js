const memoryUsers = [];

const getAll = async () => memoryUsers;

const get = async id => memoryUsers.filter(user => user.id === id);

const create = async user => {
  memoryUsers.push(user);
  return get(user.id);
};

const update = async (id, user) => {
  memoryUsers.map(elem => {
    if (elem.id === id) {
      return Object.assign(elem, user);
    }
  });
  return get(user.id);
};

module.exports = { getAll, create, get, update };
