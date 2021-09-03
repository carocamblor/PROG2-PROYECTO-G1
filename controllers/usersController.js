// falta requierir la data

var usersController = {
    login: function (req, res) {
        res.render('login', {})
    },
    register: function (req, res) {
        res.render('register', {})
    },
    userDetail: function (req, res) {
        res.render('userDetail', {})
    },
    myProfile: function (req, res) {
        res.render('myProfile', {})
    },
    editProfile: function (req, res) {
        res.render('editProfile', {})
    },
};

module.exports = usersController;