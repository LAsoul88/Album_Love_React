const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/:id', async (req, res, next) => {
  try {

    const foundUser = await User.findOne({ 
      _id: req.params.id 
    });

    const context = {
      user: foundUser,
    };

    return res.render('users/show', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.session.currentUser.id },
      { $push: {
        recordCollection: req.body.recordCollection }}
    );

    return res.redirect(`/albums/${req.body.recordCollection}`);
    
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});


module.exports = router;