const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

// create the user table 
User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
        }, 
        firstName: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        lastName: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        email: {
            type: DataTypes.STRING, 
            unique: true, 
            allowNull: false, 
            validate: {
                isEmail: true, 
            },
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate:{
                len: [8, 30],
            },
        },
    }, 
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'users' 
        }
    
);

module.exports = User; 