import React, { useState, FormEvent } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;