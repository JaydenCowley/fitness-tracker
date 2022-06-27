async function signupFormHandler(event) {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();
  
    if (firstname && lastname && email && password && password === confirmPassword) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);