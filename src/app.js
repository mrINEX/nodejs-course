const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const loginRouter = require('./resources/login/login.router');
const userRouter = require('./resources/users/user.router');
const tasksRouter = require('./resources/tasks/tasks.router');
const boardRouter = require('./resources/board/board.router');

const app = express();
const middlewareAuth = require('./resources/login/login.middleware');
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);

app.use(middlewareAuth);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

boardRouter.use('/:id/tasks', tasksRouter);

module.exports = app;
