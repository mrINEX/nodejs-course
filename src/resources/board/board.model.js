const uuid = require('uuid');

class Columns {
  constructor({ id = uuid(), title = 'string', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'Title', columns = new Columns() } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
