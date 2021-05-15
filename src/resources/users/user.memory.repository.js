const USERS = [];

const getAll = async () => USERS;

const createUser = async (userData) => {
  USERS.push(userData);
  return userData;
};

const getUser = async (id) => USERS.find(u => u.id === id);

const updateUser = async (id, { login, name, password }) => {
  const user = await getUser(id);
  if (!user) {
    return null;
  }
  const idx = USERS.findIndex(u => u.id === id);
  USERS[idx] = { ...user, login, name, password };
  return USERS[idx];
};

module.exports = { getAll, createUser, getUser, updateUser };
