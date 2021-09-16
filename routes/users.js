var express = require('express'); //
var router = express.Router(); //
var usersController = require('../controllers/usersController');
//requerimos el controlador para poder ponerle la logica a las rutas

router.get('/myprofile/:username', usersController.myProfile);
//Cuando hagamos localhost:300/users/myprofile/username/:username vemos el detalle del usuario pero en vez de follow aparece edit profile

router.get('/:username', usersController.userDetail);
//Cuando hagamos localhost:300/users/userdetail/username/:username vemos el detalle del usuario

router.get('/editprofile', usersController.editProfile);
//Cuando hagamos localhost:300/users/editprofile vemos el formulario para editar el perfil


module.exports = router; 
//exportamos la ruta
