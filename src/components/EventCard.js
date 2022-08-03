import React, { useState } from "react";
import {CgClose} from 'react-icons/cg'

function EventCard({ date, title, organiser, link,description }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-[27em] h-64 my-4 shadow-md bpx-border px-4 py-2 flex flex-col justify-around hover:shadow-xl transition-all border border-black" onClick={() => setShow(!show)}>
        <font className="font-bold text-4xl pb-2 border-b-2">
          {date ? date : "Date here"}
        </font>
        <font className="font-light text-3xl">
          {title ? title : "Title here"}
        </font>
        <font className="font-normal text-xl mt-3 self-end underline underline-offset-4">
          By:{" "}
          {organiser ? (
            <a href={link} target="blank" className="text-red-600">
              {" " + organiser}
            </a>
          ) : (
            "Organisers Here"
          )}
        </font>
      </div>
      {show && (
        <div className={`fixed w-screen h-screen top-16 backdrop-blur-sm flex flex-col items-center justify-center bg-[rgba(0,0,0,0.2)]`}>
          <div className="w-[90%] md:w-3/4 h-[70vh] md:h-[60vh] bg-white rounded-xl relative top-[-4rem] flex flex-col justify-around items-center py-8 px-4">
            <button className="absolute top-4 right-2 md:top-8 md:right-4 text-3xl md:text-5xl" onClick={() => setShow(!show)}> <CgClose/></button>
            <h1 className="text-3xl md:text-5xl font-bold underline underline-offset-4">
              {title}
            </h1>
            <p className="text-xl text-justify border-b md:px-8 h-72 md:h-52 overflow-auto">{description}</p>
            <font className = "self-end text-xl md:text-2xl text-black text-right">
              By: {<font className="text-red-500">{organiser}</font>}
              <br />
              <font className = 'text-base md:text-lg'>To know more <a href={link} className = 'text-blue-500 underline underline-offset-4' target="blank"> Click Here </a></font>
            </font>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;
