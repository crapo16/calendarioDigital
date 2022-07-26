import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'
import timeGridPlugin from '@fullcalendar/timegrid'
import { EventosContext } from '../../context/EventosContext'
//import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import * as React from 'react'
import { useContext } from 'react'

export default function Calendario(){
  const {eventos}= useContext(EventosContext);

    return (
      <>
      <div class="date-container">
        <div className='row'>
          <h3>Buscar por:</h3>
        </div>
        <p>
          <label>
            <input type="checkbox" class="filled-in" checked="checked" id="checkbox_cobranzas" />
            <span>COBRANZAS</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" class="filled-in" checked="checked" id="checkbox_cupos" />
            <span>CUPOS OTORGADOS</span>
          </label>        
        </p>
        <p>
        <label>
          <input type="checkbox" class="filled-in" checked="checked" id="checkbox_vencimientos" />
          <span>VENCIMIENTOS</span>
        </label>         
        </p>
        <p>
        <label>
          <input type="checkbox" class="filled-in" checked="checked" id="checkbox_futuros" />
          <span>FECHAS DE FUTUROS</span>
        </label>      
        </p>
        <p>
        <label>
          <input type="checkbox" class="filled-in" checked="checked" id="checkbox_todos" />
          <span>TODOS</span>
        </label>
        </p>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locale = {esLocale}
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
          right: "timeGridDay timeGridWeek dayGridMonth vistaAnual",
        }}
        weekends={true}
        eventClick={ info=>{
          alert(info.event.title);
        }}
        events={
          
          [
          { title: "event 1", date: "2022-07-26"},
          { title: "event 2", date: "2022-07-26" },
        ]}
        
      />
      </>
    );
}