const posts = require ('../data/posts');

const db = require ('../database/models');

var indexController = { 
    list: function (req, res) {
        db.posts.findAll()
        .then((posts) => {
            res.render ('index', {posts});
        })
        .catch((error) => {
            res.send(error);
        })
    },
    feed: function (req, res) { 
        res.render('index', {posts: posts.list})
    },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    },
    results: function (req, res) {
        res.render('searchResults', {search: req.query.search})
    },
};

module.exports = indexController;