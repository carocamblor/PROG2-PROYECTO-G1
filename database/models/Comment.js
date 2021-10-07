module.exports = (sequelize, dataTypes) => {
    const alias = 'Comment';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: ture,
            type: dataTypes.INTEGRER
        },
        user_id: {
            type: dataTypes.INTEGRER
        },
        post_id: {
            type: dataTypes.STRING
        },
        content: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'comment',
        timestamps: false,
        underscorder: true
    }

    const Comment = sequelize.define(alias, cols, config);

    return Comment;
}