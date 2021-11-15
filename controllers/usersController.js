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
    //hay que implementar relaciones con el include association
    myProfile: function (req, res) {
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
            user_id: req.session.userLoggedOn.id,
            post_id: req.params.id
        }).then(like => {
            db.User.findByPk(req.params.id)
            .then(user => {
                res.redirect('/users/' + user.username);
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
                where: { user_id: req.session.userLoggedOn.id, post_id: req.params.id }
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
};

module.exports = usersController;