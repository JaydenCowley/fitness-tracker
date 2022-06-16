const express = require("express");

const getWorkouts = () => 
    fetch('/api/workouts', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);

app.get('/api/workouts', (req, res) => {
    res.json(`${req.method} request received to get workouts`)
});

app.post('/api/reviews', (req, res) => {
    console.info(`${req.method} request recieved to add workout`)
});