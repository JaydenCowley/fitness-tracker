const router = require('express').Router();
const sequelize = require('../config/connection'); 
const { Users, Workout } = require('../models');

    //  get workouts 
    router.get('/workouts', (req, res) => {


        Workout.findAll({
            // where: {
            //     userid: req.session.userid
            // },
            attributes: [
                'activity',
                'duration',
                'date_',
                'userid'
            ]
        })
            .then(dbWorkouts => res.json(dbWorkouts))
            .catch(err => {
                res.status(500).json(err);
            })
    });
    // create workouts
    // router.post('/workouts', (req, res) => {
    //     const dbWorkouts = Workout.create({
    //         activity: req.body.activity,
    //         duration: req.body.duration,
    //         date_: req.body.date_,
    //         userid: req.session.userid
    //     });

        // req.session.save(() => {
        //     req.session.activity = dbWorkouts.activity;
        //     req.session.duration = dbWorkouts.duration;
        //     req.session.date = dbWorkouts.date;
        //     req.session.userid = dbWorkouts.userid;
        // })
    //});

    // CREATE new user
// router.post('/workouts', async (req, res) => {
//     try {
//         const dbWorkouts = Workout.create({
//             activity: req.body.activity,
//             duration: req.body.duration,
//             date_: req.body.date_,
//             userid: req.session.userid
//         });
  
//       // Set up sessions with a 'loggedIn' variable set to `true`
      
//         res.status(200).json(dbWorkouts);

//     } catch (err) {
      
//       res.status(500).json(err);
//     }
//   });
router.post('/workouts', async (req, res) => {
    
        Workout.create({
            activity: req.body.activity,
            duration: req.body.duration,
            date_: req.body.date_
            //userid: req.session.userid
        })
        .then(newWorkout => {res.json(newWorkout)})
        .catch(err => {res.status(500).json(err)})
      
  });
module.exports = router; 