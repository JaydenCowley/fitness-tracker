const { Model, DataTypes } = require('sequlize'); 


class User extends Model {

}

// create the user table 
User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primarKey: true, 
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
            // password check should be inserted here 
        },
    sequelize, 
    modelName: 'user', 
    }
    
);

module.exports = User; 