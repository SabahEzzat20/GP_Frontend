import "../../../Sass/ViewAppointments.scss";
import React, { useState, useEffect } from 'react';

const ViewAppointments = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateCurrentDate = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second for dynamic date change

    return () => clearInterval(updateCurrentDate); // Cleanup
  }, []);

  const handleMonthChange = (direction) => {
    let newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (direction === "next") {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isToday = (date) =>
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  const renderCalendarHeader = () => (
    <div className="calendar-header">
      <button onClick={() => handleMonthChange("prev")}>
        <i className="fa fa-angle-left"></i>
      </button>
      <span>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </span>
      <button onClick={() => handleMonthChange("next")}>
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );

  const renderCalendarBody = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = getDaysInMonth(month, year);

    // Calculate offset for first day of the week
    const offset = firstDayOfMonth.getDay();

    const calendarRows = [];
    let weekDays = [];
    for (let i = 1; i <= daysInMonth + offset; i++) {
      const date = new Date(year, month, i - offset);
      const dayNumber = date.getDate();
      const isCurrentDay = isToday(date);

      weekDays.push(
        <td key={i} className={isCurrentDay ? "current-day" : ""}>
          {dayNumber}
        </td>
      );

      if (i === daysInMonth + offset || (i - offset) % 7 === 0) {
        calendarRows.push(<tr key={weekDays.length}>{weekDays}</tr>);
        weekDays = [];
      }
    }

    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    );
  };

  return (
    <div className="calendar-container">
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </div>
  );

};
export default ViewAppointments;


/*
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // Calculate the starting day of the current month
  const firstDayOfMonth = new Date(new Date().setMonth(currentMonth)).getDay();

  // Generate the days array for the current month
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }
  for (let i = 1; i <= daysInMonth[currentMonth]; i++) {
    days.push(i);
  }

  // Render the calendar grid
  const renderCalendarGrid = () => {
    return (
      <table className='table'>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Calendar</h1>
      {renderCalendarGrid()}
    </div>
  );
}

export default Calendar;*/
