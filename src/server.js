const { PORT } = require('./common/config');
const { recordError } = require('./common/handling');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process.on('uncaughtException', err => {
  const template = `Uncaught Exception at: ${err}\n\n`;
  recordError(template);

  console.log(`Uncaught Exception at: ${err}`);
  process.exitCode = 1;
});

process.on('unhandledRejection', reason => {
  const template = `Unhandled Rejection at: '${reason}\n\n`;
  recordError(template);

  console.log('Unhandled Rejection at: ', reason.name, reason.message);
  process.exitCode = 1;
});
