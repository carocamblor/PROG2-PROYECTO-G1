const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;


var postsController = { 
    detail: async function (req, res) {
        const post = await db.Post.findByPk(req.params.postid,
            { include: [{ association: 'user' }, { association: 'likes' }, { association: 'comments', include: [{ association: 'user'}]}] });
            
        if (!post) {
            res.render('error', {error: 'Lo sentimos! No encontramos la receta que estás buscando.'});
        } else {
            const comments = await db.Comment.findAll(
                {
                where: {id_post: req.params.postid},
                order: [['createdAt','DESC']],
                include: [{ association: 'user' }] 
                }, //busco coment del posteo. la borro
            )
            res.render('postDetail', {post, comments}); 
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
            id_user: req.session.userLoggedOn.id,
            picture: req.file.filename,
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
            picture: req.body.picture,
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
            id_user: req.session.userLoggedOn.id,
            text: req.body.text,
        }).then(post => {
            res.redirect(`/posts/${req.params.postid}`);
        }).catch(error => {
            return res.send(error);
        })
    },
    like: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.create({
            user_id: req.session.userLoggedOn.id,
            post_id: req.params.id
        }).then(like => {
            res.redirect('/posts/' + req.params.id);
        }).catch(error => {
            return res.send(error);
        })
    },
    dislike: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.destroy(
            {
                where: { user_id: req.session.userLoggedOn.id, post_id: req.params.id }
            })
            .then(() => {
                res.redirect('/posts/' + req.params.id);
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = postsController;