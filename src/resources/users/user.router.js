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
  }
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  if (!user) {
    res.statusCode = 400;
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if (!user) {
    res.statusCode = 404;
  } else {
    res.statusCode = 204;
  }
});

module.exports = router;
