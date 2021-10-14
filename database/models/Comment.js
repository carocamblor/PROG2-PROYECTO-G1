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

    return Comment;
}