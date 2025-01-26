import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="App">
      <h1>Password Manager</h1>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Register</button>
      </form>
      <form onSubmit={handleLogin}>
        <button type="submit">Login</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default App;
