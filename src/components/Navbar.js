import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-[99999] bg-white flex w-screen items-center h-14 shadow-2xl">
      <div className="flex flex-[0.4_0_0%] font-medium text-2xl ml-4">
        OpenSource Chandigarh
      </div>
      <div className="flex flex-[0.2_0_0%] flex-row items-center text-lg justify-between">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Events</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Team</Link>
      </div>
      <div className="hidden md:flex flex-[0.4_0_0%] justify-end">
        <button className="bg-gray-800 rounded-xl px-4 py-2 font-semibold text-white text-xl mr-4">
          Start Contributing
        </button>
      </div>
    </div>
  );
}

export default Navbar;
