import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'

export default function CalendarioAnual() {
  
  const months1 = ["01", "02", "03", "04"];
  const months2 = ["05", "06", "07", "08"];
  const months3 = ["09", "10", "11", "12"];
  return (
    <div>
      <table>
        <tr>
          {months1.map((item, i) => (
            <td>
              <div>
                <FullCalendar
                  key={"month" + item}
                  initialView="dayGridMonth"
                  initialDate={new Date().getFullYear() + `${months1[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  weekNumbers={false}
                  locale="es"
                  firstDay={5}
                  headerToolbar={{}}
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
          {months2.map((item, i) => (
            <td>
              <div>
                <FullCalendar
                  key={"month" + item}
                  initialView="dayGridMonth"
                  initialDate={"2022" + `${months2[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  weekNumbers={false}
                  firstDay={5}
                  locale="es"
                  headerToolbar={{}}
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
          {months3.map((item, i) => (
            <td>
              <div>
                <FullCalendar
                  key={"month" + item}
                  initialView="dayGridMonth"
                  initialDate={"2022" + `${months3[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  locale="es"
                  weekNumbers={false}
                  firstDay={2}
                  headerToolbar={{}}
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
      </table>
    </div>
  );
}