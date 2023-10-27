import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import * as React from "react";
import { useEffect, useState } from "react";
import SelectorEventos from "./SelectorEventos";
import { Link } from "react-router-dom";
import CobranzasModal from "../cobranzas/modal/CobranzasModal";
import CuposModal from "../cupos/modal/CuposModal";
import FuturoModal from "../futuros/modal/FuturoModal";
import VencimientoModal from "../vencimientos/modal/VencimientosModal";
import configData from '../../config.json';
import './Calendario.css';

function CalendarioAnual() {
  const [seCargoEventos, setSeCargoEventos] = useState(false);
  const [eventosCalendario, setEventosCalendario] = useState([]);
  const [eventosTodos, setEventosTodos] = useState([]);
  const [error, setError] = useState(null);
  const [contenido, setContenido] = useState({});
  //Para controlar los modales
  const [isOpenCobranza, setIsOpenCobranza] = useState(false);
  const [isOpenCupo, setIsOpenCupo] = useState(false);
  const [isOpenVencimiento, setIsOpenVencimiento] = useState(false);
  const [isOpenFuturo, setIsOpenFuturo] = useState(false);
  //Para controlar los checkboxes
  const [isCheckedCobranza, setIsCheckedCobranza] = useState(false);
  const [isCheckedCupo, setIsCheckedCupo] = useState(false);
  const [isCheckedVencimiento, setIsCheckedVencimiento] = useState(false);
  const [isCheckedFuturo, setIsCheckedFuturo] = useState(false);
  const [isCheckedTodos, setIsCheckedTodos] = useState(true);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [months1, setMonths1] = useState([
    new Date(currentYear + "-01-01T12:00:00"),
    new Date(currentYear + "-02-01T12:00:00"),
    new Date(currentYear + "-03-01T12:00:00"),
  ]);
  const [months2, setMonths2] = useState([
    new Date(currentYear + "-04-01T12:00:00"),
    new Date(currentYear + "-05-01T12:00:00"),
    new Date(currentYear + "-06-01T12:00:00"),
  ]);
  const [months3, setMonths3] = useState([
    new Date(currentYear + "-07-01T12:00:00"),
    new Date(currentYear + "-08-01T12:00:00"),
    new Date(currentYear + "-09-01T12:00:00"),
  ]);
  const [months4, setMonths4] = useState([
    new Date(currentYear + "-10-01T12:00:00"),
    new Date(currentYear + "-11-01T12:00:00"),
    new Date(currentYear + "-12-01T12:00:00"),
  ]);

  const [headerToolbar, setHeaderToolbar] = useState({
    start: "title", // will normally be on the left. if RTL, will be on the right
    center: "",
    end: "", // will normally be on the right. if RTL, will be on the left
  });

  // const { eventos } = useContext(EventosContext);

  function toggleModalCobranza() {
    setIsOpenCobranza(!isOpenCobranza);
    setIsOpenCupo(false);
    setIsOpenFuturo(false);
    setIsOpenVencimiento(false);
  }

  function toggleModalCupo() {
    setIsOpenCupo(!isOpenCupo);
    setIsOpenCobranza(false);
    setIsOpenFuturo(false);
    setIsOpenVencimiento(false);
  }

  function toggleModalVencimiento() {
    setIsOpenVencimiento(!isOpenVencimiento);
    setIsOpenCupo(false);
    setIsOpenFuturo(false);
    setIsOpenCobranza(false);
  }

  function toggleModalFuturo() {
    setIsOpenFuturo(!isOpenFuturo);
    setIsOpenCupo(false);
    setIsOpenVencimiento(false);
    setIsOpenCobranza(false);
  }

  function handleCheckCupos() {
    setIsCheckedCupo(!isCheckedCupo);
    setIsCheckedTodos(false);
  }

  function handleCheckCobranzas() {
    setIsCheckedCobranza(!isCheckedCobranza);
    setIsCheckedTodos(false);
  }
  function handleCheckVencimientos() {
    setIsCheckedVencimiento(!isCheckedVencimiento);
    setIsCheckedTodos(false);
  }
  function handleCheckFuturos() {
    setIsCheckedFuturo(!isCheckedFuturo);
    setIsCheckedTodos(false);
  }

  function handleCheckTodos() {
    setIsCheckedCobranza(false);
    setIsCheckedVencimiento(false);
    setIsCheckedFuturo(false);
    setIsCheckedCupo(false);
    setIsCheckedTodos(!isCheckedTodos);
  }

  function mostrarModal(contenido) {
    setContenido(contenido);
    switch (contenido.tipoEvento) {
      case "Cobranza":
        toggleModalCobranza();
        break;
      case "Cupo":
        toggleModalCupo();
        break;
      case "Vencimiento":
        toggleModalVencimiento();
        break;
      case "Futuro":
        toggleModalFuturo();
        break;
      default:
    }
  }


  function changeYear(add) {
    let year = add ? currentYear + 1 : currentYear - 1;
    setCurrentYear(year);

    setMonths1([
      new Date(year + "-01-01T12:00:00"),
      new Date(year + "-02-01T12:00:00"),
      new Date(year + "-03-01T12:00:00"),
    ]);
    setMonths2([
      new Date(year + "-04-01T12:00:00"),
      new Date(year + "-05-01T12:00:00"),
      new Date(year + "-06-01T12:00:00"),
    ]);
    setMonths3([
      new Date(year + "-07-01T12:00:00"),
      new Date(year + "-08-01T12:00:00"),
      new Date(year + "-09-01T12:00:00"),
    ]);
    setMonths4([
      new Date(year + "-10-01T12:00:00"),
      new Date(year + "-11-01T12:00:00"),
      new Date(year + "-12-01T12:00:00"),
    ]);
  }

  useEffect(() => {
    //cargo los eventos que se muestran en el calendario\
    const options = {
      headers: new Headers({ 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }),
      method: "GET"
    };
    const datosUsuario = JSON.parse(localStorage.getItem('userData'));
    const obtenerEventos = async () => {
      await fetch(`${configData.SERVER_URL}Evento?hash=${datosUsuario[1]}&user=${datosUsuario[0]}&fechaHasta=${datosUsuario[2]}`, options)
        .then(res => res.json())
        .then(
          (result) => {
            setEventosCalendario(result['eventosFullCalendar']);
            setEventosTodos(result['eventosFullCalendar']);
            setSeCargoEventos(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setSeCargoEventos(true);
            setError(error);
          }
        )
    }

    if (!seCargoEventos) {
      obtenerEventos();
    }

    if (seCargoEventos) {
      let arrayEventos = new Array;

      if (isCheckedCobranza) {
        let arrayCobranza = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Cobranza");
        arrayEventos = arrayEventos.concat(arrayCobranza);
      }

      if (isCheckedCupo) {
        let arrayCupo = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Cupo");
        arrayEventos = arrayEventos.concat(arrayCupo);
      }

      if (isCheckedFuturo) {
        let arrayFuturo = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Futuro");
        arrayEventos = arrayEventos.concat(arrayFuturo);
      }

      if (isCheckedVencimiento) {
        let arrayVencimiento = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Vencimiento");
        arrayEventos = arrayEventos.concat(arrayVencimiento);
      }

      if (isCheckedTodos) {
        obtenerEventos();
        arrayEventos = eventosTodos;
      }
      setEventosCalendario(arrayEventos);
    }


  }, [
    isCheckedCobranza,
    isCheckedCupo,
    isCheckedFuturo,
    isCheckedVencimiento,
    isCheckedTodos,
  ]);

  return (
    <div>
      {seCargoEventos ?
        <>
          <CobranzasModal
            isOpen={isOpenCobranza}
            item={contenido}
            toggleModal={toggleModalCobranza}
          />
          <CuposModal
            isOpen={isOpenCupo}
            item={contenido}
            toggleModal={toggleModalCupo}
          />
          <FuturoModal
            isOpen={isOpenFuturo}
            item={contenido}
            toggleModal={toggleModalFuturo}
          />
          <VencimientoModal
            isOpen={isOpenVencimiento}
            item={contenido}
            toggleModal={toggleModalVencimiento}
          />

          <SelectorEventos
            isCheckedCobranza={isCheckedCobranza}
            isCheckedCupo={isCheckedCupo}
            isCheckedFuturo={isCheckedFuturo}
            isCheckedVencimiento={isCheckedVencimiento}
            isCheckedTodos={isCheckedTodos}
            handleCheckCobranzas={handleCheckCobranzas}
            handleCheckCupos={handleCheckCupos}
            handleCheckFuturos={handleCheckFuturos}
            handleCheckVencimientos={handleCheckVencimientos}
            handleCheckTodos={handleCheckTodos}
          />
          <div>
            <div className="margin-bottom-1 fc fc-media-screen fc-direction-ltr fc-theme-standard">
              <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
                <div className="fc-toolbar-chunk">
                  <div className="fc-button-group">
                    <button
                      onClick={() => changeYear(false)}
                      type="button"
                      title="Año antes"
                      aria-pressed="false"
                      className="fc-prev-button fc-button fc-button-primary"
                    >
                      <span className="fc-icon fc-icon-chevron-left"></span>
                    </button>
                    <button
                      onClick={() => changeYear(true)}
                      type="button"
                      title="Año siguiente"
                      aria-pressed="false"
                      className="fc-next-button fc-button fc-button-primary"
                    >
                      <span className="fc-icon fc-icon-chevron-right"></span>
                    </button>
                  </div>
                  {/* <button type="button" title="Este mes" disabled="" aria-pressed="false" className="fc-today-button fc-button fc-button-primary">Hoy</button> */}
                </div>
                <div className="fc-toolbar-chunk">
                  <h2 className="fc-toolbar-title" id="fc-dom-2">
                    {currentYear}
                  </h2>
                </div>
                <div className="fc-toolbar-chunk">
                  <Link to="/calendario" state={{ vista: "dia" }}>
                    <button
                      type="button"
                      title="Vista del día"
                      aria-pressed="false"
                      className="fc-timeGridDay-button fc-button fc-button-primary"
                    >
                      Día
                    </button>
                  </Link>
                  <Link to="/calendario" state={{ vista: "semana" }}>
                    <button
                      type="button"
                      title="Vista de la semana"
                      aria-pressed="false"
                      className="fc-timeGridWeek-button fc-button fc-button-primary"
                    >
                      Semana
                    </button>
                  </Link>
                  <Link to="/calendario" state={{ vista: "mes" }}>
                    <button
                      type="button"
                      title="Vista del mes"
                      aria-pressed="false"
                      className="fc-dayGridMonth-button fc-button fc-button-primary "
                    >
                      Mes
                    </button>
                  </Link>
                  <button
                    type="button"
                    title="Año"
                    aria-pressed="true"
                    className="fc-vistaAnual-button fc-button fc-button-primary fc-button-active"
                  >
                    Año
                  </button>
                </div>
              </div>
            </div>

            <table className="table_year">
              <tbody>
                <tr>
                  {months1.map((item, i) => (
                    <td key={"td1" + item}>
                      <div key={"div1" + item}>
                        <FullCalendar
                          key={"month" + item}
                          initialView="dayGridMonth"
                          initialDate={item}
                          plugins={[dayGridPlugin, timeGridPlugin]}
                          height="auto"
                          weekNumbers={false}
                          locale="es"
                          firstDay={1}
                          eventOrder={(a,b) => {
                            var contratoA = a.cto || a.contrato
                            var contratoB = b.cto || b.contrato
              
                            if(contratoA < contratoB){
                              return -1
                            }
                            else{
                              return 1
                            }
                          } 
                          }
                          headerToolbar={headerToolbar}
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
                          eventClick={(info) => {
                            mostrarModal(info.event.extendedProps);
                          }}
                          weekends={true}
                          events={eventosCalendario}
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  {months2.map((item, i) => (
                    <td key={"td2" + item}>
                      <div key={"div2" + item}>
                        <FullCalendar
                          key={"month" + item}
                          initialView="dayGridMonth"
                          initialDate={item}
                          plugins={[dayGridPlugin, timeGridPlugin]}
                          height="auto"
                          locale="es"
                          weekNumbers={false}
                          firstDay={1}
                          eventOrder={(a,b) => {
                            var contratoA = a.cto || a.contrato
                            var contratoB = b.cto || b.contrato
              
                            if(contratoA < contratoB){
                              return -1
                            }
                            else{
                              return 1
                            }
                          } 
                          }
                          headerToolbar={headerToolbar}
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
                          eventClick={(info) => {
                            mostrarModal(info.event.extendedProps);
                          }}
                          weekends={true}
                          events={eventosCalendario}
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  {months3.map((item, i) => (
                    <td key={"td3" + item}>
                      <div key={"div3" + item}>
                        <FullCalendar
                          key={"month" + item}
                          initialView="dayGridMonth"
                          initialDate={item}
                          plugins={[dayGridPlugin, timeGridPlugin]}
                          height="auto"
                          locale="es"
                          eventOrder={(a,b) => {
                            var contratoA = a.cto || a.contrato
                            var contratoB = b.cto || b.contrato
              
                            if(contratoA < contratoB){
                              return -1
                            }
                            else{
                              return 1
                            }
                          } 
                          }
                          datesSet={(arg) => {
                            console.log(arg.start) //starting visible date
                            console.log(arg.end) //ending visible date
                          }}
                          weekNumbers={false}
                          firstDay={1}
                          headerToolbar={headerToolbar}
                          views={{
                            dayGridMonth: {
                              titleFormat: {
                                month: "long",
                              },
                              nowIndicatorClassNames: "fecha-actual"
                            },
                            dayGridYear: {
                              titleFormat: {
                                year: "long",
                              },
                            },
                          }}
                          showNonCurrentDates={false}
                          fixedWeekCount={false}
                          eventClick={(info) => {
                            mostrarModal(info.event.extendedProps);
                          }}
                          weekends={true}
                          events={eventosCalendario}
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  {months4.map((item, i) => (
                    <td key={"td2" + item}>
                      <div key={"div2" + item}>
                        <FullCalendar
                          key={"month" + item}
                          initialView="dayGridMonth"
                          initialDate={item}
                          plugins={[dayGridPlugin, timeGridPlugin]}
                          height="auto"
                          locale="es"
                          weekNumbers={false}
                          firstDay={1}
                          headerToolbar={headerToolbar}
                          eventOrder={(a,b) => {
                            var contratoA = a.cto || a.contrato
                            var contratoB = b.cto || b.contrato
              
                            if(contratoA < contratoB){
                              return -1
                            }
                            else{
                              return 1
                            }
                          } 
                          }
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
                          eventClick={(info) => {
                            mostrarModal(info.event.extendedProps);
                          }}
                          weekends={true}
                          events={eventosCalendario}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </>
        : <>
          <div className="pos-center">
            <div className="loader">
            </div>
          </div>
        </>}
    </div>
  );
}

export default CalendarioAnual;
