const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');
//requerimos los modulos para usar la data de ahi

var postsController = {
    detail: function (req, res) {
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.postId == req.params.postid) {
                res.render('postDetail', {post: element})
            }
        }
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;
//exportamos el controlador para poder usarlo en las rutas