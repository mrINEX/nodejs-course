const router = require('express').Router();
const Board = require('./board.model');
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

module.exports = router;
