import React from "react";
import BasicCard from "./BasicCard";

function Core() {
  return (
    <div className="container mt-10 m-auto flex flex-col items-center justify-center">
      <font className="font-thin text-3xl text-center border-b pb-2 px-4 border-b-black">
        Core Principles
      </font>
      <div className="flex flex-col w-full md:flex-row justify-between my-10">
        <BasicCard title={"Aware"} />
        <BasicCard title={"Contribute"} />
        <BasicCard title={"Grow"} />
      </div>
    </div>
  );
}

export default Core;
