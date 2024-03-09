import React from "react";
import "./FullCalender.css";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//  npm i @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid 

function FullCalender(){
    return(
        <div className="full-calender">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        // weekends={false}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
      />
    </div>
    )
}

export default FullCalender;



