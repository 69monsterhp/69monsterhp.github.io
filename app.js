const API_URL = 'http://your-tor-hidden-service.onion'; // Replace with your hidden service URL

document.getElementById('login').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('manager').style.display = 'block';
    } else {
        alert('Login failed!');
    }
});

document.getElementById('save').addEventListener('click', async () => {
    const site = document.getElementById('site').value;
    const password = document.getElementById('password-store').value;

    const response = await fetch(`${API_URL}/passwords`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site, password }),
    });

    if (response.ok) {
        alert('Password saved!');
    } else {
        alert('Failed to save password.');
    }
});
