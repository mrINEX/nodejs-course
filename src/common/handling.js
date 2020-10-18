function handling(fn) {
  async function wrapper(req, res) {
    try {
      await fn.call(this, req, res);
    } catch (e) {
      res.status(404).send('Not Found');
    }
  }
  return wrapper;
}

module.exports = {
  handling
};
