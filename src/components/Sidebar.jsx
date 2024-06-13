import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { FaUserCog, FaTicketAlt, FaRoute } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="w-64 h-screen bg-green-800 text-white">
      <div className="p-4 text-2xl font-bold">Selam Bus Admin</div>
      <ul>
        <li className="p-4 cursor-pointer flex items-center space-x-2" onClick={() => onNavigate('dashboard')}>
          <AiFillDashboard />
          <span>Dashboard</span>
        </li>
        <li className="p-4 cursor-pointer flex items-center space-x-2" onClick={() => onNavigate('user-management')}>
          <FaUserCog />
          <span>User Management</span>
        </li>
        <li className="p-4 cursor-pointer flex items-center space-x-2" onClick={() => onNavigate('booking-management')}>
          <FaTicketAlt />
          <span>Booking Management</span>
        </li>
        <li className="p-4 cursor-pointer flex items-center space-x-2" onClick={() => onNavigate('route-management')}>
          <FaRoute />
          <span>Route Management</span>
        </li>
        <li className="p-4 cursor-pointer flex items-center space-x-2" onClick={() => onNavigate('analytics')}>
          <SiGoogleanalytics />
          <span>Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
