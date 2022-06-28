const getWorkouts = () => 
    fetch('/api/workouts', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);