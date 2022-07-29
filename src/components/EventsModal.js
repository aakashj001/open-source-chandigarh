import React from "react";
import {  AiOutlineClose } from "react-icons/ai";


function EventsModal({name,date,desc,link,close}) {
  const registerEvent = () => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className="fixed container z-50 text-black top-0 bottom-0 left-0 right-0 w-[350px] h-fit md:w-[650px] md:h-fit shadow-2xl border items-center space-y-3 shadow-red-100 border-red-200 m-auto bg-white flex flex-col rounded-xl p-8">
    <AiOutlineClose size={25} className='absolute top-2 left-2 cursor-pointer' onClick={()=>{close()}}/>
      <name className='text-3xl border-b-2 border-red-400'>{name}</name>
      <date className='text-sm'>{date}</date>
      <p className="text-lg">{desc}</p>
      <button onClick={()=>{registerEvent()}} className="bg-red-500 text-white py-2 w-[250px] active:scale-95">Register</button>
    </div>
  );
}

export default EventsModal;
