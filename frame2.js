// Get the form element
const loginForm = document.getElementById('login-form');

// Add a submit event listener to handle the form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
        // Add actual login functionality here (e.g., redirect or authentication)
    } else {
        alert('Please fill in both fields');
    }
});
