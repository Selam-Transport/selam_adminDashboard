import React, { useState } from 'react';

const ModifyRouteForm = ({ route, onModifyRoute }) => {
  // Initialize local state for form fields
  const [modifiedRoute, setModifiedRoute] = useState({
    routeId: route ? route.routeId : '',
    name: route ? route.name : '',
    startLocation: route ? route.startLocation : '',
    endLocation: route ? route.endLocation : '',
    distance: route ? route.distance : '',
    departureTime: route ? route.departureTime : '',
    arrivalTime: route ? route.arrivalTime : '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModifiedRoute({ ...modifiedRoute, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (can add more validation as needed)
    if (
      modifiedRoute.routeId &&
      modifiedRoute.name &&
      modifiedRoute.startLocation &&
      modifiedRoute.endLocation &&
      modifiedRoute.distance &&
      modifiedRoute.departureTime &&
      modifiedRoute.arrivalTime
    ) {
      // Call parent function to modify route
      onModifyRoute(modifiedRoute);
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Modify Route</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Route ID</label>
          <input
            type="text"
            name="routeId"
            value={modifiedRoute.routeId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Route Name</label>
          <input
            type="text"
            name="name"
            value={modifiedRoute.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Start Location</label>
          <input
            type="text"
            name="startLocation"
            value={modifiedRoute.startLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">End Location</label>
          <input
            type="text"
            name="endLocation"
            value={modifiedRoute.endLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Distance (km)</label>
          <input
            type="number"
            name="distance"
            value={modifiedRoute.distance}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Departure Time</label>
          <input
            type="text"
            name="departureTime"
            value={modifiedRoute.departureTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Arrival Time</label>
          <input
            type="text"
            name="arrivalTime"
            value={modifiedRoute.arrivalTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Modify Route
        </button>
      </form>
    </div>
  );
};

export default ModifyRouteForm;
