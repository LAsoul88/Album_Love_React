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



module.exports = router;
