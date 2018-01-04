const mongoose = require('mongoose');

mongoose.Promise = Promise;

export function connect() {
    mongoose.connect('mongodb://mis:mis2008@ds155747.mlab.com:55747/mis', {
    keepAlive: 1,
    useMongoClient: true,
  });
  return mongoose.connection;
}
