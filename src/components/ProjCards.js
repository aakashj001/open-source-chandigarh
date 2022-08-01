import React from "react";

function ProjCards({ title, description,link }) {
  const openProject = () => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className=" border-2 border-black text-xl flex flex-col justify-around rounded-sm w-full md:w-[22.5em] my-4 h-72 py-4 px-2 hover:scale-[1.01] hover:shadow-xl transition-all">
      <font className="text-slate-800 text-2xl font-semibold w-full pb-2 border-b">
        {title ? title : "Project title here"}
      </font>
      <font className="font-mono text-lg text-slate-600 mt-2 overflow-hidden">
        {description
          ? description
          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, labore! Ratione repudiandae natus fugiat hic."}
      </font>
      {/* <font className = 'text-white font-medium text-xl'>
          {authors ? authors : "Project author(s) here"}
      </font> */}
      <button onClick={()=>{openProject()}} className="py-2 px-3 text-md bg-red-600 w-fit text-white self-end active:scale-95 transition-all ">Learn More</button>
    </div>
  );
}

export default ProjCards;
