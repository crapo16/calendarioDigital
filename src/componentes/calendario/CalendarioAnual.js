import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'
import SelectorEventos from './SelectorEventos'
import { Link } from 'react-router-dom';

export default class CalendarioAnual extends React.Component {
  
  constructor(props){
    super()
    this.state = { headerToolbar : {
      start: 'title', // will normally be on the left. if RTL, will be on the right
      center: '',
      end: '' // will normally be on the right. if RTL, will be on the left
    },
    months1 : ["01", "02", "03", "04"],months2: ["05", "06", "07", "08"], months3: ["09", "10", "11", "12"],year:new Date().getFullYear()};
    
  
  }

  addRedClass(list){
    for (let element of list) {
      for (let child of element.children) {
        let label = child.firstChild?.firstChild
        label.className = "color-red";
      }
   
   
    } 
  }
  componentDidMount() {
    //let dayNumberElements = this.elem.nativeElement.querySelectorAll('.fc-daygrid-day-number');
   
    // 👇️ use document.getElementById()
    let listSundays = document.getElementsByClassName('fc-day-sun');
    let listSaturdays = document.getElementsByClassName('fc-day-sat')
    this.addRedClass(listSundays)
    this.addRedClass(listSaturdays)
 
  }

  
  render() {
  return (
    <>
      <SelectorEventos/>
      <div>

        <div className="margin-bottom-1 fc fc-media-screen fc-direction-ltr fc-theme-standard">
          <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
            <div className="fc-toolbar-chunk"><div className="fc-button-group">
            
              <button type="button" title="Mes antes" aria-pressed="false" className="fc-prev-button fc-button fc-button-primary"><span className="fc-icon fc-icon-chevron-left"></span></button>
              <button type="button" title="Mes siguiente" aria-pressed="false" className="fc-next-button fc-button fc-button-primary"><span className="fc-icon fc-icon-chevron-right"></span></button>
            </div>
            {/* <button type="button" title="Este mes" disabled="" aria-pressed="false" className="fc-today-button fc-button fc-button-primary">Hoy</button> */}
            </div>
            <div className="fc-toolbar-chunk">
              <h2 className="fc-toolbar-title" id="fc-dom-2">{ new Date().getFullYear()}</h2>
            </div>
            <div className="fc-toolbar-chunk">
            <Link 
                to="/calendario" state={{ vista: "dia" }}>
                <button type="button" title="Vista del día" aria-pressed="false" className="fc-timeGridDay-button fc-button fc-button-primary">Día</button>

              </Link>
              <Link 
                to="/calendario" state={{ vista: "semana" }}>
              <button type="button" title="Vista de la semana" aria-pressed="false" className="fc-timeGridWeek-button fc-button fc-button-primary">Semana</button>

              </Link>
              <Link 
                to="/calendario" state={{ vista: "mes" }}>
              <button type="button" title="Vista del mes" aria-pressed="false" className="fc-dayGridMonth-button fc-button fc-button-primary ">Mes</button>

              </Link>
              <button  type="button" title="Año" aria-pressed="true" className="fc-vistaAnual-button fc-button fc-button-primary fc-button-active">Año</button>
            </div>
          </div>
        </div>
      
        <table>
          
          <tbody>
          <tr>
            {this.state.months1.map((item, i) => (
              <td key={"td1" + item}>
                <div key={"div1" + item}>
                  <FullCalendar

                    key={"month" + item}
                    initialView="dayGridMonth"
                    initialDate={ this.state.year + `${this.state.months1[i]}` + "01"}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    height="auto"
                    weekNumbers={false}
                    locale="es"
                    firstDay={5}
                    headerToolbar={this.state.headerToolbar}
                    views={{
                      dayGridMonth: {
                        titleFormat: {
                          month: "long",
                        },
                      },
                      dayGridYear: {
                        titleFormat: {
                          year: "long",
                        },
                      },
                    }}
                    showNonCurrentDates={false}
                    fixedWeekCount={false}
                    weekends={true}
                    events={[
                      { title: "event 1", date: "2022-06-13" },
                      { title: "event 2", date: "2022-06-14" },
                    ]}
                  />
                </div>
              </td>
            ))}
          </tr>

          <tr>
            {this.state.months2.map((item, i) => (
              <td key={"td2" + item}>
                <div key={"div2" + item}>
                  <FullCalendar
                    key={"month" + item}
                    initialView="dayGridMonth"
                    initialDate={ this.state.year + `${this.state.months2[i]}` + "01"}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    height="auto"
                    locale="es"
                    weekNumbers={false}
                    firstDay={5}
                    headerToolbar={this.state.headerToolbar}
                    views={{
                      dayGridMonth: {
                        titleFormat: {
                          month: "long",
                        },
                      },
                      dayGridYear: {
                        titleFormat: {
                          year: "long",
                        },
                      },
                    }}
                    showNonCurrentDates={false}
                    fixedWeekCount={false}
                    weekends={true}
                    events={[
                      { title: "event 1", date: "2022-06-13" },
                      { title: "event 2", date: "2022-06-14" },
                    ]}
                  />
                </div>
              </td>
            ))}
          </tr>

          <tr >
            {this.state.months3.map((item, i) => (
              <td key={"td3" + item}>
                <div key={"div3" + item}>
                  <FullCalendar
                    key={"month" + item}
                    initialView="dayGridMonth"
                    initialDate={ this.state.year + `${this.state.months3[i]}` + "01"}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    height="auto"
                    locale="es"
                    weekNumbers={false}
                    firstDay={2}
                    headerToolbar={this.state.headerToolbar}
                    views={{
                      dayGridMonth: {
                        titleFormat: {
                          month: "long",
                        },
                      },
                      dayGridYear: {
                        titleFormat: {
                          year: "long",
                        },
                      },
                    }}
                    showNonCurrentDates={false}
                    fixedWeekCount={false}
                    weekends={true}
                    events={[
                      { title: "event 1", date: "2022-06-13" },
                      { title: "event 2", date: "2022-06-14" },
                    ]}
                  />
                </div>
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
     
  }

  
}

