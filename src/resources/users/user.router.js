const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { handling } = require('../../common/handling');

router.route('/').get(
  handling(async (req, res) => {
    const users = await usersService.getAll();
    console.log('[route] get all users:', users);
    res.status(200).send(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  handling(async (req, res) => {
    const user = await usersService.get(req.params.id);
    console.log('[route] get user:', user);
    res.status(200).send(user);
  })
);

router.route('/').post(
  handling(async (req, res) => {
    const user = await usersService.create(req.body);
    console.log('[route] post user:', user);
    res.status(200).send(User.toResponse(user));
  })
);

router.route('/:id').put(
  handling(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body);
    console.log('[route] put user:', user);
    res.status(200).send(user);
  })
);

router.route('/:id').delete(
  handling(async (req, res) => {
    const user = await usersService.remove(req.params.id);
    console.log('[route] delete user:', user);
    res.sendStatus(200);
    // res.status(200).send(user);
  })
);

module.exports = router;
