const boardRepo = require('./board.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = () => boardRepo.getAll();

const postBoard = (boardData) => boardRepo.postBoard(boardData);

const getBoardById = (id) => boardRepo.getBoardById(id);

const updateBoard = (id, boardData) => boardRepo.updateBoard(id, boardData);

const removeBoard = async (id) => {
  await taskService.removeTasksFromBoard(id);
  return boardRepo.removeBoard(id);
};

module.exports = { getAll, postBoard, getBoardById, updateBoard, removeBoard };
