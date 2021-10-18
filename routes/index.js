var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); 

router.get('/', indexController.list); 

router.get('/login', indexController.login);
router.post('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/results', indexController.results);


module.exports = router; 