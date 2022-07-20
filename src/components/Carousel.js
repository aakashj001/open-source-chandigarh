import React, {  useState } from "react";
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';


const MAX_VISIBILITY = 3;

const Card = ({title, content,img,cord}) => (
  <div className='card w-[100%] h-[100%] p-[2rem] bg-slate-400  text-slate-200 text-justify transition-all ease-out rounded-2xl border '>
    {/* <img src={img} alt="" /> */}
    
    <h2>{title}</h2>
    <p>{content}</p>

    <blockquote>
      {/* {cord} */}
    </blockquote>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='text-white text-[5rem] absolute flex items-center top-[50%] z-[2] cursor-pointer translate-x-[-100%] translate-y-[-50%] ' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
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
      {active < count - 1 && <button className='text-white text-[5rem] absolute flex items-center top-[50%] z-[2] cursor-pointer translate-x-[1000%] translate-y-[-50%]' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

export {
    Carousel,
    Card
}