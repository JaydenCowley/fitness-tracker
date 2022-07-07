const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const workoutRoutes = require('./workout-routes'); 

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', workoutRoutes);
module.exports = router;
