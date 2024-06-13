import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import UserManagement from '../components/UserManagement';
import BookingManagement from '../components/BookingManagement';
import RouteManagement from '../components/RouteManagement';
import Analytics from '../components/Analytics';

const DashboardPage = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'user-management':
        return <UserManagement />;
      case 'booking-management':
        return <BookingManagement />;
      case 'route-management':
        return <RouteManagement />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onNavigate={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden mr-30">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
