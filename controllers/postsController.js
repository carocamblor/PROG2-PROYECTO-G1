const posts = require ('../data/posts');

var postsController = { 
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