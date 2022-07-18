import React from "react";

function BasicCard({ title, description }) {
  return (
    <div className="md:flex-[0.3_0_0%] h-56 flex flex-col px-5 justify-center border-l border-b">
      <font className="text-3xl font-light">{title}</font>
      <font className = 'font-thin mt-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil, rem quaerat eum minus quasi.
      </font>
    </div>
  );
}

export default BasicCard;
