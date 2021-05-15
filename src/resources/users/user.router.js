const router = require('express').Router();
const usersService = require('./user.service');
const User = require('./user.model');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.statusCode = 201;
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.statusCode = 404;
    res.json({ message: 'User not found' });
  }
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  if (!user) {
    res.statusCode = 400;
    res.json({ message: 'Bad request' });
  } else {
    res.json(User.toResponse(user));
  }
});

module.exports = router;
