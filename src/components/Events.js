import React, { useState } from "react";
import EventCard from "./EventCard";
import EventsModal from "./EventsModal";

function Events() {
  const [show, setShow] = useState(false);
  const closePopup = () => {
    setShow(!show);
  };
  return (
    <div className="container m-auto flex flex-col justify-center shadow-2xl md:my-10 px-4 md:px-24 py-12">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Upcoming Events
      </font>
      <div className="mt-10 flex flex-row flex-wrap items-center justify-around">
        <EventCard
          date={`5th - 6th August, 2022`}
          title={"Docker Workshop"}
          organiser={"Mr. Ajeet Singh Raina"}
          link = {'https://www.linkedin.com/in/ajeetsraina'}
        />
      </div>

      {show && (
        <EventsModal
          close={closePopup}
          name={"Inaugural"}
          date={"July 20, 2022"}
          desc={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quasi quidem hic, nam repellat atque, ex in ut facere non, dolorem blanditiis repellendus inventore. Iste unde expedita illum harum excepturi."
          }
          link={"https://google.com"}
        />
      )}
    </div>
  );
}

export default Events;
