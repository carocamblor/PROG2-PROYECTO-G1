module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: ture,
            type: dataTypes.INTEGRER
        },
        username: {
            type: dataTypes.INTEGRER
        },
        name: {
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'user',
        timestamps: false,
        underscorder: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}