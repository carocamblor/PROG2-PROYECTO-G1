const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users'); 
//requerimos los modulos para usar la data de ahi

var indexController = {
    feed: function (req, res) {
        res.render('index', {posts: dataPost.list})
    },
    results: function (req, res) {
        res.render('searchResults', {})
    },
};

module.exports = indexController;
//exportamos el controlador para poder usarlo en las rutas