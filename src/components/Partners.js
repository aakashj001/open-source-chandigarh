import React from "react";
import { Card, Carousel } from "./Carousel.js";
import Octocat from "../images/Octocat.png";

const array = [
  {
    name: "Github",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { Octocat },
    cord: "Surbhi Dey (Github)",
  },
  {
    name: "Apache",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { Octocat },
    cord: "Ajeet S Raina (Developer Relations Manager,Docker,Inc.)",
  },
  {
    name: "Collabnix",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { Octocat },
    cord: { Octocat },
  },
  {
    name: "Docker",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { Octocat },
    cord: "Ajeet Raina (Developer Relations Manager, Docker, Inc.)",
  },
];

function Partners() {
  return (

    <div className=" flex flex-col items-center justify-center p-5 overflow-x-hidden">
      <font className="text-2xl md:text-4xl text-slate-600 mb-10 py-2 px-4 md:hover:px-8 transition-all border-b  tracking-[0.5rem] md:hover:tracking-[0.75rem] text-center">
        Our Technical Parteners
      </font>

      <Carousel>
        {array.map(element => (
          <Card
          img={element.img}
          title={element.name}
          content={element.des}
          cord={element.cord}
          key = {element.name}
        />
        ))}
      </Carousel>
    </div>
  );
}


export default Partners;
