const posts = require ('../data/posts');
const users = require ('../data/users');
const db = require ('../database/models');
const op = db.Sequelize.Op;
const moment = require('moment');

var usersController = {
    userDetail: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username
            },
            include: [{association: 'followers'}, {association: 'following'}]
        })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    },
                    order:[['createdAt','DESC']],
                    include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}, {association: 'likes'}]
                })
                    .then((posts) => {
                        for (let i = 0; i < posts.length; i++) {
                            const element = posts[i];
                            element.date = moment(element.createdAt).format('LL');
                        }
                        res.render('userDetail', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
    },
    myProfile: function (req, res) {
        if (req.session.userLoggedOn && req.session.userLoggedOn.username == req.params.username) {
        db.User.findOne({
            where: {
                username: req.params.username
            },
            include: [{association: 'followers'}, {association: 'following'}]
            })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    },
                    order:[['createdAt','DESC']],
                    include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}, {association: 'likes'}]
                })
                    .then((posts) => {
                        for (let i = 0; i < posts.length; i++) {
                            const element = posts[i];
                            element.date = moment(element.createdAt).format('LL');
                        }
                        res.render('myProfile', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
        } else {
            res.render('error', {error: 'Debes iniciar sesión para ver tu perfil.'})
        }
    },
    editProfile: function (req, res) {
        if (req.method == 'GET') {
            res.render('editProfile');
        } else if (req.method == 'POST') {
            if (req.file) {
            db.User.update({
                name: req.body.name,
                surname: req.body.surname, 
                biography: req.body.biography,
                profile_picture: req.file.filename
            }, { where: { username: req.session.userLoggedOn.username } }).then(()=> {
                res.redirect('/users/myprofile/' + req.session.userLoggedOn.username);
            }).catch(error => {
                return res.send(error);
            })
            } else {
                db.User.update({
                    name: req.body.name,
                    surname: req.body.surname, 
                    biography: req.body.biography,
                }, { where: { username: req.session.userLoggedOn.username } }).then(()=> {
                    res.redirect('/users/myprofile/' + req.session.userLoggedOn.username);
                }).catch(error => {
                    return res.send(error);
                })
            }

        }
        
    },
    follow: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/users/'+req.params.id);
        }
        db.Follow.create({
            follower_id: req.session.userLoggedOn.id,
            following_id: req.params.id
        }).then(follow => {
            db.User.findByPk(req.params.id)
            .then(user => {
                res.redirect('/users/' + user.username);
            })
        }).catch(error => {
            return res.send(error);
        })
    },
    unfollow: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/users/'+req.params.id);
        }
        db.Follow.destroy(
            {
                where: { follower_id: req.session.userLoggedOn.id, following_id: req.params.id }
            })
            .then(() => {
                db.User.findByPk(req.params.id)
                .then(user => {
                    res.redirect('/users/' + user.username);
                })
            }).catch(error => {
                return res.render(error);
            })
    },
    like: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.create({
            id_user: req.session.userLoggedOn.id,
            id_post: req.params.id
        }).then(like => {
            db.Post.findByPk(req.params.id, { include: [{ association: 'user' },] })
            .then(post => {
                res.redirect('/users/' + post.user.username);
            })
        }).catch(error => {
            return res.send(error);
        })
    },
    dislike: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.destroy(
            {
                where: { id_user: req.session.userLoggedOn.id, id_post: req.params.id }
            })
            .then(() => {
                db.Post.findByPk(req.params.id, { include: [{ association: 'user' },] })
                .then(post => {
                    res.redirect('/users/' + post.user.username);
                })
            }).catch(error => {
                return res.render(error);
            })
    },
    likeProfile: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/login');
        }
        db.Like.create({
            id_user: req.session.userLoggedOn.id,
            id_post: req.params.id
        }).then(like => {
                res.redirect('/users/myprofile/' + req.session.userLoggedOn.username);
        }).catch(error => {
            return res.send(error);
        })
    },
    dislikeProfile: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/login');
        }
        db.Like.destroy(
            {
                where: { id_user: req.session.userLoggedOn.id, id_post: req.params.id }
            })
            .then(() => {
                    res.redirect('/users/myprofile/' + req.session.userLoggedOn.username);
            }).catch(error => {
                return res.render(error);
            })
    },
    delete: function (req, res) {
        if (req.session.userLoggedOn && req.session.userLoggedOn.id == req.params.id) {
            db.User.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.clearCookie('user');
                req.session.userLoggedOn = null;
                res.redirect('/login'); 
            }).catch(error => {
                return res.send(error);
            })
        } else {
            res.redirect('/')
        }
    },
};

module.exports = usersController;