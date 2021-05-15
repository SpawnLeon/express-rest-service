const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const createUser = ({ name, login, password }) => {
  const user = new User({ name, login, password });
  return usersRepo.createUser(user);
};

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, userData) => usersRepo.updateUser(id, userData)

module.exports = { getAll, createUser, getUser, updateUser };
