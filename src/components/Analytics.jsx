import React, { useEffect, useRef } from 'react';
import { Heading, Box } from '@chakra-ui/react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const Analytics = () => {
  const usersChartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const routesChartRef = useRef(null); // Reference for routes chart
  let usersChartInstance = useRef(null);
  let revenueChartInstance = useRef(null);
  let routesChartInstance = useRef(null); // Instance for routes chart

  useEffect(() => {
    // Function to create and update users chart
    const createUsersChart = () => {
      if (usersChartRef.current) {
        if (usersChartInstance.current) {
          usersChartInstance.current.destroy();
        }
        
        usersChartInstance.current = new Chart(usersChartRef.current, {
          type: 'bar',
          data: {
            labels: ['September', 'October', 'November', 'December', 'January', 'February'],
            datasets: [{
              label: 'Number of Users',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    // Function to create and update revenue chart
    const createRevenueChart = () => {
      if (revenueChartRef.current) {
        if (revenueChartInstance.current) {
          revenueChartInstance.current.destroy();
        }
        
        revenueChartInstance.current = new Chart(revenueChartRef.current, {
          type: 'bar',
          data: {
            labels: ['September', 'October', 'November', 'December', 'January', 'February'],
            datasets: [{
              label: 'Revenue (ETB)',
              data: [10000, 15000, 8000, 12000, 9000, 11000], // Replace with actual revenue data
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    // Function to create and update routes chart
    const createRoutesChart = () => {
      if (routesChartRef.current) {
        if (routesChartInstance.current) {
          routesChartInstance.current.destroy();
        }
        
        routesChartInstance.current = new Chart(routesChartRef.current, {
          type: 'bar',
          data: {
            labels: ['September', 'October', 'November', 'December', 'January', 'February'],
            datasets: [{
              label: 'Total Routes Covered (Kms)',
              data: [500, 700, 450, 600, 550, 800], // Replace with actual routes data
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    // Create users chart on component mount
    createUsersChart();

    // Create revenue chart on component mount
    createRevenueChart();

    // Create routes chart on component mount
    createRoutesChart();

    // Cleanup function to destroy chart instances
    return () => {
      if (usersChartInstance.current) {
        usersChartInstance.current.destroy();
      }
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
      }
      if (routesChartInstance.current) {
        routesChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4">
      <Heading as="h1" size="xl" mb={4}>
        Total Analytics Information
      </Heading>

      <Box bg="white" shadow="md" rounded="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Number of Users
        </Heading>
        <canvas ref={usersChartRef}></canvas>
      </Box>

      <Box bg="white" shadow="md" rounded="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Revenue (ETB)
        </Heading>
        <canvas ref={revenueChartRef}></canvas>
      </Box>

      <Box bg="white" shadow="md" rounded="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Total Routes Covered (Kms)
        </Heading>
        <canvas ref={routesChartRef}></canvas>
      </Box>

      {/* Include other components here */}
    </div>
  );
};

export default Analytics;
