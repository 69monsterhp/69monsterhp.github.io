document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://127.0.0.1:5000/api/passwords', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ website, username, password })
    })
    .then(response => response.json())
    .then(data => {
        loadPasswords();
        document.getElementById('passwordForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function loadPasswords() {
    fetch('http://127.0.0.1:5000/api/passwords')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#passwordsTable tbody');
            tableBody.innerHTML = '';
            data.forEach(password => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${password.website}</td><td>${password.username}</td>`;
                tableBody.appendChild(row);
            });
        });
}

// Load passwords on page load
window.onload = loadPasswords;
