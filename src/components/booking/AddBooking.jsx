const AddBooking = () => (
    <div>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Customer Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Booking
        </button>
      </form>
    </div>
  );
  

export default AddBooking; 