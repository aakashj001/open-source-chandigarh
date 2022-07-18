import React from "react";

function Main() {
  return (
    <div className="container m-auto flex flex-col justify-center items-center mt-10">
      <div className="font-medium text-4xl text-center">
        Open Source Chandigarh Powered by{" "}
        <font className="text-red-500 font-semibold">Chitkara University</font>
      </div>
      <div className="font-extralight text-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti tempora! Nobis atque voluptatum magni exercitationem? Aspernatur, excepturi labore rerum aliquid, iusto expedita maxime fuga qui ea autem possimus perspiciatis.
      </div>
      <div className="flex flex-row w-full mt-5 items-center justify-center">
        <button className="bg-black rounded-xl m-5 px-4 py-2 font-medium text-white text-xl">
          Check-Out Projects
        </button>
        <button className="bg-black rounded-xl m-5 px-4 py-2 font-medium text-white text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main;
