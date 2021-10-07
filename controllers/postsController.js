const posts = require ('../data/posts');

const db = require ('../database/models');

var postsController = { 
    lista: function (req, res) {
        const post = db.post.findByPk(req.params.postId)
        if (!post) {
            return res.render('error')
        }
        const comments = db.Post.findAll({where: {post_id: req.params.postId}});
        res.render('posts/detalle', {post, comments});
    },
    detail: function (req, res) {
        var post = posts.findByID(req.params.postid);
        if (post) {
            res.render('postDetail', {post})
        };
        res.render('error', {error: 'Lo sentimos! No encontramos la receta buscada.'}) 
    },
    newPost: function (req, res) {
        res.render('newPost')
    },
};

module.exports = postsController;