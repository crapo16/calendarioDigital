import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
//import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import * as React from 'react'

export default function Calendario(){

    return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        customButtons={{
            vistaDiaria: {
                text: 'Día',
                click: function() {
                    alert('Agregar resourceTimeline (resourceTimelinePlugin)');
                },
            },
            vistaAnual: {
                text: 'Año',
                click: function() {
                    alert('Agregar redirección a CalendarioAnual.js');
                },
            },
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "resourceTimeline timeGridWeek dayGridMonth vistaAnual",
        }}
        weekends={false}
        events={[
          { title: "event 1", date: "2022-06-13" },
          { title: "event 2", date: "2022-06-14" },
        ]}
      />
    );
}