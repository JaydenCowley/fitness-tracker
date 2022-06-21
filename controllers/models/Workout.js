const { Model, DataTypes } = require('sequelize'); 
const sequelize = require ('../config/connections'); 

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        description: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        date: {
            type: DataTypes.DATEONLY, 
            allowNull: false, 
        }, 
        time: {
            type: DataTypes.TIME, 
            allowNull: false, 
        }, 
        user_id: {
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