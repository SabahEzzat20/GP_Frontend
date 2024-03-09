import "./FullCalender.css";
import Fullcalendar from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import "./FullCalender.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const data = [
  {
    year: 2024,
    month: "03",
    day: "11",
    time: "08:00",
  },
  {
    year: 2024,
    month: "03",
    day: "12",
    time: "10:00",
  },
  {
    year: 2024,
    month: "03",
    day: "08",
    time: "11:00",
  },
];

function FullCalender() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const formattedEvents = data.map((event) => {
      const date = new Date(
        `${event.year}-${event.month}-${event.day}T${event.time}`
      );

      return {
        title: "An Appointment",
        start: date,
        allDay: false,
      };
    });

    setEvents(formattedEvents);
  }, []);

  return (
    <div className="full-calendar">
      <div className="actual-calendar">

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"80vh"}
        events={events}
      />
      </div>
    </div>
  );
}

export default FullCalender;