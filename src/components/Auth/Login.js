import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api'; // Import the loginUser function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser(email, password);
    if (token) {
      localStorage.setItem('token', token); // Store the token
      navigate('/tasks'); // Navigate to tasks on successful login
    } else {
      alert('Login failed. Please try again.'); // Handle login failure
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Signup here</a></p>
    </div>
  );
};

export default Login;