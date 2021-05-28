const { v4: uuid } = require('uuid');
const Board = require('./board.model');

const BOARDS = [];

const getAll = async () => BOARDS;
const postBoard = async (boardData) => {
  BOARDS.push(new Board({ ...boardData, id: uuid() }));
  return BOARDS[BOARDS.length - 1];
};
const getBoardById = async (id) => BOARDS.find(board => board.id === id);

const updateBoard = async (id, boardData) => {
  const board = await getBoardById(id);
  const index = BOARDS.indexOf(board);
  BOARDS[index] = { ...board, ...boardData };
  return BOARDS[index];
};

const removeBoard = async (id) => {
  const board = await getBoardById(id);
  const index = BOARDS.indexOf(board);
  BOARDS.splice(index, 1);
  return board;
};

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
