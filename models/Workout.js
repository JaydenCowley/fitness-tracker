const { Model, DataTypes } = require('sequelize'); 
const sequelize = require ('../config/connection'); 

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        activity: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        duration: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        date: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        userid: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'users', 
                key: 'id', 
            },
        },
    },
    {
        sequelize, 
        modelName: 'workout', 
    }
);

module.exports = Workout; 