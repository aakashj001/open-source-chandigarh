import React from "react";
import heroImg from '../images/work-ic.png'

function Main() {
  return (
    <div className="container m-auto flex flex-col justify-center items-center mt-2">
      <img src={heroImg} alt="Hero Banner" className="w-full md:w-[70rem]"/>
      <div className="font-medium text-2xl md:text-4xl text-center w-full mx-10">
        Open Source Chandigarh Powered by{" "}
        <font className="text-red-500 font-semibold">Chitkara University</font>
      </div>
      <div className="font-extralight text-sm mx-8 mt-4 md:text-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti tempora! Nobis atque voluptatum magni exercitationem? Aspernatur, excepturi labore rerum aliquid, iusto expedita maxime fuga qui ea autem possimus perspiciatis.
      </div>
      <div className="flex flex-col md:flex-row w-full mt-5 my-10 items-center justify-center">
        <button className="bg-black rounded-xl mx-5 my-2 px-4 py-2 font-medium text-white text-md md:text-xl">
          Check-Out Projects
        </button>
        <button className="bg-black rounded-xl mx-5 my-2 px-4 py-2 font-medium text-white text-md md:text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main;
