module.exports = (sequelize, dataTypes) => {

    const alias = 'Like';

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
    }

    const config = {
        tableName: 'like',
        timestamps: false,
        underscored: true,
    }

    const Like = sequelize.define(alias, cols, config)

    Like.associate = function (models) {
        Like.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Like.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'id_post'
        });
    };

    return Like
}