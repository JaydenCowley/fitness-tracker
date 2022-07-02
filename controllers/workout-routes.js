const router = require('express').Router();
const sequelize = require('../config/connection'); 
const { Users, Workout } = require('../models');

//const addWorkoutRoutes = (router) =>{

    // create workouts
    router.post('/workouts', (req, res) => {
        console.log(req);
        const dbWorkouts = Workout.create({
            activity: req.body.activity,
            duration: req.body.duration,
            date: req.body.date
        });
        
        // req.session.save(() => {
        //     req.session.activity = dbWorkouts.activity;
        //     req.session.duration = dbWorkouts.duration;
        //     req.session.date = dbWorkouts.date;
        //     req.session.userid = dbWorkouts.userid;
        // })
    });

    //  get workouts 
    router.get('/workouts', (req, res) => {


        Workout.findAll({
            where: {
                userid: req.session.userid
            },
            attributes: [
                'activity',
                'duration',
                'date',
                'userid'
            ]
        })
            .then(dbWorkouts => res.json(dbWorkouts))
            .catch(err => {
                res.status(500).json(err);
            })
    });
//};
module.exports = router; 