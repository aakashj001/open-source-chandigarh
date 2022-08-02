import React from "react";

function TrendCard({ title, desc, link, provider }) {
  return (
    <div className="w-full h-fit my-4 lg:h-64 shadow-lg hover:shadow-xl transition-all px-8 py-4 flex flex-col items-center justify-around">
      <div className="w-full text-xl md:text-3xl font-medium border-b border-black pb-2 mb-4">
        {title} {"-"} {provider}
      </div>
      <div className="w-full text-justify lg:text-lg mb-2">{desc}</div>
      <div className="w-full flex flex-row justify-end mt-2">
        <a href={link} target = "blank" className=" px-4 py-2 text-lg bg-red-600 text-white font-medium">Learn More</a>
      </div>
    </div>
  );
}

export default TrendCard;
