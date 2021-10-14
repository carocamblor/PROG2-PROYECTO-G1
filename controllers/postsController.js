const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;

var postsController = { 
    // lista: function (req, res) {
    //     const post = db.post.findByPk(req.params.postId)
    //     if (!post) {
    //         return res.render('error')
    //     }
    //     const comments = db.Post.findAll({where: {post_id: req.params.postId}});
    //     res.render('posts/detalle', {post, comments});
    // },
    detail: function (req, res) {
        db.Post.findByPk(req.params.postid)
            .then(function (post) {
                if (post) {
                    db.Comment.findAll({
                        where: [
                            {
                                id_post: req.params.postid
                            }
                        ]
                    })
                        .then((comments) => {
                            res.render('postDetail', {post, comments})
                        })
                    
                } else {
                res.render('error', {error: 'Lo sentimos! No encontramos la receta buscada.'})
                }
            })
            .catch((error) => {
                console.log(error)
            })
         
    },
    newPost: function (req, res) {
        res.render('newPost')
    },
};

module.exports = postsController;