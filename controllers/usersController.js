const posts = require ('../data/posts');
const users = require ('../data/users');
const db = require ('../database/models');
const op = db.Sequelize.Op;

var usersController = {
    userDetail: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username
            }
        })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    }
                })
                    .then((posts) => {
                        res.render('userDetail', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
    },
    myProfile: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username
            }
        })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    }
                })
                    .then((posts) => {
                        res.render('myProfile', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
    },
    editProfile: function (req, res) {
        res.render('editProfile');
    },
};

module.exports = usersController;