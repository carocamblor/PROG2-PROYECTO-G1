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
                    username: req.body.username
                }
            });
            if (!user) {
                res.send('No existe un usuario con esa dirección de mail');
            } else {
                
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.userLoggedOn = user;
                    res.cookie(user, user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                    res.redirect('/');
                } else {
                    res.send('la contraseña está mal')
                }
            }
        }
    },
    register: async function (req, res) {
        if (req.method == 'GET') {
            res.render('register');
        } else if (req.method == 'POST'){
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                level: req.body.level,
                date_birth: req.body.date_birth,
                password: bcrypt.hashSync(req.body.password, 10)
            }).then(user => {
                res.redirect('/');
            }).catch(error => {
                return res.send(error);
            })
        } 
    },
    logout: function (req, res, next) {
        res.clearCookie('user');
        req.session.userLoggedOn = null;
        res.redirect('/login');
    },
    list: function (req, res) {
        db.Post.findAll({order:[['id','DESC']]})
        .then((posts) => {
            res.render ('index', {posts});
        })
        .catch((error) => {
            res.send(error);
        })
    },
    results: async function (req, res, next) {
        const posts = await db.Post.findAll({
            where: [
                {
                    name: {[op.like]: `%${req.query.search}%`}
                }
            ]
        });
        res.render('searchResults', {posts, search: req.query.search})
    },
};

module.exports = indexController;