module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        },
        profile_picture: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        date_birth: {
            type: dataTypes.STRING
        },
        biography: {
            type: dataTypes.STRING
        },
        level: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'users',
        timestamps: false,
        underscorder: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) { //declare associaciones
        User.hasMany(models.Post, {
        as:'posts',
        foreignKey: 'id_user'
        });

        User.hasMany(models.Comment, {
        as:'comments',
        foreignKey: 'id_user'
        });

        // User.hasMany(models.Post, {
        //     as:'posts',
        //     foreignKey: 'id_user'
        //     });
        User.hasMany(models.Follow, {
            as: 'followers',
            foreignKey: 'following_id'
        });
        User.hasMany(models.Follow, {
            as: 'following',
            foreignKey: 'follower_id'
        });
        
    };

    return User;
}