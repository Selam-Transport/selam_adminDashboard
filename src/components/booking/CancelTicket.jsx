import React, { useState } from 'react';

const CancelTicket = () => {
  const [ticketId, setTicketId] = useState('');

  const handleCancelTicket = (e) => {
    e.preventDefault();
    // Mock API call to cancel ticket
    alert(`Ticket ID: ${ticketId} has been canceled`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cancel Ticket</h2>
      <form onSubmit={handleCancelTicket}>
        <div className="mb-4">
          <label className="block mb-2">Ticket ID</label>
          <input
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Cancel Ticket
        </button>
      </form>
    </div>
  );
};

export default CancelTicket;
