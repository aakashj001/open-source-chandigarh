import React, { useState } from "react";
import EventCard from "./EventCard";
import EventsModal from "./EventsModal";

function Events() {
  const [show, setShow] = useState(false);
  const closePopup = () => {
    setShow(!show);
  };
  return (
    <div className=" relative">
      <div
        className={`container ${
          show ? "blur-sm" : ""
        } m-auto flex flex-col justify-center shadow-2xl md:my-10 px-4 md:px-24 py-12`}
      >
        <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
          Upcoming Events
        </font>
        <div className="mt-10 flex flex-row flex-wrap items-center justify-around">
          <div onClick={() => setShow(!show)}>
            <EventCard
              date={"July 20, 2022"}
              title={"Inaugural"}
              onClick={() => setShow(!show)}
            />
          </div>
          {/* <EventCard date={"August 1, 2022"} title={"Open-Source Drive-I"} />
        <EventCard date={"September 5, 2022"} title={"Open-Source Drive-II"} />
        <EventCard date={"September 23, 2022"} title={"Hackathon 48 Hrs"} /> */}
        </div>
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
