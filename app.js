async function handleAuth(action) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  const endpoint = action === 'login' ? '/login' : '/signup';
  const response = await fetch(`http://127.0.0.1:5000/api${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    if (action === 'login') {
      document.getElementById('auth').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      fetchPasswords(); // Fetch saved passwords
    } else {
      alert('Signup successful! You can now log in.');
    }
  } else {
    const error = await response.json();
    alert(error.error || 'An error occurred.');
  }
}
