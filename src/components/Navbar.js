import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";


function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className="sticky box-border top-0 z-[99999] bg-white flex w-screen items-center h-16 shadow-lg shadow-slate-200">
      <div className="flex flex-1 md:flex-[0.4_0_0%] font-medium text-2xl ml-4">
        OpenSource Chandigarh
      </div>
      <div className="hidden lg:flex flex-[0.3_0_0%] flex-row items-center text-lg justify-between">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Events</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Team</Link>
      </div>
      <div className="hidden lg:flex flex-[0.4_0_0%] justify-end">
        <button className="bg-gray-800 rounded-xl px-4 py-2 font-semibold text-white text-xl mr-4">
          Start Contributing
        </button>
      </div>

      <div className="flex-[0.1_0_0%] md:hidden justify-end " onClick={() => setShow(!show)}>
        <AiOutlineMenu size={25} />
      </div>
      <div className={`top-[3.5rem] ${show ? 'flex' : 'hidden'} absolute left-0 right-0 z-50 space-y-5 flex md:hidden flex-col text-center transition-all shadow-2xl bg-neutral-800 p-8 text-white`}>
        {/* <AiOutlineArrowLeft onClick={() => setShow(!show)} size={20} className="fixed top-2 left-2"/> */}
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Events</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Team</Link>
      </div>
    </div>
  );
}

export default Navbar;
