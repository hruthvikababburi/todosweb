import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../api/api'
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const token = await signupUser(name, email, password);
    if (token) {
      localStorage.setItem('token', token); // Store the token
      navigate('/tasks'); // Navigate to tasks on successful signup
    } else {
      alert('Signup failed. Please try again.'); // Handle signup failure
    }
  };

  return (
    <div className="auth-container">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="auth-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;