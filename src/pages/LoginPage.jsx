import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import selamLogo from '../assets/logo.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State for role

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication process
    if (email === 'admin@example.com' && password === 'password') {
      // Check role and redirect accordingly
      switch (role) {
        case 'ticket':
          navigate('/ticket-dashboard');
          break;
        case 'opman':
          navigate('/operation-dashboard');
          break;
        case 'geman':
          navigate('/general-dashboard');
          break;
        default:
          alert('Invalid role');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded flex">
        <div className="w-1/3">
          <img src={selamLogo} className="h-auto w-full" alt="selam bus logo" />
        </div>
        <div className="w-2/3 p-8">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="ticket">Ticket Officer</option>
                <option value="opman">Operation Manager</option>
                <option value="geman">General Manager</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
