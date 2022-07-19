import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const loc = useLocation();
  useEffect(() => {
    let str = loc.pathname;
    let currLoc = str.split("/")[1]

    document.title = currLoc === '' ? 'OpenSource Chandigarh' : currLoc.charAt(0).toUpperCase() + currLoc.slice(1) + ' | OpenChd'

    const but = document.querySelectorAll(`a[href = '${str}']`)
    const acLink = document.querySelectorAll('a')
    acLink.forEach(active => {
      active.classList.remove('bg-[rgba(0,0,0,0.15)]')
    })
    but.forEach(buts => {
      if(!(buts.classList.contains('link'))){
        buts.classList.add('bg-[rgba(0,0,0,0.15)]')
      }
    })
  }, [loc])
  return (
    <div className="sticky top-0 z-[99999] bg-white md:bg-transparent md:backdrop-blur-md flex w-screen items-center h-16 shadow-2xl">
      <div className="flex flex-1 md:flex-[0.4_0_0%] font-medium text-2xl ml-4">
        OpenSource Chandigarh
      </div>
      <div className="hidden lg:flex flex-[0.3_0_0%] flex-row items-center text-lg justify-between">
        <Link to={"/"} className = "px-4 py-2 rounded-full">Home</Link>
        <Link to={"/events"} className = "px-4 py-2 rounded-full">Events</Link>
        <Link to={"/projects"} className = "px-4 py-2 rounded-full">Projects</Link>
        <Link to={"/team"} className = "px-4 py-2 rounded-full">Team</Link>
      </div>
      <div className="hidden lg:flex flex-[0.4_0_0%] justify-end">
        <button className="bg-gray-800 rounded-xl px-4 py-2 font-semibold text-white text-xl mr-4">
          Start Contributing
        </button>
      </div>
    </div>
  );
}

export default Navbar;
