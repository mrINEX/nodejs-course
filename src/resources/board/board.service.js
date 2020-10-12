const boardsService = require('./board.memory.repository');

const getAll = () => boardsService.getAll();

const get = id => boardsService.get(id);

const create = user => boardsService.create(user);

const update = (id, user) => boardsService.update(id, user);

const remove = id => boardsService.remove(id);

module.exports = { getAll, get, create, update, remove };
