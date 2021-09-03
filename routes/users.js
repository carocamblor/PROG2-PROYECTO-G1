var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/userdetail', usersController.userDetail);

router.get('/myprofile', usersController.myProfile);

router.get('/editprofile', usersController.editProfile);

module.exports = router;
