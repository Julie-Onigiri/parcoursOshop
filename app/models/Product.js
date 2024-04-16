const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Product extends Model {}
Product.init(
    {
        ref: {
            type: DataTypes.STRING,
            allowNull: true,
        },
       image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
       title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       description: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
        price:{
            type: DataTypes.NUMBER
        }
    },
    {
        sequelize,
        tableName: 'product',
    }
);

module.exports = Product;
