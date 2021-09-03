// falta requierir la data

var indexController = {
    feed: function (req, res) {
        res.render('index', {})
    },
    results: function (req, res) {
        res.render('resultadoBusqueda', {})
    },
};

module.exports = indexController;