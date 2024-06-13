import React from 'react';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-4 flex justify-between">
      <div>Welcome, Admin</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{navigate('/')}}>Logout</button>
    </div>
  );
};

export default Navbar;
