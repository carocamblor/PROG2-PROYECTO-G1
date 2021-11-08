var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); 

router.get('/', indexController.list);

router.all('/login', indexController.login);

router.get('/logout', indexController.logout);

router.all('/register', indexController.register);

router.get('/results', indexController.results);

router.get('/feed/:id/like', controller.like);
router.get('/feed/:id/dislike', controller.dislike);
module.exports = router; 