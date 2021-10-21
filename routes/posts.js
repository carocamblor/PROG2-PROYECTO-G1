var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');

router.post('/publish', postsController.store);
//router.get('/publish', postsController.publish);
router.get('/newpost', postsController.newPost);
router.get('/:postid', postsController.detail);
router.post('/:postid', postsController.comment);
router.post('/:postid/edit', postsController.update); //manda a base de datos 
router.get('/:postid/edit', postsController.edit); //muestra vista edit post
router.post('/:postid/delete', postsController.delete);



module.exports = router;