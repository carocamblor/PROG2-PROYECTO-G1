// falta requierir la data

var postsController = {
    detail: function (req, res) {
        res.render('postDetail', {})
    },
    create: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;