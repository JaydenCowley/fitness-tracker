async function newFormHandler(event) {
event.preventDefault(); 

    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value; 
    const date = document.getElementById('date').value;  

    const response = await fetch(`/api/workouts`, {
        method: 'POST', 
        body: JSON.stringify({
            activity,
            duration,
            date
        }), 
        headers: {
            'Content-Type' : "aplication/json" 
        }
    }); 
    if (response.ok) {
        document.location.replace('/workoutHistory'); 
    } else {
        alert(response.statusText); 
    }
}

document.getElementById('new-workout-form').addEventListener('submit', newFormHandler); 
