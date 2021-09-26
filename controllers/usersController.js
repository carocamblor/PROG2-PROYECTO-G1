const posts = require ('../data/posts');
const users = require ('../data/users');

var usersController = {
    userDetail: function (req, res) {
        var username = req.params.username;
        var user = users.findByUsername(username);
        var userPosts = posts.findByUsername(username);
        if (user) {
            res.render('userDetail', {user, userPosts});
        } else {
            res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
        }
    },
    myProfile: function (req, res) {
        var username = req.params.username;
        var user = users.findByUsername(username);
        var userPosts = posts.findByUsername(username);
        if (user) {
            res.render('myProfile', {user, userPosts});
        } else {
            res.render('error', { error: '¡Lo sentimos! No encontramos tu usuario.'});
        };
    },
    editProfile: function (req, res) {
        res.render('editProfile');
    },
};

module.exports = usersController;