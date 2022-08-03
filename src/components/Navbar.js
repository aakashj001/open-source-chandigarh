
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [show, setShow] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    let str = loc.pathname;
    let currLoc = str.split("/")[1];

    document.title =
      currLoc === ""
        ? "OpenSource Chandigarh"
        : currLoc.charAt(0).toUpperCase() + currLoc.slice(1) + " | OpenChd";

    const but = document.querySelectorAll(`a[href = '${str}']`);
    const acLink = document.querySelectorAll("a");
    acLink.forEach((active) => {
      if (active.classList.contains("light")) {
        active.classList.remove("bg-[rgba(255,255,255,0.15)]");
      } else {
        active.classList.remove("bg-[rgba(0,0,0,0.15)]");
      }
    });
    but.forEach((buts) => {
      if (!buts.classList.contains("link")) {
        if (buts.classList.contains("light")) {
          buts.classList.add("bg-[rgba(255,255,255,0.15)]");
        } else {
          buts.classList.add("bg-[rgba(0,0,0,0.15)]");
        }
      }
    });
  }, [loc]);
  return (
    <div className="sticky top-0 z-[99999] bg-white flex w-screen items-center h-16 shadow-lg">
      <Link
        className="flex flex-1 lg:flex-[0.4_0_0%] font-medium text-2xl ml-4 link"
        to={"/"}
      >
        OpenSource&nbsp;<font className = 'text-red-500 font-semibold'>Chandigarh</font>
      </Link>
      <div className="hidden lg:flex flex-[0.35_0_0%] flex-row items-center text-lg justify-between">
        <Link to={"/"} className="px-4 py-2 rounded-full transition-all">
          Home
        </Link>
        <Link to={"/events"} className="px-4 py-2 rounded-full transition-all">
          Events
        </Link>
        <Link
          to={"/projects"}
          className="px-4 py-2 rounded-full transition-all"
        >
          Projects
        </Link>
        <Link to={"/trending"} className="px-4 py-2 rounded-full transition-all text-center">
          Trending
        </Link>
      </div>
      <div className="hidden lg:flex flex-[0.4_0_0%] justify-end">
        <button className="bg-black rounded-xl px-4 py-2 font-semibold text-white text-xl mr-4">
          Start Contributing
        </button>
      </div>


      <button
        className="flex-[0.2_0_0%] flex pr-5 lg:hidden justify-end "
        onClick={() => setShow(!show)}
      >
        {show ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>
      <div
        className={`top-16 ${
          show ? "visible opacity-1" : "invisible opacity-0"
        } absolute left-0 right-0 z-50 space-y-5 flex lg:hidden flex-col text-center transition-all shadow-2xl bg-neutral-800 p-8 text-white`}
      >
        <Link
          to={"/"}
          onClick={() => setShow(!show)}
          className="py-2 rounded-xl light"
        >
          Home
        </Link>
        <Link
          to={"/events"}
          onClick={() => setShow(!show)}
          className="py-2 rounded-xl light"
        >
          Events
        </Link>
        <Link
          to={"/projects"}
          onClick={() => setShow(!show)}
          className="py-2 rounded-xl light"
        >
          Projects
        </Link>
        <Link
          to={"/trending"}
          onClick={() => setShow(!show)}
          className="py-2 rounded-xl light"
        >
          Trending
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
