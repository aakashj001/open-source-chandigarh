import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import DockerImage from "../images/dockerWorkshop.png";
import OpenLogo from "../images/work-ic.jpg";

function EventCard({ date, title, organiser, link, description, by }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="w-full overflow-hidden lg:w-[80%] h-fit my-4 shadow-2xl box-border flex flex-col lg:flex-row justify-around transition-all "
        // onClick={() => setShow(!show)}
      >
        <div className="flex-1 lg:flex-[1.3_0_0%] h-full flex items-center justify-center font-bold text-4xl">
          <img
            src={DockerImage}
            alt="Event Poster"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col box-border justify-between font-light">
          <div className="font-semibold mt-4 md:mt-8 flex w-full flex-row items-center justify-between px-2 box-border">
            <div className="rounded-full w-20 h-20 border flex items-center justify-center overflow-hidden relative">
              <img src={OpenLogo} alt="Community Logo" className="scale-110" />
            </div>
            <font className="text-[5vw] md:text-[3vw] lg:text-[1.6vw] text-right">
              {by ? by : "By here"}
            </font>
          </div>
          <div className=" text-center text-3xl lg:text-2xl xl:text-4xl">
            {title ? title : "Title here"}
          </div>
          <p className="flex-1 overflow-scroll hidden lg:flex mt-5 text-sm xl:text-xl items-center text-justify px-8">
            {description}
          </p>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center lg:border-t justify-center py-2 my-5 md:my-0">
              <button className="text-xl bg-red-600 px-4 py-2 text-white font-semibold">
                Register Now
              </button>
            </div>
          </div>
        </div>
        {/* <font className="font-normal text-xl mt-3 self-end underline underline-offset-4">
          By:{" "}
          {organiser ? (
            <a href={link} target="blank" className="text-red-600">
              {" " + organiser}
            </a>
          ) : (
            "Organisers Here"
          )}
        </font> */}
      </div>
      {show && (
        <div
          className={`fixed w-screen h-screen top-16 backdrop-blur-sm flex flex-col items-center justify-center bg-[rgba(0,0,0,0.2)]`}
        >
          <div className="w-[90%] md:w-3/4 h-[70vh] md:h-[60vh] bg-white rounded-xl relative top-[-4rem] flex flex-col justify-around items-center py-8 px-4">
            <button
              className="absolute top-4 right-2 md:top-8 md:right-4 text-3xl md:text-5xl"
              onClick={() => setShow(!show)}
            >
              {" "}
              <CgClose />
            </button>
            <h1 className="text-3xl md:text-5xl font-bold underline underline-offset-4">
              {title}
            </h1>
            <p className="text-xl text-justify border-b md:px-8 h-72 md:h-52 overflow-auto">
              {description}
            </p>
            <font className="self-end text-xl md:text-2xl text-black text-right">
              By: {<font className="text-red-500">{organiser}</font>}
              <br />
              <font className="text-base md:text-lg">
                To know more{" "}
                <a
                  href={link}
                  className="text-blue-500 underline underline-offset-4"
                  target="blank"
                >
                  {" "}
                  Click Here{" "}
                </a>
              </font>
            </font>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;
