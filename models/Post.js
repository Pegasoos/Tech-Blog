const {Model, DataTypes, Sequelize} = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model{}

Post.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        date:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        },
        poster:{
            type: DataTypes.STRING,
            allowNull:false,
           // unique:true,
            references:{
                model:'user',
                key:'username'
            }
        },
        poster_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
           // unique:true,
            references:{
                model:'user',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:"post",
    }
);

module.exports = Post;