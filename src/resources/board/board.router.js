const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const { handling } = require('../../common/handling');

router.route('/').get(
  handling(async (req, res) => {
    const boards = await boardsService.getAll();
    res.status(200).send(boards);
  })
);

router.route('/:id').get(
  handling(async (req, res) => {
    const board = await boardsService.get(req.params.id);
    res.status(200).send(board);
  })
);

router.route('/').post(
  handling(async (req, res) => {
    const board = await boardsService.create(new Board(req.body));
    res.status(200).send(board);
  })
);

router.route('/:id').put(
  handling(async (req, res) => {
    const board = await boardsService.update(req.params.id, req.body);
    res.status(200).send(board);
  })
);

router.route('/:id').delete(
  handling(async (req, res) => {
    const board = await boardsService.remove(req.params.id);
    res.status(200).send(board);
  })
);

module.exports = router;
