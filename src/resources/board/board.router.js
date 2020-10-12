const router = require('express').Router();
const Board = require('./board.model');
const Task = require('../tasks/tasks.model');
const tasksService = require('../tasks/tasks.service');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).send(boards);
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.status(200).send(board);
  } catch (e) {
    res.status(404).send('Not Found');
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(new Board(req.body));
  res.status(200).send(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.status(200).send(board);
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.remove(req.params.id);
  res.status(200).send(board);
});

// tasks block

router.route('/:id/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).send(tasks);
});

router.route('/:id/tasks').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({ ...req.body, boardId: req.params.id })
  );
  res.status(200).send(task);
});

router.route('/:id/tasks/:idTask').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.idTask);
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send('Not Found');
  }
});

router.route('/:id/tasks/:idTask').put(async (req, res) => {
  const board = await tasksService.update(req.params.idTask, req.body);
  res.status(200).send(board);
});

router.route('/:id/tasks/:idTask').delete(async (req, res) => {
  const task = await tasksService.remove(req.params.idTask);
  res.status(200).send(task);
});

module.exports = router;
