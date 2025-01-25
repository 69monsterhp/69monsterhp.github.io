async function register(username, email, password) {
    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Account created successfully:", data);
        } else {
            console.error("Failed to create account:", data.error);
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

async function login(username, password) {
    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Login successful:", data);
        } else {
            console.error("Login failed:", data.error);
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

// Example usage
// register("testuser", "test@example.com", "mypassword123");
// login("testuser", "mypassword123");
