import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Top Section with Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl">1,234</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Total Buses</h2>
          <p className="text-3xl">56</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Revenue Last Month</h2>
          <p className="text-3xl">ETB 123,345</p>
        </div>
      </div>

      {/* Other Analytics */}
      <div className="bg-white shadow-md rounded p-4 mb-8">
        <h2 className="text-xl font-bold mb-2">Other Analytics</h2>
        <ul className="list-disc pl-5">
          <li>Total Bookings: 2,345</li>
          <li>Average Rating: 4.5</li>
          <li>Number of Routes: 120</li>
          {/* Add more analytics as needed */}
        </ul>
      </div>

      {/* User Requests and Help */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">User Requests</h2>
          <ul className="list-disc pl-5">
            <li><i>user1@gmail.com</i> requested a refund</li>
            <li><i>user2@gmail.com</i>  asked for route change</li>
            {/* Add more user requests as needed */}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Help Requests</h2>
          <ul className="list-disc pl-5">
            <li><i>user3@gmail.com</i>  asked for help with booking</li>
            <li><i>user4@gmail.com</i>  reported an issue</li>
            {/* Add more help requests as needed */}
          </ul>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Pending Approvals</h2>
          <ul className="list-disc pl-5">
            <li>Pending Approval 1</li>
            <li>Pending Approval 2</li>
            {/* Add more pending approvals as needed */}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Notifications</h2>
          <ul className="list-disc pl-5">
            <li>Notification 1</li>
            <li>Notification 2</li>
            {/* Add more notifications as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
