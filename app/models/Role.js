const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Role extends Model {}

Role.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: 'role',
    }
);

module.exports = Role;
