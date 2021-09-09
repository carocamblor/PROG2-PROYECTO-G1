var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController'); //requerimos el controlador para poder aplicarlo en las rutas

router.get('/', indexController.feed); 
// cuando en ternet hagamos localhot:300/ va a mostrar lo que esta en indexcontroller.feed (index controller es el controlador y feed la propiedad)

router.get('/results', indexController.results);
//cuando hagamos localhot:300/results nos va a mostrar lo que esta en indexcontroller.feed (index controller es el controlador y results la propiedad)
//Muestra el resultado de la busqueda

module.exports = router; 
//exportamos la ruta
