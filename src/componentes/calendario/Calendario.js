import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'

export default function Calendario(){

    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        weekends={false}
        events={[
          { title: "event 1", date: "2022-06-13" },
          { title: "event 2", date: "2022-06-14" },
        ]}
      />
    );
}