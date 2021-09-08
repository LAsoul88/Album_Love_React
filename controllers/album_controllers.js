const express = require('express');
const router = express.Router();
const searchQuery = require('../credentials/spotify_search');
const getAlbum = require('../credentials/get_album');

router.get('/', async (req, res, next) => {
  try {

    if (!req.query.search) {
      const context = {
        albums: null,
      };
      return res.render('albums/index', context);
    }

    const foundAlbums = await searchQuery(req.query.search);
    const context = {
      albums: foundAlbums,
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
    };

    return res.render('albums/show', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;