const User = require('./Users'); 
const Workout = require('./Workout'); 

User.hasMany(Workout, {
    foreignKey: 'userid',
}); 

Workout.belongsTo(User, {
    foreignKey: 'userid', 
});

module.exports = { User, Workout};