import React, {  useState } from "react";
import {VscChevronRight, VscChevronLeft} from 'react-icons/vsc';


const MAX_VISIBILITY = 3;

const Card = ({title, content,img,cord}) => (
  <div className='card h-[100%] flex flex-col items-center justify-between p-3 md:p-[2rem] bg-neutral-800 text-center transition-all ease-out rounded-2xl'>
    <img src={img} alt="Logo for brands" className="h-24 md:h-32 object-contain" />
    <font className="text-3xl md:text-5xl font-bold w-full text-white py-2 border-b">{title}</font>
    <p className="hidden md:block flex-1 mt-2 md:mt-5 text-white">{content}</p>

    <blockquote>
      {/* {cord} */}
    </blockquote>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel w-[75vw] relative h-[15rem] md:w-[60vw] md:h-[20rem] lg:w-[50rem] lg:h-[25rem]'>
      {active > 0 && <button className='text-white text-[4rem] md:text-[5rem] absolute flex items-center top-[50%] z-[2] cursor-pointer translate-x-[-70%] md:translate-x-[-100%] translate-y-[-50%] ' onClick={() => setActive(i => i - 1)}><VscChevronLeft/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='text-white text-[4rem] md:text-[5rem] absolute flex items-center top-[50%] z-[2] cursor-pointer translate-x-[72vw] md:translate-x-[62vw] lg:translate-x-[1000%] translate-y-[-50%]' onClick={() => setActive(i => i + 1)}><VscChevronRight/></button>}
    </div>
  );
};

export {
    Carousel,
    Card
}