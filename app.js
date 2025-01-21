const form = document.getElementById('password-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const service = document.getElementById('service').value;
    const password = document.getElementById('password').value;

    // Encrypt password locally
    const encryptedPassword = btoa(password); // Use stronger encryption in production

    try {
        const response = await fetch('http://r5ehlvnsyiznusu6tls4y6fyng2bkp2upyxf643k6qbrghwgoszyvkqd.onion/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ service, password: encryptedPassword }),
        });

        if (response.ok) {
            messageDiv.textContent = 'Password saved!';
        } else {
            messageDiv.textContent = 'Error saving password.';
        }
    } catch (err) {
        messageDiv.textContent = 'Error connecting to backend.';
    }
});
