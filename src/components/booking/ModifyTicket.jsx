import React, { useState } from 'react';

const ModifyTicket = () => {
  const [ticketId, setTicketId] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [newTicket, setNewTicket] = useState({
    route: '',
    date: '',
    price: '',
  });
  const [tickets, setTickets] = useState([
    // Mock data, replace with actual API call
    { id: 1, route: 'Route 1', date: '2022-10-10', price: '100' },
    { id: 2, route: 'Route 2', date: '2022-11-11', price: '150' },
  ]);

  const handleModifyTicket = (e) => {
    e.preventDefault();
    // Mock API call to modify ticket details
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === parseInt(ticketId)
        ? { ...ticket, ...JSON.parse(newDetails) }
        : ticket
    );
    setTickets(updatedTickets);
    alert(`Ticket ID: ${ticketId} has been modified.`);
  };

  const handleAddTicket = (e) => {
    e.preventDefault();
    // Mock API call to add a new ticket
    const newTicketId = tickets.length + 1;
    setTickets([...tickets, { id: newTicketId, ...newTicket }]);
    alert('New ticket added.');
  };

  const handleDeleteTicket = (id) => {
    // Mock API call to delete a ticket
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
    alert(`Ticket ID: ${id} has been deleted.`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Modify Ticket</h2>
      <form onSubmit={handleModifyTicket}>
        <div className="mb-4">
          <label className="block mb-2">Ticket ID</label>
          <input
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">New Details (JSON format)</label>
          <input
            type="text"
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Modify Ticket
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8 mb-4">Add New Ticket</h2>
      <form onSubmit={handleAddTicket}>
        <div className="mb-4">
          <label className="block mb-2">Route</label>
          <input
            type="text"
            value={newTicket.route}
            onChange={(e) => setNewTicket({ ...newTicket, route: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            value={newTicket.date}
            onChange={(e) => setNewTicket({ ...newTicket, date: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="text"
            value={newTicket.price}
            onChange={(e) => setNewTicket({ ...newTicket, price: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Ticket
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8 mb-4">Booked Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="mb-2 p-2 border border-gray-300 rounded">
            {`ID: ${ticket.id}, Route: ${ticket.route}, Date: ${ticket.date}, Price: ${ticket.price}`}
            <button
              className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
              onClick={() => handleDeleteTicket(ticket.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModifyTicket;
