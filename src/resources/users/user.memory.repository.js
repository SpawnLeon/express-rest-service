const { v4: uuid } = require('uuid');
const User = require('./user.model');

const USERS = [];

const getAll = async () => USERS;

const postUser = async (userData) => {
  USERS.push(new User({ ...userData, id: uuid() }));
  return USERS[USERS.length - 1];
};

const getUser = async (id) => USERS.find(user => user.id === id);

const updateUser = async (id, userData) => {
  const user = await getUser(id);
  const index = USERS.indexOf(user);
  USERS[index] = { ...user, ...userData };
  return USERS[index];
};

const removeUser = async (id) => {
  const user = await getUser(id);
  const index = USERS.indexOf(user);
  USERS.splice(index, 1);
  return user;
};

module.exports = { getAll, postUser, getUser, updateUser, removeUser };
