const posts = require ('../data/posts');
const users = require ('../data/users');
const db = require ('../database/models');
const op = db.Sequelize.Op;

var usersController = {
    userDetail: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username
            },
            include: [{association: 'followers'}]
        })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    },
                    order:[['createdAt','DESC']],
                    include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}]
                })
                    .then((posts) => {
                        res.render('userDetail', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
    },
    //hay que implementar relaciones con el include association
    myProfile: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username
            },
        })
            .then((user) => {
                if (user) {
                db.Post.findAll({
                    where: {
                        id_user: user.id
                    },
                    order:[['createdAt','DESC']],
            include: [{association: 'comments', include: {association: 'user'}}, {association: 'user'}]
                })
                    .then((posts) => {
                        res.render('myProfile', {user, posts});
                    })
                } else {
                    res.render('error', { error: '¡Lo sentimos! No encontramos ningún usuario con ese nombre.'});
                }
            })
    },
    editProfile: function (req, res) {
        if (req.method == 'GET') {
            res.render('editProfile');
        } else if (req.method == 'POST') {
            console.log(req.body)
            console.log(req.session.userLoggedOn)
            db.User.update({
                name: req.body.name,
                surname: req.body.surname, 
                biography: req.body.biography,
                profile_picture: req.body.profile_picture
            }, { where: { username: req.session.userLoggedOn.username } }).then(()=> {
                res.redirect('/users/myprofile/' + req.session.userLoggedOn.username);
            }).catch(error => {
                return res.send(error);
            })
        }
        
    },
    follow: function (req, res) {
        if (!req.session.user) {
            res.redirect('/users/' + req.params.id);
        }
        db.Follow.create({
            follower_id: req.session.user.id,
            following_id: req.params.id
        }).then(follow => {
            res.redirect('/users/' + req.params.id);
        }).catch(error => {
            return res.send(error);
        })
    },
    unfollow: function (req, res) {
        if (!req.session.user) {
            res.redirect('/users/' + req.params.id);
        }
        db.Follow.destroy(
            {
                where: { follower_id: req.session.user.id, following_id: req.params.id }
            })
            .then(() => {
                res.redirect('/users/' + req.params.id);
            }).catch(error => {
                return res.render(error);
            })
    },
};

module.exports = usersController;