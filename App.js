import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); // True for Register, False for Login
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering ? '/register' : '/login';
    try {
      const response = await axios.post(endpoint, { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : "Error occurred");
    }
  };

  return (
    <div className="App">
      <h1>Password Manager</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>

      <p>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Login" : "Register"}
        </span>
      </p>

      <div>{message}</div>
    </div>
  );
}

export default App;
