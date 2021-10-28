var express = require('express');
var router = express.Router();
const multer = require ('multer');
const upload = multer ({dest: 'public/images/'})
var postsController = require('../controllers/postsController');

//router.get ('/publish', postsController.publish); no esta en controlador

router.post('/publish', upload.single('picture') , postsController.store);

router.get('/newpost', postsController.newPost);

router.get('/:postid/edit', postsController.edit); //muestra vista edit post

router.post('/:postid/edit', postsController.update); //manda a base de datos

router.post('/:postid/delete', postsController.delete);

router.get('/:postid', postsController.detail);

router.post('/:postid', postsController.comment);

module.exports = router;