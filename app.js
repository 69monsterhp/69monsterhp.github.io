document.getElementById('register-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both username and password.');
        return;
    }

    try {
        const response = await fetch(`${BACKEND_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); // Should say "User registered successfully"
        } else {
            const error = await response.json();
            alert(`Error: ${error.error || 'Something went wrong'}`);
        }
    } catch (err) {
        console.error(err);
        alert('Error connecting to the server.');
    }
});
