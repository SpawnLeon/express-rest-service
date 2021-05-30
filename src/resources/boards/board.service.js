const boardRepo = require('./board.memory.repository');
const taskService = require('../tasks/task.service');

/**
 * Return all boards.
 * @returns {Promise<Array>} Array of board objects.
 */
const getAll = () => boardRepo.getAll();

/**
 * Add a Board repository.
 * @param {Object} boardData - board data for creating a Board.
 * @returns {Promise<Object>} Board object.
 */
const postBoard = (boardData) => boardRepo.postBoard(boardData);

/**
 * Get a Board by id.
 * @param {string} id - board id.
 * @returns {Promise<Object>} Board object.
 */
const getBoardById = (id) => boardRepo.getBoardById(id);

/**
 * Update a Board by a given id with a given data.
 * @param {string} id - Board id.
 * @param {Object} boardData -  board data for creating a Board..
 * @returns {Promise<Object|boolean>} Board object or undefined.
 */
const updateBoard = (id, boardData) => boardRepo.updateBoard(id, boardData);

/**
 * Delete a board by id.
 * @param {string} id - Board id.
 */
const removeBoard = async (id) => {
  await taskService.removeTasksFromBoard(id);
  return boardRepo.removeBoard(id);
};

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
