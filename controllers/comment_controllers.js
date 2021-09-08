const express = require('express');
const router = express.Router();
const { User, Comment } = require('../models');

/* router.post('/', (req, res) => {
  const createdComment = await Comment.create({
    content: req.body.content,
    timestamp: new Date().toLocaleTimeString(),
    userId: req.session.currentUser.id,

  });
}); */