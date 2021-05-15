const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

// map user fields to exclude secret fields like "password"
const getAll = async () => {
  const users = await usersRepo.getAll();

  return users.map(User.toResponse)
};

module.exports = { getAll };
