const posts = require ('../data/posts');
const db = require ('../database/models');
const op = db.Sequelize.Op;
const moment = require('moment');


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
            post.date = moment(post.createdAt).format('LL');
            res.render('postDetail', {post, comments}); 
        }
    },
    newPost: function (req, res) {
        res.render('newPost');
    },
    store: function (req, res) {
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
        if (!post) {
            return res.render('error', {error: 'No encontramos la receta que queres editar!'});
        } else if(req.session.userLoggedOn && post.id_user != req.session.userLoggedOn.id){
            return res.render('error', {error: 'No puedes editar la receta de otra persona.'});
        } else if(!req.session.userLoggedOn){
            return res.render('error', {error: 'Debes iniciar sesión para editar tus recetas.'});
        } else {
            res.render('editPost', { post });
        }
    },
    update: function (req, res) {
        if (req.file){
        db.Post.update({
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            picture: req.file.filename,
        }, { where: { id: req.params.postid } }).then(post => {
            res.redirect(`/posts/${req.params.postid}`);
        }).catch(error => {
            return res.send(error);
        })
        } else {
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
        }
    },
   
    delete: function (req, res) {
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
    likeDetail: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.create({
            id_user: req.session.userLoggedOn.id,
            id_post: req.params.id
        }).then(like => {
            res.redirect('/posts/' + req.params.id);
        }).catch(error => {
            return res.send(error);
        })
    },
    dislikeDetail: function (req, res) {
        if (!req.session.userLoggedOn) {
            res.redirect('/posts/' + req.params.id);
        }
        db.Like.destroy(
            {
                where: { id_user: req.session.userLoggedOn.id, id_post: req.params.id }
            })
            .then(() => {
                res.redirect('/posts/' + req.params.id);
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = postsController;