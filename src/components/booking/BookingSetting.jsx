import React, { useState } from 'react';

const BookingSettings = () => {
  const [bookingId, setBookingId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('booked'); // status can be 'booked' or 'canceled'

  const handleEditBooking = (e) => {
    e.preventDefault();
    // Edit booking logic here
    alert('Booking edited successfully!');
  };

  const handleCancelBooking = () => {
    // Cancel booking logic here
    setStatus('canceled');
    alert('Booking canceled successfully!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit or Cancel Booking</h2>
      <form onSubmit={handleEditBooking}>
        <div className="mb-4">
          <label className="block mb-2">Booking ID</label>
          <input
            type="text"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit Booking
          </button>
          <button
            type="button"
            onClick={handleCancelBooking}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel Booking
          </button>
        </div>
      </form>
      {status === 'canceled' && (
        <p className="text-red-500 mt-4">This booking has been canceled.</p>
      )}
    </div>
  );
};

export default BookingSettings;
