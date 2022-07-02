const router = require('express').Router();
const sequelize = require('../config/connection'); 
const { Users, Workout } = require('../models');

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
    // create workouts
    router.post('/workouts', (req, res) => {
       
        const dbWorkouts = Workout.create({
            activity: req.body.activity,
            duration: req.body.duration,
            date: req.body.date,
            userid: req.session.userid
        });

        // req.session.save(() => {
        //     req.session.activity = dbWorkouts.activity;
        //     req.session.duration = dbWorkouts.duration;
        //     req.session.date = dbWorkouts.date;
        //     req.session.userid = dbWorkouts.userid;
        // })
    });

module.exports = router; 