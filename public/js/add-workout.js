async function newFormHandler(event) {
event.preventDefault(); 

    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value; 
    const date = document.getElementById('date').value;  
    console.log(activity, duration, date)

   await fetch('/api/workouts', {
       method: 'POST', 
       headers: {
           'Content-Type' : "application/json" 
       },
        body: JSON.stringify({
            activity: activity,
            duration: duration,
            date_: date,
            // userid: req.session.userid
        }) 
    }) 
    .then(function() {
       // document.location.replace("/workoutHistory");
       console.log('success')
      })
      .catch(err => console.log(err));
}

document.getElementById('new-workout-form').addEventListener('submit', newFormHandler); 
