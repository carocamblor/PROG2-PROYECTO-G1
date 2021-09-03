const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');
var indexController = {
    feed: function (req, res) {
        res.render('index', {})
    },
    results: function (req, res) {
        res.render('resultadoBusqueda', {})
    },
};

module.exports = indexController;