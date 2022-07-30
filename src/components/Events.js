import axios from "axios";
import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Events() {
  const [events, setEvents] = useState({ events: [] });

  useEffect(() => {
    const fetchEvents = () => {
      axios
        .get("http://127.0.0.1:8000/projects", {})
        .then((res) => {
          setEvents(res.data);
          console.log(events.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container m-auto flex flex-col justify-center shadow-2xl md:my-10 px-4 md:px-24 py-12">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Upcoming Events
      </font>
      <div className="mt-10 flex flex-row flex-wrap items-center justify-around">
        {events.events?.map((item) => (
          <EventCard
            key={item.id}
            date={`5th - 6th August, 2022`}
            title={"Docker Workshop"}
            organiser={"Mr. Ajeet Singh Raina"}
            link={"https://www.linkedin.com/in/ajeetsraina"}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
