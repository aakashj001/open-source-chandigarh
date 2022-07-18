import React from "react";
import BasicCard from "./BasicCard";
import grow from '../images/grow.png'
import collaborators from "../images/collaborators.png"
import workshop from '../images/workshops.png'

function Core() {
  return (
    <div className="container mt-10 m-auto flex flex-col items-center justify-center">
      <font className="font-thin text-3xl text-center border-b pb-2 px-4 border-b-black">
        Core Principles
      </font>
      <div className="flex flex-col w-full md:flex-row justify-between my-10">
        <BasicCard title={"Aware"} images = {workshop} />
        <BasicCard title={"Contribute"} images = {collaborators} />
        <BasicCard title={"Grow"} images = {grow}/>
      </div>
    </div>
  );
}

export default Core;
