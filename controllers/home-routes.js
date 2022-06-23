const router = require('express').Router();
const { Users, Workout } = require('../models');

router.get('/', (req, res) => {
  res.render('home')
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


module.exports = router;
