const tasksRepo = require('./tasks.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = (id, idTask) => tasksRepo.get(id, idTask);

const create = user => tasksRepo.create(user);

const update = (id, idTask, body) => tasksRepo.update(id, idTask, body);

const remove = id => tasksRepo.remove(id);

module.exports = { getAll, create, get, update, remove };
