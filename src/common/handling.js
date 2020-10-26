const fs = require('fs');

function recordError(template) {
  fs.appendFile('./src/common/error.log', template, err => {
    if (err) {
      console.error('Error:', 'error record');
      throw new Error('error record');
    }
  });
}

function handling(fn) {
  return async (req, res) => {
    try {
      const timeDate = `time: ${new Date()}`;
      const url = `url: ${`http://localhost:4000${req.originalUrl}`}`;
      const query = `query: ${JSON.stringify(req.query, null, 2)}`;
      const body = `body: ${JSON.stringify(req.body, null, 2)}`;

      const logging = `${timeDate}\n${url}\n${query}\n${body}\n\n`;

      fs.appendFile('./src/common/logging.log', logging, err => {
        if (err) {
          console.error('Error:', 'logging record');
          throw new Error('logging record');
        }
      });

      await fn.call(this, req, res);
    } catch (e) {
      const template = `${e}\n\n`;

      recordError(template);

      res.status(404).send('Not Found');
    }
  };
}

function handlingLast(err, req, res, next) {
  console.error('Internal Server Error');
  const template = `Internal Server Error: ${err}\n\n`;

  recordError(template);

  res.status(500).send('Internal Server Error');
  next();
}

module.exports = {
  handling,
  handlingLast,
  recordError
};
