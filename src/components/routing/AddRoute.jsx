import React, { useState } from 'react';

const AddRoute = () => {
  const [routeId, setRouteId] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, such as sending data to backend
    console.log({
      routeId,
      startLocation,
      endLocation,
      distance,
      departureTime,
      arrivalTime
    });
    // Reset form fields after submission if needed
    setRouteId('');
    setStartLocation('');
    setEndLocation('');
    setDistance('');
    setDepartureTime('');
    setArrivalTime('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add Route</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="routeId" className="block mb-2">Route ID</label>
          <input
            type="text"
            id="routeId"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startLocation" className="block mb-2">Start Location</label>
          <input
            type="text"
            id="startLocation"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endLocation" className="block mb-2">End Location</label>
          <input
            type="text"
            id="endLocation"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="distance" className="block mb-2">Distance (in km)</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="departureTime" className="block mb-2">Departure Time</label>
          <input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="arrivalTime" className="block mb-2">Arrival Time</label>
          <input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Route
        </button>
      </form>
    </div>
  );
};

export default AddRoute;
