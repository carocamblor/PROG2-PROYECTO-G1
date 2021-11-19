var express = require('express');
var router = express.Router();
const multer = require ('multer');
const upload = multer ({dest: 'public/images/'})
var usersController = require('../controllers/usersController');

router.get('/:id/like', usersController.like);

router.get('/:id/dislike', usersController.dislike);

router.get('/myprofile/:id/like', usersController.likeProfile);

router.get('/myprofile/:id/dislike', usersController.dislikeProfile);

router.get('/myprofile/:username', usersController.myProfile);

router.all('/editprofile', upload.single('profile_picture'), usersController.editProfile);

router.post('/myprofile/delete/:id', usersController.delete);

router.get('/:username', usersController.userDetail);

router.post('/:id/follow', usersController.follow);

router.post('/:id/unfollow', usersController.unfollow);



module.exports = router; 