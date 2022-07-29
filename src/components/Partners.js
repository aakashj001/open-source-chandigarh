import React from "react";
import { Card, Carousel } from "./Carousel.js";
import Octocat from "../images/OctocatCar.png";
import docker from "../images/docker.webp";
import collabnix from "../images/Collabnix.png";
import apache from "../images/Apache.png";
import Webiny from "../images/Webiny.png";

const array = [
  {
    name: "Docker",
    des: "Docker helps developers bring their ideas to life by conquering the complexity of app development. ",
    img: docker,
  },
  {
    name: "Webiny",
    des: "Our open source serverless CMS offers you all the enterprise-grade functionalities, while keeping your data within the security perimeter of your own infrastructure.",
    img: Webiny,
  },
  {
    name: "GitHub",
    des: "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.",
    img: Octocat,
  },
  {
    name: "Collabnix",
    des: "Collabnix is a popular blogging site and DevOps community founded by Docker Captain Ajeet Singh Raina.",
    img: collabnix,
  },
  {
    name: "Apache Local Community",
    des: "ALC comprises local groups of Apache (Open Source) enthusiasts, called an 'ALC Chapter'",
    img: apache,
  },
];

function Partners() {
  return (
    <div className=" flex flex-col items-center justify-center p-5 overflow-x-hidden">
      <div className="font-thin my-10 text-2xl md:text-4xl text-center border-b pb-2 px-4 border-b-black">
        Our Community Partners
      </div>

      <Carousel>
        {array.map((element) => (
          <Card
            img={element.img}
            title={element.name}
            content={element.des}
            key={element.name}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Partners;
