var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); 

router.get('/', indexController.list); 
router.all('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/results', indexController.results);
router.post('/register', indexController.store);


module.exports = router; 