const { v4: uuid } = require('uuid');
const Task = require('./task.model');

let TASKS = [];

const getAll = async () => TASKS;

const postTask = async (taskData, boardId) => {
  TASKS.push(new Task({ ...taskData, id: uuid(), boardId }));
  return TASKS[TASKS.length - 1];
};

const getTaskById = async (id) => TASKS.find(task => task.id === id);

const updateTask = async (id, taskData) => {
  const task = await getTaskById(id);
  const index = TASKS.indexOf(task);
  TASKS[index] = { ...task, ...taskData };
  return TASKS[index];
};

const removeTask = async (id) => {
  const task = await getTaskById(id);
  const index = TASKS.indexOf(task);
  TASKS.splice(index, 1);
  return task;
};

const removeTasksFromBoard = async (boardId) => {
  TASKS = TASKS.filter(t => t.boardId !== boardId);
};

const removeTasksFromUser = async (userId) => {
  TASKS = TASKS.map(task =>
    task.userId === userId
      ? { ...task, userId: null }
      : task
  );
};

module.exports = {
  getAll,
  postTask,
  getTaskById,
  updateTask,
  removeTask,
  removeTasksFromBoard,
  removeTasksFromUser
};
