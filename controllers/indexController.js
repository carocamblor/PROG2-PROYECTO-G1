const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');
var indexController = {
    feed: function (req, res) {
        res.render('index', {posts: dataPost.list})
    },
    results: function (req, res) {
        res.render('searchResults', {})
    },
};

module.exports = indexController;