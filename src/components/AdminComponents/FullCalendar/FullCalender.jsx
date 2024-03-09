<<<<<<< HEAD:src/components/AdminComponents/FullCalendar/FullCalender.jsx
import React from "react";
import "./FullCalender.css";
import Fullcalendar from "@fullcalendar/react";
=======
//  import React from "react";
//   import "../Sass/FullCalender.css";
//  import Fullcalendar from "@fullcalendar/react";
//  import dayGridPlugin from "@fullcalendar/daygrid";
//  import timeGridPlugin from "@fullcalendar/timegrid";
//  import interactionPlugin from "@fullcalendar/interaction";
// // // //  npm i @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid

//  function FullCalender(){
//      return(
//          <div className="full-calender">
//        <Fullcalendar
//          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//          initialView={"timeGridWeek"}
//          // weekends={false}
//          headerToolbar={{
//            start: "today prev,next",
//            center: "title",
//            end: "dayGridMonth,timeGridWeek,timeGridDay",
//          }}
//          height={"90vh"}
//        />
//      </div>
//      )
//  }

//  export default FullCalender;

// import React, { useEffect, useRef } from 'react';
// import FullCalendar from '@fullcalendar/react';
// // import dayGridPlugin from '@fullcalendar/daygrid';

// const FullCalender = () => {
//   const calendarRef = useRef(null);

//   useEffect(() => {
//     const handleDOMContentLoaded = () => {
//       const calendarEl = calendarRef.current;
//       const calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth',
//         headerToolbar: {
//           center: 'addEventButton'
//         },
//         customButtons: {
//           addEventButton: {
//             text: 'add event...',
//             click: function() {
//               var dateStr = prompt('Enter a date in YYYY-MM-DD format');
//               var date = new Date(dateStr + 'T00:00:00'); // will be in local time

//               if (!isNaN(date.valueOf())) { // valid?
//                 calendar.addEvent({
//                   title: 'dynamic event',
//                   start: date,
//                   allDay: true
//                 });
//                 alert('Great. Now, update your database...');
//               } else {
//                 alert('Invalid date.');
//               }
//             }
//           }
//         }
//       });

//       calendar.render();
//     };

//     document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

//     return () => {
//       document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
//     };
//   }, []);

//   return <div ref={calendarRef} />;
// };

// export default FullCalender;

import React, { useEffect, useState } from "react";
import "../Sass/FullCalender.css";
import FullCalendar from "@fullcalendar/react";
>>>>>>> d4f19a854bc47bbe7ebeda6e029c6ce1dd1c7cde:src/AdminModule/FullCalender.jsx
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