var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/userdetail/username/:username', usersController.userDetail);

router.get('/myprofile/username/:username', usersController.myProfile);

router.get('/editprofile', usersController.editProfile);

module.exports = router;
