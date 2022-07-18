import React from "react";

function BasicCard({ title, description, images }) {
  return (
    <div className="md:flex-[0.3_0_0%] h-64 flex flex-col px-5 justify-center items-start border-l border-b mx-10 my-5 md:mx-0">
      <img src={images} alt="LOGOS" className="h-20 mb-2"/>
      <font className="text-3xl font-light">{title}</font>
      <font className = 'font-thin mt-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil, rem quaerat eum minus quasi.
      </font>
    </div>
  );
}

export default BasicCard;
