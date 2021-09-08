const dataPost = require ('../data/posts');
const dataUsers = require ('../data/users');

var postsController = {
    detail: function (req, res) {
        for (let i = 0; i < dataPost.list.length; i++) {
            const element = dataPost.list[i];
            if (element.postId == req.params.postid) {
                res.render('postDetail', {post: element})
            }
        }
    },
    newPost: function (req, res) {
        res.render('newPost', {})
    },
};

module.exports = postsController;