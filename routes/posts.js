var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController');
//requerimos el controlador para poder ponerle la logica a las rutas

router.get('/detail/:postid', postsController.detail);
//cuando hagamos localhost:300/posts/postdetail/postid/:postid (este ultimo es un id) nos va a mostrar el detalle de un posteo

router.get('/newpost', postsController.newPost);
//cuando hagamos localhost:300/posts/newpost vamos a ver los nuevos posteos

module.exports = router;
//exportamos la ruta 