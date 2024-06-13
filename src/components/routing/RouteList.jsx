import React from 'react';

const RouteList = ({ routes, onCancelRoute }) => {
  // Handle case where routes might be undefined or empty
  if (!routes || routes.length === 0) {
    return <div>No active routes available.</div>;
  }

  const handleCancelRoute = (routeId) => {
    // Call parent function to cancel route
    onCancelRoute(routeId);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Active Routes</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.id} className="mb-4">
            <div>
              <span className="font-bold">Route Name:</span> {route.name}
            </div>
            <div>
              <span className="font-bold">Origin:</span> {route.origin}
            </div>
            <div>
              <span className="font-bold">Destination:</span> {route.destination}
            </div>
            <div className="mt-2">
              <button
                onClick={() => handleCancelRoute(route.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel Route
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
