import React from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const Home = () => {
  // Replace with actual authentication logic
  const isAuthenticated = false;

  return isAuthenticated ? <Dashboard /> : <Login />;
};

export default Home;