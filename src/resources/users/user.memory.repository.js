const boardsAndTasks = require('../tasks/tasks.service');
const { MONGO_CONNECTION_STRING } = require('../../common/config');
const memoryUsers = [];

// ------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
  id: String,
  name: String,
  login: String
});
const User = mongoose.model('User', userScheme);
// ------------------------------------------------------

const getAll = async () => memoryUsers;

const get = async id => {
  const user = memoryUsers.filter(el => el.id === id)[0];
  if (!user) {
    throw new Error(`not found user for ${id}`);
  }
  return user;
};

const create = async inputUser => {
  // memoryUsers.push(user);
  // return get(user.id);

  const user = new User(inputUser);
  // подключение
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  user.save
    .then(doc => {
      console.log('Сохранен объект', doc);
      mongoose.disconnect(); // отключение от базы данных
    })
    .catch(err => {
      console.log('Error: ', err);
      mongoose.disconnect();
    });
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
