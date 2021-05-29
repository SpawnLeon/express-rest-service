const { v4: uuid } = require('uuid');
const Board = require('./board.model');

const BOARDS = [];

/**
 * Returns all boards.
 * @async
 * @returns {Promise<Array>} Array of board objects.
 */
const getAll = async () => BOARDS;

/**
 * Add a Board to memory repository.
 * @async
 * @param {Object} boardData - instance of a Board class.
 * @returns {Promise<Object>} Board instance.
 */
const postBoard = async (boardData) => {
  BOARDS.push(new Board({ ...boardData, id: uuid() }));
  return BOARDS[BOARDS.length - 1];
};

/**
/**
 * Get Board by id.
 * @async
 * @param {string} id - board id.
 * @returns {Promise<Object>} Board object.
 */
const getBoardById = async (id) => BOARDS.find(board => board.id === id);

/**
 * Update a Board by a given id with a given data.
 * @async
 * @param {string} id - Board id.
 * @param {Object} boardData - instance of a Board class.
 * @returns {Promise<Object|boolean>} Board object or false in case of id absence.
 */
const updateBoard = async (id, boardData) => {
  const board = await getBoardById(id);
  const index = BOARDS.indexOf(board);
  BOARDS[index] = { ...board, ...boardData };
  return BOARDS[index];
};

/**
 * Delete a Board by given id.
 * @async
 * @param {string} id - Board id.
 */
const removeBoard = async (id) => {
  const board = await getBoardById(id);
  const index = BOARDS.indexOf(board);
  BOARDS.splice(index, 1);
  return board;
};

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
