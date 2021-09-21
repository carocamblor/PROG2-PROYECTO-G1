var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');

router.get('/detail/:postid', postsController.detail);

router.get('/newpost', postsController.newPost);

module.exports = router;