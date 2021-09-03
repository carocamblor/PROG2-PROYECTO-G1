var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');

router.get('/detail', postsController.detail);

router.get('/create', postsController.create);

module.exports = router;