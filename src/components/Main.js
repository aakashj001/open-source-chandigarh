import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/work-ic.jpg";

function Main() {
  return (
    <div className="container m-auto flex flex-col justify-center items-center mt-2">
      <img src={heroImg} alt="Hero Banner" className="w-full md:w-[60rem]" />
      <div className="font-medium text-2xl md:text-4xl text-center w-full mx-10">
        Open Source Chandigarh Powered by{" "}
        <font className="text-red-500 font-semibold">Chitkara University</font>
      </div>
      <div className="md:w-[80%] lg:w-[60%] font-extralight mx-8 mt-10 flex flex-col md:flex-row items-center justify-between text-lg md:text-xl text-center">
        <font className="md:w-[49%] px-4 bg-black font-regular text-white text-left h-64 flex flex-col justify-around">
          <h1 className="border-b-2 border-b-red-600 text-2xl font-bold">
            Vision
          </h1>
          To present the benefits of network effects of open-source communities
          to budding engineers and existing technicians in the Tri-city area
        </font>
        <br />
        <font className="md:w-[49%] px-4 bg-red-600 font-regular text-white text-left h-64 flex flex-col justify-around">
          <h1 className="border-b-2 border-b-black text-2xl font-bold">
            Mission
          </h1>
          To build a robust and dignified ecosystem for the advancement of
          open-source technologies and promote the same in the Tri-City
        </font>
      </div>
      <div className="flex flex-col md:flex-row w-full my-5 items-center justify-center">
        <Link
          to={"/projects"}
          className="bg-black rounded-xl mx-5 my-2 px-4 py-2 font-medium text-white text-md md:text-xl"
        >
          Check-Out Projects
        </Link>
        <button className="bg-black rounded-xl mx-5 my-2 px-4 py-2 font-medium text-white text-md md:text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main;
