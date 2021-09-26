const posts = require ('../data/posts');

var indexController = { 
    feed: function (req, res) { 
        res.render('index', {posts: posts.list})
    },
    login: function (req, res) {
        res.render('login', {})
    },
    register: function (req, res) {
        res.render('register', {})
    },
    results: function (req, res) {
        res.render('searchResults', {search: req.query.search})
    },
};

module.exports = indexController;