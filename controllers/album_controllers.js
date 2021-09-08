const express = require('express');
const router = express.Router();
const searchQuery = require('../credentials/spotify_search');
const getAlbum = require('../credentials/get_album');
const { Comment } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    
    if (!req.query.search) {
      const context = {
        albums: null,
        user: req.session.currentUser,
      };
      
      return res.render('albums/index', context);
    }

    const foundAlbums = await searchQuery(req.query.search);
    const context = {
      albums: foundAlbums,
      user: req.session.currentUser,
    };
    
    return res.render('albums/index', context);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    
    const foundAlbum = await getAlbum(req.params.id);
    
    const context = {
      album: foundAlbum,
      user: req.session.currentUser,
    };

    return res.render('albums/show', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const createdComment = await Comment.create({
    content: req.body.content,
    timestamp: new Date().toLocaleTimeString(),
    userId: req.session.currentUser.id,
    albumId: req.params.id,
    });

    console.log(createdComment);
    return res.redirect(`/albums/${createdComment.albumId}`);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;