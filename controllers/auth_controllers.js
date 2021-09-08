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
    return res.redirect('/login');

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

router.post('/login', async (req, res) => {
  try {

    const foundUser = await User.findOne({
      email: req.body.email
    });
    if (!foundUser) {
      return res.redirect('/register');
    }

    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) {
      return console.log('no match');
    }

    return console.log(foundUser);
    // res.redirect(`/users/${foundUser._id}`);

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
})


module.exports = router;
