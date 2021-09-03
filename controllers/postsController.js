const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');

var postsController = {
    detail: function (req, res) {
        res.render('postDetail', {})
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;