module.exports = (sequelize, dataTypes) => {
    const alias = 'Comment';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER
        },
        text: {
            type: dataTypes.STRING
        },
        date_creation: {
            type: dataTypes.DATE
        }
    }

    const config = {
        tableName: 'comments',
        timestamps: false,
        underscorder: true
    }

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) { //lo hacemos porque esta bueno que este de ambos lados
        Comment.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'post_id'
        });
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id' //los nuestros son sin _?
        });
    };
//entre coment y usuarios


    return Comment;
}