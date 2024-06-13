import React, { useState } from 'react';

const WaitListVerification = () => {
  const [waitlist, setWaitlist] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [details, setDetails] = useState(null);

  const handleSelectRoute = (routeId) => {
    // Mock API call to fetch waitlist details
    const routeDetails = {
      routeId,
      position: 3,
      availableSeats: 2,
      passengers: [
        { id: 1, name: 'John Doe', position: 1 },
        { id: 2, name: 'Jane Smith', position: 2 },
        { id: 3, name: 'Alice Johnson', position: 3 },
      ],
    };
    setDetails(routeDetails);
  };

  const handleGrantSeat = (passengerId) => {
    // Mock API call to grant seat to the passenger
    alert(`Seat granted to passenger with ID: ${passengerId}`);
  };

  // Mock API call to fetch waitlist
  const fetchWaitlist = () => {
    const mockWaitlist = [
      { routeId: 1, routeName: 'Route 1' },
      { routeId: 2, routeName: 'Route 2' },
    ];
    setWaitlist(mockWaitlist);
  };

  useState(() => {
    fetchWaitlist();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Verify Waitlist</h2>
      <div className="mb-4">
        <label className="block mb-2">Select Route</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => handleSelectRoute(e.target.value)}
        >
          <option value="">Select a route</option>
          {waitlist.map((route) => (
            <option key={route.routeId} value={route.routeId}>
              {route.routeName}
            </option>
          ))}
        </select>
      </div>
      {details && (
        <div>
          <h3 className="text-lg font-bold">Route Details</h3>
          <p>Position on Waitlist: {details.position}</p>
          <p>Available Seats: {details.availableSeats}</p>
          <h4 className="font-bold mt-2">Passengers</h4>
          <ul>
            {details.passengers.map((passenger) => (
              <li key={passenger.id}>
                {passenger.name} - Position {passenger.position}
                {details.availableSeats > 0 && (
                  <button
                    className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
                    onClick={() => handleGrantSeat(passenger.id)}
                  >
                    Grant Seat
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WaitListVerification;
