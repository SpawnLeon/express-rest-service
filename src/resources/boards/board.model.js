const { v4: uuid } = require('uuid');

/**
 * Board class.
 */
class Board {
  /**
   * Board constructor.
   * @param {string} id - instance id.
   * @param {string} title - board title.
   * @param {Array} columns - board column.
   */
  constructor({
    id = uuid(),
    title = 'title',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
