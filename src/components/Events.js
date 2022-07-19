import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="container m-auto flex flex-col justify-center shadow-2xl my-5 px-4 md:px-24 py-12">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Upcoming Events
      </font>
      <div className="mt-10 flex flex-row flex-wrap items-center justify-around">
        <EventCard date={"July 20, 2022"} title={"Inaugral"} />
        <EventCard date={"August 1, 2022"} title={"Open-Source Drive-I"} />
        <EventCard date={"September 5, 2022"} title={"Open-Source Drive-II"} />
        <EventCard date={"September 23, 2022"} title={"Hackathon 48 Hrs"} />
      </div>
    </div>
  );
}

export default Events;
