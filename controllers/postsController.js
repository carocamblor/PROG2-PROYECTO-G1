const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;


var postsController = { 
    detail: async function (req, res) {
        const post = await db.Post.findByPk(req.params.postid);
        if (!post) {
            res.render('error', {error: 'Lo sentimos! No encontramos la receta que estás buscando.'});
        } else {
            const comments = await db.Comment.findAll({where: {id_post: req.params.postid}});
            const user = await db.User.findByPk(post.id_user);
            res.render('postDetail', {post, comments, user});
        }
    },
    newPost: function (req, res) {
        res.render('newPost');
    },
    store: function (req, res) {
        // if (req.file) req.body.picture = (req.file.destination + req.file.filename).replace('public', '');
        console.log(req.file)
        console.log(req.body.picture)
        db.Post.create({
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            id_user: '1',
            picture: req.file.filename
        }).then(post => {
            res.redirect('/');
        }).catch(error => {
            return res.send(error);
        })
    },
    edit: async function (req, res) {
        const post = await db.Post.findByPk(req.params.postid)
        console.log(post)
        if (!post) {
            return res.render('error', {error: 'No encontramos la receta que queres editar!'});
        } else {
            res.render('editPost', { post });
        }
    },
    update: function (req, res) {
        db.Post.update({
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        }, { where: { id: req.params.postid } }).then(post => {
            res.redirect('/');
        }).catch(error => {
            return res.send(error);
        })
    },
    delete: function (req, res) {
        // Chequear que sea el owner
        db.Post.destroy({ where: { id: req.params.postid } })
            .then(() => {
                res.redirect('/');
            }).catch(error => {
                return res.send(error);
            })
    },
    comment: function (req, res) {
        db.Comment.create({
            id_post: req.params.postid,
            id_user: '2',
            date_creation: '2021-10-09',
            text: req.body.text,
        }).then(post => {
            res.redirect(`/posts/${req.params.postid}`);
        }).catch(error => {
            return res.send(error);
        })
    },
};

module.exports = postsController;