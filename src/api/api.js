import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    return res.data.token;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const signupUser = async (name, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/signup`, { name, email, password });
    return res.data.token;
  } catch (error) {
    console.error('Signup error:', error);
    return null;
  }
};

export const getTasks = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`${API_URL}/todos`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error('Fetch tasks error:', error);
    return [];
  }
};

export const createTask = async (description) => {
  const token = localStorage.getItem('token');
  try {
    await axios.post(`${API_URL}/todos`, { description }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error('Create task error:', error);
  }
};

export const updateTaskStatus = async (taskId, status) => {
  const token = localStorage.getItem('token');
  try {
    await axios.put(`${API_URL}/todos/${taskId}`, { status }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error('Update task status error:', error);
  }
};

export const deleteTask = async (taskId) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(`${API_URL}/todos/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error('Delete task error:', error);
  }
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error('Fetch profile error:', error);
    return {};
  }
};