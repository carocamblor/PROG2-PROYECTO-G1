const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');
//requerimos los modulos para usar la data de ahi

var usersController = {
    login: function (req, res) {
        res.render('login', {})
    },

    register: function (req, res) {
        res.render('register', {})
    },

    userDetail: function (req, res) {
        var username = req.params.username;
        var user = {};
        var posts = [];
        for (let i = 0; i < dataUsers.list.length; i++) {
            const element = dataUsers.list[i];
            if (element.username == username) {
                var user = element;
            };
        };
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.username == username) {
                posts.push(element);
            };
        };
        res.render('userDetail', {user: user, posts: posts}) 
    },

    myProfile: function (req, res) {
        var username = req.params.username;
        var user = {};
        var posts = [];
        for (let i = 0; i < dataUsers.list.length; i++) {
            const element = dataUsers.list[i];
            if (element.username == username) {
                var user = element;
            };
        };
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.username == username) {
                posts.push(element);
            };
        };
        res.render('myProfile', {user: user, posts: posts}) 
    },
    
    editProfile: function (req, res) {
        res.render('editProfile', {})
    },
};

module.exports = usersController;
//exportamos el controlador para poder usarlo en las rutas