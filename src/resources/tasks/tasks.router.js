const express = require('express');
const router = express.Router({ mergeParams: true });
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).send(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({ ...req.body, boardId: req.params.id })
  );
  res.status(200).send(task);
});

router.route('/:idTask').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.idTask);
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send('Not Found');
  }
});

router.route('/:idTask').put(async (req, res) => {
  const board = await tasksService.update(req.params.idTask, req.body);
  res.status(200).send(board);
});

router.route('/:idTask').delete(async (req, res) => {
  const task = await tasksService.remove(req.params.idTask);
  res.status(200).send(task);
});

module.exports = router;
