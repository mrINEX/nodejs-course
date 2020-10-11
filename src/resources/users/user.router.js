const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.json(user.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(new User(req.body));
  res.json(user.map(User.toResponse));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.json(user.map(User.toResponse));
});

module.exports = router;
