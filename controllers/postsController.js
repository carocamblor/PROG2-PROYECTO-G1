const posts = require ('../data/posts');
const users = require ('../data/users');
const comments = require('../data/comments')
//requerimos los modulos para usar la data de ahi

var postsController = { //creamos objeto literal que va a tener la logica

    detail: function (req, res) {
        var post = posts.findByID(req.params.postid);
        if (post) {
            var postComments = comments.findByPost(post.postId)
            res.render('postDetail', {post, postComments})
        };
        res.render('error', {error: 'Lo sentimos! No encontramos la receta buscada.'}) 
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;
//exportamos el controlador para poder usarlo en las rutas