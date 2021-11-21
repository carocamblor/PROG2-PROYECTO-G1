const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const moment = require('moment');

var indexController = {
    login: async function (req, res) {
        if (req.method == 'GET') {
            res.render('login');
        } else if (req.method == 'POST'){
            var user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user && bcrypt.compareSync(req.body.password, user.password)) {
                req.session.userLoggedOn = user;
                    if (req.body.remember_me !== undefined) {
                        res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                    }
                    res.redirect('/');
            } else {
                res.render('login', {error: 'La dirección de mail o la contraseña ingresados son incorrectos.'});
            }
        }
    },
    register: async function (req, res) {
        if (req.method == 'GET') {
            res.render('register');
        } else if (req.method == 'POST'){
            let errors = [];
            if (req.body.password.length < 3) {
                errors.push('La contraseña debe tener al menos 3 digitos.')
            };
            let emailExists = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (emailExists) {
                errors.push('Esta dirección de mail ya fue utilizada.')
            }
            let usernameExists = await db.User.findOne({
                where: {
                    username: req.body.username
                }
            })
            if (usernameExists) {
                errors.push('Este nombre de usuario ya fue utilizado.')
            }
            var now = moment(new Date()); //todays date
            var end = moment(req.body.date_birth); // another date
            var duration = moment.duration(now.diff(end));
            var days = duration.asDays();
            if (days < 13) {
                errors.push('Debes tener 13 años o más para registrarte.')
            }
            if (errors.length > 0) {
                return res.render('register', {errors})
            } else {
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                level: req.body.level,
                date_birth: req.body.date_birth,
                profile_picture: 'profile.png',
                password: bcrypt.hashSync(req.body.password, 10),
                name: req.body.name,
                surname: req.body.name
            }).then(user => {
                req.session.userLoggedOn = user;
                if (req.body.remember_me !== undefined) {
                res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                }
                res.redirect('/');
            }).catch(error => {
                return res.send(error);
            })
            }
        } 
    },
    logout: function (req, res, next) {
        res.clearCookie('user');
        req.session.userLoggedOn = null;
        res.redirect('/login');
    },
    list: function (req, res) {
        db.Post.findAll({
            order:[['createdAt','DESC']],
            include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}, {association: 'user'}, {association: 'likes'}]
        })
        .then((posts) => {
            for (let i = 0; i < posts.length; i++) {
                const element = posts[i];
                element.date = moment(element.createdAt).format('LL');
            }
            res.render ('index', { posts });
        })
        .catch((error) => {
            res.send(error);
        })
    },
    results: async function (req, res, next) {
        const users = await db.User.findAll({
            where: {
                [op.or]: {
                    name: { [op.like]: `%${req.query.search}%` },
                    username: { [op.like]: `%${req.query.search}%` },
                }
            },
            order: [['username','ASC']],
            limit: 5,
        });
        const posts = await db.Post.findAll({
            where: {
                [op.or]: {
                name: {[op.like]: `%${req.query.search}%`},
                description: {[op.like]: `%${req.query.search}%`},
            }
            },
            order:[['createdAt','DESC']],
            limit: 10,
            include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}, {association: 'likes'}]
        });
        for (let i = 0; i < posts.length; i++) {
            const element = posts[i];
            element.date = moment(element.createdAt).format('LL');
        }
        res.render('searchResults', { posts, search: req.query.search, users })
    },
    like: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.create({
            id_user: req.session.userLoggedOn.id,
            id_post: req.params.id
        }).then(like => {
            res.redirect('/#post_' + req.params.id);
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
                res.redirect('/#post_' + req.params.id);
            }).catch(error => {
                return res.render(error);
            })
    },
    likeR: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect(req.headers.referer);
        }
        db.Like.create({
            id_user: req.session.userLoggedOn.id,
            id_post: req.params.id
        }).then(like => {
            res.redirect(req.headers.referer);
        }).catch(error => {
            return res.send(error);
        })
    },
    dislikeR: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect(req.headers.referer);
        }
        db.Like.destroy(
            {
                where: { id_user: req.session.userLoggedOn.id, id_post: req.params.id }
            })
            .then(() => {
                res.redirect(req.headers.referer);
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = indexController;