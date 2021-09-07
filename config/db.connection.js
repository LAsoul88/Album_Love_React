const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost:27017/albumlove';

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionStr}`);
});

mongoose.connection.on('error', (error) => {
  console.log(`Mongoose connection error`, error);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected`);
});