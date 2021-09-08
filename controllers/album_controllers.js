const express = require('express');
const router = express.Router();
const searchQuery = require('../credentials/spotify_search');
const getAlbum = require('../credentials/get_album');

router.get('/', async (req, res, next) => {
  try {
    console.log('==========');
    console.log(req.session.currentUser.email);
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

module.exports = router;