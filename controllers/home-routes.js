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
  res.render('workoutHistory')
})

module.exports = router;
