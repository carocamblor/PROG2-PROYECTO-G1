const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');
//requerimos los modulos para usar la data de ahi

var postsController = { //creamos objeto literal que va a tener la logica
    detail: function (req, res) { 
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.postId == req.params.postid) {
                res.render('postDetail', {post: element})
            }
        } //hacemos un for que recorra el modulo de posteos y que si el id es el mismo que el uduario pide, .....
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;
//exportamos el controlador para poder usarlo en las rutas