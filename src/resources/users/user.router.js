const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { handling } = require('../../common/handling');

router.route('/').get(
  handling(async (req, res) => {
    const users = await usersService.getAll();
    res.status(200).send(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  handling(async (req, res) => {
    const user = await usersService.get(req.params.id);
    res.status(200).send(user);
  })
);

router.route('/').post(
  handling(async (req, res) => {
    const user = await usersService.create(new User(req.body));
    res.status(200).send(User.toResponse(user));
  })
);

router.route('/:id').put(
  handling(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body);
    res.status(200).send(User.toResponse(user));
  })
);

router.route('/:id').delete(
  handling(async (req, res) => {
    const user = await usersService.remove(req.params.id);
    res.status(200).send(User.toResponse(user));
  })
);

module.exports = router;
