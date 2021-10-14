const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;

var indexController = { 
    list: function (req, res) {
        db.Post.findAll()
        .then((posts) => {
            res.render ('index', {posts});
        })
        .catch((error) => {
            res.send(error);
        })
    },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
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