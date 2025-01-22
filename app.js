async function handleAuth(action) {
    console.log(`${action} button clicked`); // Debug log for button click
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    const endpoint = action === 'login' ? '/login' : '/signup';
    console.log(`Sending request to ${API_URL}${endpoint}`); // Log API URL

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        console.log(`Response status: ${response.status}`); // Log response status
        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            toggleContainers(false);
            loadPasswords(username);
        } else {
            alert(result.error || 'Something went wrong.');
        }
    } catch (error) {
        console.error('Error:', error); // Log any errors
        alert('Failed to connect to the backend.');
    }
}
