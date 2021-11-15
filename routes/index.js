var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); 

router.get('/', indexController.list);

router.all('/login', indexController.login);

router.get('/logout', indexController.logout);

router.all('/register', indexController.register);

router.get('/results', indexController.results);

router.get('/results/:id/like', indexController.likeR);

router.get('/results/:id/dislike', indexController.dislikeR);

router.get('/feed/:id/like', indexController.like);

router.get('/feed/:id/dislike', indexController.dislike);

module.exports = router; 