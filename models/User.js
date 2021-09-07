const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username required'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'password required']
    },
    recordCollection: [{
      type: String,
      default: []
    }],
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;