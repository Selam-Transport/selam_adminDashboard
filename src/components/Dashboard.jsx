import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Heading, Box } from '@chakra-ui/react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const Dashboard = () => {
  const monthlyRevenueChartRef = useRef(null);
  let monthlyRevenueChartInstance = useRef(null); // Store the monthly revenue chart instance in a ref

  // Sample data for monthly revenue
  const data = {
    labels: ['April', 'May', 'June'],
    datasets: [{
      label: 'Monthy Revenue',
      data: [300, 250, 400],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false // Hide legend for simplicity, can be adjusted as needed
        }
      }
    }
  };

  useEffect(() => {
    // Create or update the monthly revenue chart
    if (monthlyRevenueChartRef.current) {
      if (monthlyRevenueChartInstance.current) {
        monthlyRevenueChartInstance.current.destroy();
      }
      
      monthlyRevenueChartInstance.current = new Chart(monthlyRevenueChartRef.current, config);
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (monthlyRevenueChartInstance.current) {
        monthlyRevenueChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4">
      <Heading as="h1" size="xl" mb={4}>
        Dashboard
      </Heading>

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

      {/* Monthly Revenue Chart */}
      <Box bg="white" shadow="md" rounded="md" p={4} mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Monthly Revenue
        </Heading>
        <canvas ref={monthlyRevenueChartRef} style={{ width: '70%', height: '70%' }}></canvas>
      </Box>

      {/* Other Analytics */}
      <Box bg="white" shadow="md" rounded="md" p={4} mb={8}>
        <Heading as="h2" size="md" mb={2}>
          Other Analytics
        </Heading>
        <ul className="list-disc pl-5">
          <li>Total Bookings: 2,345</li>
          <li>Average Rating: 4.5</li>
          <li>Number of Routes: 120</li>
          {/* Add more analytics as needed */}
        </ul>
      </Box>

      {/* User Requests and Help */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">User Requests</h2>
          <ul className="list-disc pl-5">
            <li><i>user1@gmail.com</i> requested a refund</li>
            <li><i>user2@gmail.com</i> asked for route change</li>
            {/* Add more user requests as needed */}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Help Requests</h2>
          <ul className="list-disc pl-5">
            <li><i>user3@gmail.com</i> asked for help with booking</li>
            <li><i>user4@gmail.com</i> reported an issue</li>
            {/* Add more help requests as needed */}
          </ul>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Call-to-Action Button */}
      <div className="mt-8 text-center">
        <Link to="/analytics">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Detailed Analytics
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
