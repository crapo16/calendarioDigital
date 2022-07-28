import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'
import SelectorEventos from './SelectorEventos'
import { Link } from 'react-router-dom';

export default class CalendarioAnual extends React.Component {
  
  constructor(props){
    super()
    let year = new Date().getFullYear()
    this.state = { headerToolbar : {
      start: 'title', // will normally be on the left. if RTL, will be on the right
      center: '',
      end: '' // will normally be on the right. if RTL, will be on the left
    },
    months1 : [new Date(year+"-01-01T12:00:00"),new Date(year+"-02-01T12:00:00"),new Date(year+"-03-01T12:00:00"),new Date(year+"-04-01T12:00:00")],
    months2: [new Date(year+"-05-01T12:00:00"),new Date(year+"-06-01T12:00:00"),new Date(year+"-07-01T12:00:00"),new Date(year+"-08-01T12:00:00")],
    months3: [new Date(year+"-09-01T12:00:00"),new Date(year+"-10-01T12:00:00"),new Date(year+"-11-01T12:00:00"),new Date(year+"-12-01T12:00:00")],
    year:new Date().getFullYear()
  
    }
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
  changeYear(add){
    let year = add ? this.state.year + 1 : this.state.year - 1 ;

    this.setState({
      months1 : [new Date(year+"-01-01T12:00:00"),new Date(year+"-02-01T12:00:00"),new Date(year+"-03-01T12:00:00"),new Date(year+"-04-01T12:00:00")],
      months2: [new Date(year+"-05-01T12:00:00"),new Date(year+"-06-01T12:00:00"),new Date(year+"-07-01T12:00:00"),new Date(year+"-08-01T12:00:00")],
      months3: [new Date(year+"-09-01T12:00:00"),new Date(year+"-10-01T12:00:00"),new Date(year+"-11-01T12:00:00"),new Date(year+"-12-01T12:00:00")],
      year: year
    })
    this.forceUpdate()
    
  }
  
  render() {
  return (
    <>
      <SelectorEventos/>
      <div>

        <div className="margin-bottom-1 fc fc-media-screen fc-direction-ltr fc-theme-standard">
          <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
            <div className="fc-toolbar-chunk"><div className="fc-button-group">
            
              <button onClick={ () => this.changeYear(false)} type="button" title="Año antes" aria-pressed="false" className="fc-prev-button fc-button fc-button-primary"><span className="fc-icon fc-icon-chevron-left"></span></button>
              <button onClick={ () => this.changeYear(true)}type="button" title="Año siguiente" aria-pressed="false" className="fc-next-button fc-button fc-button-primary"><span className="fc-icon fc-icon-chevron-right"></span></button>
            </div>
            {/* <button type="button" title="Este mes" disabled="" aria-pressed="false" className="fc-today-button fc-button fc-button-primary">Hoy</button> */}
            </div>
            <div className="fc-toolbar-chunk">
              <h2 className="fc-toolbar-title" id="fc-dom-2">{ this.state.year}</h2>
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
                    initialDate={ item }
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
                    initialDate={ item }
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
                    initialDate={ item }
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

