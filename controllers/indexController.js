const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

var indexController = { 
    list: function (req, res) {
        db.Post.findAll({order:[['id','DESC']]})
        .then((posts) => {
            res.render ('index', {posts});
        })
        .catch((error) => {
            res.send(error);
        })
    },
    login: async function (req, res, next) {
        if (req.method == 'POST') {
            const user = await db.User.findOne({ where: { username: req.body.username } });
            if (!user) {
                res.send('NO EXISTE EL USUARIO')
            }
            if (req.body.password == user.password) {
                res.redirect('/');
            } else {
                res.send('LA CONSTRASEÑA ES INCORRECTA')
            }
        } else {
            res.render('login');
        }
    },
    register: function (req, res, next) {
        res.render('register');
    },
    store: async function (req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        db.User.create(req.body)
            .then(post => {
                res.redirect('/login');
            }).catch(error => {
                return res.render(error);
            })
    },
    results: async function (req, res, next) {
        const posts = await db.Post.findAll({
            where: [
                {
                    name: {[op.like]: `%${req.query.search}%`}
                }
            ]
        })
        res.render('searchResults', {posts, search: req.query.search})
    },
};

module.exports = indexController;