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
        date_creation: {
            type: dataTypes.DATE
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
        timestamps: false,
        underscorder: true
    }

    const Post = sequelize.define(alias, cols, config);

    return Post;
}