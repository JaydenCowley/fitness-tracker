async function loginFormHandler() {
    event.preventDefault();
  console.log('hitting')
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/workoutHistory');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  
  document.getElementById('login-form').addEventListener('click', loginFormHandler);