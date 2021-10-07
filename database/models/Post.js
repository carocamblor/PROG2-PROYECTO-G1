module.exports = (sequelize, dataTypes) => {
    const alias = 'Post';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: ture,
            type: dataTypes.INTEGRER
        },
        user_id: {
            type: dataTypes.INTEGRER
        },
        contenido: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'posts',
        timestamps: false,
        underscorder: true
    }

    const Post = sequelize.define(alias, cols, config);

    return Post;
}