var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');

router.get('/postdetail/postid/:postid', postsController.detail);

router.get('/newpost', postsController.newPost);

module.exports = router;