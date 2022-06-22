const User = require('./Users'); 
const Workout = require('./Workout'); 

User.hasMany(Workout, {
    foreignKey: 'user_id',
}); 

Workout.belongsTo(User, {
    foreignKey: 'user_id', 
});

module.exports = { User, Workout};