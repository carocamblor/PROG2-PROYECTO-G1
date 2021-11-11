module.exports = (sequelize, dataTypes) => {
    const alias = 'Post';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        picture: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        ingredients: {
            type: dataTypes.STRING
        },
        instructions: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
    }

    const config = {
        tableName: 'posts',
        timestamps: true,
        underscorder: true
    }

    const Post = sequelize.define(alias, cols, config);
     
    Post.associate = function (models) { //declare associaciones
        Post.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'id_post'
        });
        Post.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
    };

    return Post;
}