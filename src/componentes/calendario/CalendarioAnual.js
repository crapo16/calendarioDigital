import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'

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
        console.log(label)
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
    <div>
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
  );
     
  }

  
}

