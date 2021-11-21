var express = require('express');
var router = express.Router();
const multer = require ('multer');
const upload = multer ({dest: 'public/images/'})
var postsController = require('../controllers/postsController');

router.post('/publish', upload.single('picture'), postsController.store);

router.get('/newpost', postsController.newPost);

router.get('/:postid/edit', postsController.edit); 

router.post('/:postid/edit', upload.single('picture'), postsController.update); 

router.post('/:postid/delete', postsController.delete);

router.get('/:postid', postsController.detail);

router.post('/:postid', postsController.comment);

router.get('/:id/like', postsController.likeDetail);

router.get('/:id/dislike', postsController.dislikeDetail);

module.exports = router;