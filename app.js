// Global state to track if the user is registering or logging in
let isRegistering = true;

// Toggle between Register and Login
function toggleForm() {
    isRegistering = !isRegistering;
    document.getElementById("actionBtn").textContent = isRegistering ? "Register" : "Login";
    document.getElementById("toggleText").innerHTML = isRegistering 
        ? "Already have an account? <span onclick='toggleForm()'>Login</span>"
        : "Don't have an account? <span onclick='toggleForm()'>Register</span>";
    document.getElementById("message").innerHTML = "";
}

// Handle form submission (Register or Login)
async function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Get user data from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || {};

    // Check if Registering
    if (isRegistering) {
        // If user already exists, show message
        if (users[username]) {
            messageDiv.textContent = "User already exists!";
            messageDiv.style.color = "red";
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Save user to localStorage
        users[username] = { password: hashedPassword };
        localStorage.setItem("users", JSON.stringify(users));

        messageDiv.textContent = "User registered successfully!";
        messageDiv.style.color = "green";
    } else {
        // If logging in, check if the user exists
        if (!users[username]) {
            messageDiv.textContent = "User not found!";
            messageDiv.style.color = "red";
            return;
        }

        // Check if the password matches the stored hashed password
        const isMatch = await bcrypt.compare(password, users[username].password);

        if (isMatch) {
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
        } else {
            messageDiv.textContent = "Invalid credentials!";
            messageDiv.style.color = "red";
        }
    }
}
