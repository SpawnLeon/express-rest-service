const { v4: uuid } = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'title',
    order = 'order',
    description = 'description',
    userId = 1,
    boardId = 1,
    columnId = 1
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
