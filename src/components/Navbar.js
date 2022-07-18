import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center h-14">
      <div className="flex flex-[0.4_0_0%] font-medium text-xl ml-4">
        OpenSouce Chandigarh
      </div>
      <div className="flex flex-[0.2_0_0%] flex-row items-center justify-evenly">
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Events</Link>
        <Link to={'/'}>Projects</Link>
        <Link to={'/'}>Team</Link>
      </div>
      <div className="flex flex-[0.4_0_0%] justify-end">
        <button className="bg-gray-800 rounded-xl px-4 py-2 font-bold text-white text-xl mr-4">
          Start Contributing
        </button>
      </div>
    </div>
  );
}

export default Navbar;
