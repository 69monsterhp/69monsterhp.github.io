const backendUrl = 'http://your-backend-address.onion';

document.getElementById('login-button').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${backendUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  const status = document.getElementById('status');

  if (result.success) {
    status.textContent = 'Login successful!';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('password-manager-section').style.display = 'block';
  } else {
    status.textContent = 'Login failed!';
  }
});

document.getElementById('register-button').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${backendUrl}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  document.getElementById('status').textContent = result.success
    ? 'Account created successfully!'
    : 'Account creation failed!';
});

document.getElementById('store-button').addEventListener('click', async () => {
  const service = document.getElementById('service-name').value;
  const password = document.getElementById('service-password').value;

  const response = await fetch(`${backendUrl}/store-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ service, password }),
  });

  const result = await response.json();
  if (result.success) {
    alert('Password stored successfully!');
    loadPasswords();
  }
});

async function loadPasswords() {
  const response = await fetch(`${backendUrl}/get-passwords`);
  const passwords = await response.json();

  const passwordList = document.getElementById('password-list');
  passwordList.innerHTML = '';
  passwords.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.service}: ${item.password}`;
    passwordList.appendChild(li);
  });
}
