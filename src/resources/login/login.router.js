const router = require('express').Router();
const { handling } = require('../../common/handling');
const loginService = require('./login.service');

router.route('/').post(
  handling(async (req, res) => {
    const { login, id } = req.body;
    const user = loginService.getUser(login);
    if (!user) {
      res.status(403).send('Forbidden');
    } else {
      res.status(200).json({ token: loginService.createToken(login, id) });
    }
  })
);

module.exports = router;
