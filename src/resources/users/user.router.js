const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { handling } = require('../../common/handling');
const { crypt } = require('./user.crypt');

router.route('/').get(
  handling(async (req, res) => {
    const users = await usersService.getAll();
    res.send(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  handling(async (req, res) => {
    const user = await usersService.get(req.params.id);
    res.send(User.toResponse(user));
  })
);

router.route('/').post(
  handling(async (req, res) => {
    const body = await crypt(req.body);
    const user = await usersService.create(body);
    res.status(200).send(User.toResponse(user));
  })
);

router.route('/:id').put(
  handling(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body);
    if (!user.nModified) {
      res.sendStatus(404);
    } else {
      const use = await usersService.get(req.params.id);
      res.status(200).send(User.toResponse(use));
    }
  })
);

router.route('/:id').delete(
  handling(async (req, res) => {
    const user = await usersService.remove(req.params.id);
    if (!user.deletedCount) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
);

module.exports = router;
