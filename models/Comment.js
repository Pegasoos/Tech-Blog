const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false
        },
        commenter:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            references:{
                model:'user',
                key:'username'
            }
        },
        date:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            references:{
                model:'post',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:"comment",
    }
);
module.exports = Comment;