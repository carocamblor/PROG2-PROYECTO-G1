const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');

var postsController = {
    detail: function (req, res) {
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.postID == req.params.postID) {
                res.render('postDetail', {post: element})
            }
        }
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;