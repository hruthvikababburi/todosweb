import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Tasks from './components/Tasks';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Checks if user is logged in

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/tasks" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/tasks" /> : <Signup />} />
        <Route path="/tasks" element={isAuthenticated ? <Tasks /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;