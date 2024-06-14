import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={< LoginPage />} />
        <Route path="/operation-dashboard" element={< DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
