var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); 

router.get('/', indexController.list);

router.all('/login', indexController.login);

router.all('/logout', indexController.logout);

router.all('/register', indexController.register);

router.get('/results', indexController.results);

module.exports = router; 