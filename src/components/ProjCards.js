import React from "react";

function ProjCards({ title, description, authors }) {
  return (
    <div className="bg-zinc-700 text-xl flex flex-col justify-around rounded-md w-full md:w-[22.5em] my-4 h-64 py-4 px-2 hover:scale-[1.01] hover:shadow-xl transition-all">
      <font className="text-white text-2xl font-semibold w-full pb-2 border-b">
        {title ? title : "Project title here"}
      </font>
      <font className="font-thin text-lg text-white mt-2">
        {description
          ? description
          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, labore! Ratione repudiandae natus fugiat hic."}
      </font>
      <font className = 'text-white font-medium text-xl'>
          {authors ? authors : "Project author(s) here"}
      </font>
    </div>
  );
}

export default ProjCards;
