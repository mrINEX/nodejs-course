const { MONGO_CONNECTION_STRING } = require('./config');
const mongoose = require('mongoose');
// const User = require('../resources/users/user.model');

function connectToDB(cb) {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log('We are connected to mongoDB.');
    // await User.create({ login: 'admin', password: 'admin' });
    cb();
  });
}

module.exports = {
  connectToDB
};
