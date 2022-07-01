async function newFormHandler(event) {
event.preventDefault(); 

    const activity = document.querySelector('input[name="activity"]').value;
    const duration = document.querySelector('input[name="duration"]').value; 
    const date = document.querySelector('input[name="date"]').value;  

    const response = await fetch(`/api/user:id/workouts`, {
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

document.querySelector('.new-workout-form').addEventListener('submit', newFormHandler); 
