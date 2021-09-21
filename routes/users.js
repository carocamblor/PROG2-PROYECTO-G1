var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/myprofile/:username', usersController.myProfile);

router.get('/editprofile', usersController.editProfile);

router.get('/:username', usersController.userDetail);

module.exports = router; 
