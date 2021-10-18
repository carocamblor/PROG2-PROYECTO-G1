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
        res.render('newPost');
    },
    store: function (req, res) {
        db.Post.create({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        }).then(post => {
            res.redirect('/');
        }).catch(error => {
            return res.render(error);
        })
    },
    edit: async function (req, res) {
        const post = await db.Post.findByPk(req.params.id)
        if (!post) {
            return res.render('error');
        }

        res.render('posts/edit', { post });
    },
    update: function (req, res) {
        db.Post.update(req.body, { where: { id: req.params.id } }).then(post => {
            res.redirect('/');
        }).catch(error => {
            return res.render(error);
        })
    },
    delete: function (req, res) {
        // Chequear que sea el owner
        db.Post.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/');
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = postsController;