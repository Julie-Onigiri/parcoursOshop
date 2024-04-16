const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');
const Role = require('./Role.js');

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    },
    {
        sequelize,
        tableName: 'user',
    }
);

//User.belongsTo(Role(), { foreignKey: 'role_id' });

module.exports = User;
