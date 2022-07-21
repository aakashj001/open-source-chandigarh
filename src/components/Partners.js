import React from "react";
import { Card, Carousel } from "./Carousel.js";
import Octocat from "../images/Octocat.png";
import docker from "../images/docker.webp";
import collabnix from "../images/Collabnix.png";
import apache from "../images/Apache.png";


const array = [
  {
    name: "GitHub",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img:  Octocat ,
    cord: "Surbhi Dey (Github)",
  },
  {
    name: "Apache",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img:  apache ,
    cord: "Ajeet S Raina (Developer Relations Manager,Docker,Inc.)",
  },
  {
    name: "Collabnix",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: collabnix ,
    cord:  Octocat ,
  },
  {
    name: "Docker",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img:  docker ,
    cord: "Ajeet Raina (Developer Relations Manager, Docker, Inc.)",
  },
];

function Partners() {
  return (
    <div className=" flex flex-col items-center justify-center p-5 overflow-x-hidden">
      <div className='font-thin my-10 text-2xl md:text-4xl text-center border-b pb-2 px-4 border-b-black'>
            Our Community Partners
        </div>

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