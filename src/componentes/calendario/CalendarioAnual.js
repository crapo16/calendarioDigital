import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import * as React from 'react'

export default function CalendarioAnual() {
  // const months = ['2023-01-01','2023-02-01','2023-03-01','2023-04-01','2023-05-01','2023-06-01','2022-07-01','2022-08-01','2022-09-01','2022-10-01','2022-11-01','2022-12-01']
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
                  // initialDate={2020-`${months[i]}`-1}
                  //initialDate={`${months[i]}`}
                  initialDate={"2022" + `${months1[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  weekNumbers={false}
                  firstDay={1}
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
                  // initialDate={2020-`${months[i]}`-1}
                  //initialDate={`${months[i]}`}
                  initialDate={"2022" + `${months2[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  weekNumbers={false}
                  firstDay={1}
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
                  weekends={false}
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
                  // initialDate={2020-`${months[i]}`-1}
                  //initialDate={`${months[i]}`}
                  initialDate={"2022" + `${months3[i]}` + "01"}
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  height="auto"
                  weekNumbers={false}
                  firstDay={1}
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
                  weekends={false}
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