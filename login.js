// login.js

// Simulated user database
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        errorMessage.style.display = "none";
        alert("Login successful!"); // Replace this with navigation to the main site
        // Save user session in localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        errorMessage.style.display = "block";
    }
});

// index.js (or main page JS)
document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Please log in to access this page.");
        window.location.href = "login.html"; // Redirect to login page
    }
});


