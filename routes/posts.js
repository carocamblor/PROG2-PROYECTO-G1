var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');

router.get('/newpost', postsController.newPost);

router.get('/:postid', postsController.detail);
router.post('/', indexController.list);

module.exports = router;