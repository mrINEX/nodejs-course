const router = require('express').Router();
const User = require('./user.model');
const Task = require('../tasks/tasks.model');
const usersService = require('./user.service');
const { handling } = require('../../common/handling');

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
    const user = await usersService.create(req.body);
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
      await Task.updateOne({ userId: req.params.id }, { userId: null });
      const use = await User.findOne({ id: req.params.id });
      res.status(200).send(use);
    }
  })
);

module.exports = router;
