const posts = require ('../data/posts');
const users = require ('../data/users'); 
const comments = require('../data/comments')
//requerimos los modulos para usar la data de ahi

var indexController = { //creamos objeto literal que va a tener la logica
    feed: function (req, res) { 
        res.render('index', {posts: posts.list})
    },
    login: function (req, res) {
        res.render('login', {})
    },
    register: function (req, res) {
        res.render('register', {})
    },
    results: function (req, res) { //la propiedad results hace que cuando haya un requerimiento responda en la pagina searchResults
        res.render('searchResults', {})
    },
};

module.exports = indexController;
//exportamos el controlador para poder usarlo en las rutas