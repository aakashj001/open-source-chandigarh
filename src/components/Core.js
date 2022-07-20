import React from "react";
import BasicCard from "./BasicCard";
import grow from '../images/grow.png'
import collaborators from "../images/collaborators.png"
import workshop from '../images/workshops.png'

function Core() {
  return (
    <div className="container mt-10 m-auto flex flex-col items-center justify-center pb-8 md:pb-14 border-b">
      <font className="font-thin text-2xl md:text-4xl text-center border-b pb-2 px-4 border-b-black">
        Core Principles
      </font>
      <div className="flex flex-col w-full md:flex-row justify-between mt-10">
        <BasicCard title={"Aware"} images = {workshop} description = {"To create a rich demographic of open-source practitioners in Tri-city."}/>
        <BasicCard title={"Contribute"} images = {collaborators} description = {"Contribute back to the Open-Source Community by Peer learning and Enablement"}/>
        <BasicCard title={"Grow"} images = {grow} description = {"For connecting open-source contributors on one forum."}/>
      </div>
    </div>
  );
}

export default Core;
