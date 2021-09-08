const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

router.get('/register', (req, res) => {
  return res.render('auth/register');
});

router.get('/login', (req, res) => {
  return res.render('auth/login');
});

router.post('/register', async (req, res) => {
  try {

    const foundUser = await User.exists({
      $or: [
        { email: req.body.email },
        { username: req.body.username }
      ],
    });
    if (foundUser) {
      return res.redirect('/login');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const newUser = await User.create(req.body);
    return console.log(newUser);

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});


module.exports = router;
