const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

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
            let exists = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (exists) {
                errors.push('Esta dirección de mail ya fue utilizada.')
            }
            if (errors.length > 0) {
                return res.render('register', {errors})
            } else {
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                level: req.body.level,
                date_birth: req.body.date_birth,
                password: bcrypt.hashSync(req.body.password, 10)
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
            order:[['id','DESC']],
            include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}]
        })
        .then((posts) => {
            res.render ('index', { posts });
        })
        .catch((error) => {
            res.send(error);
        })
    },
    results: async function (req, res, next) {
        const posts = await db.Post.findAll({
            where: {
                    name: {[op.like]: `%${req.query.search}%`}
            },
            order:[['createdAt','DESC']],
            limit: 10,
            include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}]
        });
        res.render('searchResults', {posts, search: req.query.search})
    },
    like: function (req, res) {
        if (!req.session.user) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.create({
            user_id: req.session.user.id,
            post_id: req.params.id
        }).then(like => {
            res.redirect('/#post_' + req.params.id);
        }).catch(error => {
            return res.send(error);
        })
    },
    dislike: function (req, res) {
        if (!req.session.user) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.destroy(
            {
                where: { user_id: req.session.user.id, post_id: req.params.id }
            })
            .then(() => {
                res.redirect('/#post_' + req.params.id);
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = indexController;