const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users'); 
//requerimos los modulos para usar la data de ahi

var indexController = { //creamos objeto literal que va a tener la logica
    feed: function (req, res) { 
        res.render('index', {posts: dataPost.list})
    },
    results: function (req, res) { //la propiedad results hace que cuando haya un requerimiento responda en la pagina searchResults
        res.render('searchResults', {})
    },
};

module.exports = indexController;
//exportamos el controlador para poder usarlo en las rutas