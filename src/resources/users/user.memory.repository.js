const USERS = [];

const getAll = async () => USERS;

const createUser = async (userData) => {
  USERS.push(userData);
  return userData;
};

const getUser = async (id) => USERS.find(user => user.id === id);

module.exports = { getAll, createUser,getUser };
