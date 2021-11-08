var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/myprofile/:username', usersController.myProfile);

router.all('/editprofile', usersController.editProfile);

router.get('/:username', usersController.userDetail);

router.get('/:id/follow', usersController.follow);

router.get('/:id/unfollow', usersController.unfollow);
module.exports = router; 