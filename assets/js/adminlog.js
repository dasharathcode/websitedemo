
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission refresh

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to the backend
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert('Login successful!');
        console.log('Token:', data.token);
        // Save the token to localStorage (optional)
        localStorage.setItem('token', data.token);
        // Redirect to another page if needed
        // window.location.href = 'dashboard.html';
      } else {
        // Login failed
        alert(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  });

