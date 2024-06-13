import React, { useState } from 'react';

const AddDriverForm = ({ onAddDriver }) => {
  const [driverInfo, setDriverInfo] = useState({
    driverId: '',
    name: '',
    licenseNumber: '',
    contactNumber: '',
    vehicleNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo({ ...driverInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (can add more validation as needed)
    if (driverInfo.driverId && driverInfo.name && driverInfo.licenseNumber && driverInfo.contactNumber && driverInfo.vehicleNumber) {
      // Call parent function to add driver
      onAddDriver(driverInfo);
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Add New Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Driver ID</label>
          <input
            type="text"
            name="driverId"
            value={driverInfo.driverId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={driverInfo.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">License Number</label>
          <input
            type="text"
            name="licenseNumber"
            value={driverInfo.licenseNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={driverInfo.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            value={driverInfo.vehicleNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Driver
        </button>
      </form>
    </div>
  );
};

export default AddDriverForm;
