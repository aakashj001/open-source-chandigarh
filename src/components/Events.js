import axios from "axios";
import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Loader from "./Loader";

function Events() {
  const [events, setEvents] = useState({ events: [] });
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchEvents = () => {
      axios
        .get("https://ak.iocoder.in/open/public/events", {})
        .then((res) => {
          setShow(false)
          setEvents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container m-auto flex flex-col justify-center px-4 md:px-24 py-12">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Upcoming Events
      </font>
      <div className="mt-4 flex flex-col items-center">
        {show && <Loader />}
        {events.events?.map((item) => (
          <EventCard
            key={item.id}
            date={item.date}
            title={item.name}
            description={item.description}
            organiser={item.organiser}
            link={item.register_link}
            by = {"OpenSource Chandigarh"}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
