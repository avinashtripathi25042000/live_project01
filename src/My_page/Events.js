import React from "react";
import BigCalendar, { Calendar } from "react-big-calendar";
import momentLocalizer from "react-big-calendar/lib/localizers/moment";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


export class Events extends React.Component {
  render() {
    const events = [
      {
        title: "Event 1",
        start: new Date(2023, 10, 15, 10, 0),
        end: new Date(2023, 10, 15, 12, 0),
      },
      {
        title: "Event 2",
        start: new Date(2023, 10, 16, 14, 0),
        end: new Date(2023, 10, 16, 16, 0),
      },
      // Add more events as needed
    ];

    return (
      <div>
        <h1>The Web Event</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}