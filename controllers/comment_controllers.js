const express = require('express');
const router = express.Router();
const { User, Comment } = require('../models');

router.put('/:id', async (req, res, next) => {
  try {



  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
}); 