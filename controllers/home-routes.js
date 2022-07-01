const router = require('express').Router();
const { Users, Workout } = require('../models');


router.get('/', (req, res) => {
  res.render('home')
});
router.get('/createUser', (req, res) => {
  res.render('createUser')
})
// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/workoutHistory');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});
router.get('/workoutHistory', (req, res) => {
  
  res.render('workoutHistory');
})
router.get('/addWorkouts', (req, res) => {
  res.render('addWorkouts')
})

// create workouts
router.post('/api/workouts/:id', (req, res) => {
  req.session.save(() => {
    req.session.activity = dbWorkouts.activity;
    req.session.duration = dbWorkouts.duration;
    req.session.date = dbWorkouts.date;
  })
});

//  get workouts 
router.get('/api/workouts/:id', (req, res) => {

  /// need to finish looking at 14.1.5

  Workout.findAll({
    attributes: [
      'activity',
      'duration',
      'date'
    ]
  })
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


module.exports = router;
