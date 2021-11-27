const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model{
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}
User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                len:[6]
            }
        },
        posts:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:"post",
                key:"title"
            }
        }
    },
    {
        hooks:{
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password,10);
                return newUserData
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:"user",
    }
);
module.exports = User;