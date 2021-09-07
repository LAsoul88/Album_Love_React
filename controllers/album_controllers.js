const express = require('express');
const router = express.Router();
const searchQuery = require('../credentials/spotify_auth');

router.get('/', async (req, res, next) => {
  try {
    const foundAlbums = await searchQuery();

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

module.exports = router;