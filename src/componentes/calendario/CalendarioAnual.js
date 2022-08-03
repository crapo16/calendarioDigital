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

function CalendarioAnual() {
  const [eventosCalendario, setEventosCalendario] = useState([]);
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

  function toggleModalCobranza() {
    setIsOpenCobranza(!isOpenCobranza);
  }

  function toggleModalCupo() {
    setIsOpenCupo(!isOpenCupo);
  }

  function toggleModalVencimiento() {
    setIsOpenVencimiento(!isOpenVencimiento);
  }

  function toggleModalFuturo() {
    setIsOpenFuturo(!isOpenFuturo);
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

  function addRedClass(list) {
    for (let element of list) {
      for (let child of element.children) {
        let label = child.firstChild?.firstChild;
        label.className = "color-red";
      }
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
    //cargo los eventos que se muestran en el calendario
    let eventos = [
      {
        title: "Venta 3.455.612,2",
        className: "eventoCobranza",
        date: "2022-08-02",
        extendedProps: {
          tipoEvento: "Cobranza",
          id: 1,
          vto: "14/07/2021",
          cv: "Venta",
          impComprobante: "3.455.612,2",
          iva: "345.612",
          saldoConf: "0,00",
          pendiente: "3.123.456",
          moneda: "S",
          datosCpte: "LP A 2 331004671478",
          cpteOrigen: "LP A 2 331004671478",
          cto: "21/16862/7",
          contraparte: "ADM Agro SRL",
          tipoCobranza: "Valor Zeni",
          observaciones: "--",
          tipo: "LP",
          coe: "331004671478",
        },
      },
      {
        title: "Venta 3.455.612,3",
        className: "eventoCobranza",
        date: "2022-08-02",
        extendedProps: {
          tipoEvento: "Cobranza",
          id: 2,
          vto: "15/07/2021",
          cv: "Venta",
          impComprobante: "3.455.612,3",
          iva: "345.612",
          saldoConf: "0,00",
          pendiente: "3.123.456",
          moneda: "S",
          datosCpte: "LP A 2 331004671478",
          cpteOrigen: "LP A 2 331004671478",
          cto: "21/16862/7",
          contraparte: "ADM Agro SRL",
          tipoCobranza: "Valor Zeni",
          observaciones: "--",
          tipo: "LP",
          coe: "331004671478",
        },
      },
      {
        title: "Soja - ADM Agro SRL - Adeco Agropecuaria S.A",
        className: "eventoCupo",
        date: "2022-07-29",
        extendedProps: {
          tipoEvento: "Cupo",
          id: 1,
          fecha: "29/06/2021",
          comprador: "ADM Agro SRL",
          vendedor: "Adeco Agropecuaria S.A",
          destinatario: "ADM Agro SRL",
          destino: "ADM Agro SRL",
          localidadDestino: "Ingeniero White",
          contrato: "21/15334/5",
          otorgados: "1",
          producto: "Soja",
          nroCupo: "PS1274087",
        },
      },
      {
        title: "Soja - ADM Agro SRL - Adeco Agropecuaria S.A",
        className: "eventoCupo",
        date: "2022-08-03",
        extendedProps: {
          tipoEvento: "Cupo",
          id: 2,
          fecha: "20/06/2022",
          comprador: "ADM Agro SRL",
          vendedor: "Adeco Agropecuaria S.A",
          destinatario: "ADM Agro SRL",
          destino: "ADM Agro SRL",
          localidadDestino: "Ingeniero White",
          contrato: "21/15334/5",
          otorgados: "1",
          producto: "Soja",
          nroCupo: "PS1274087",
        },
      },
      {
        title: "Vencimiento 1 - 14/08/2022",
        className: "eventoVencimiento",
        date: "2022-08-03",
        extendedProps: {
          tipoEvento: "Vencimiento",
          id: 1,
          nombre: "Vencimiento 1",
          fechaFin: "14/08/2022",
        },
      },
      {
        title: "Vencimiento 2 - 15/08/2022",
        className: "eventoVencimiento",
        date: "2022-07-29",
        extendedProps: {
          tipoEvento: "Vencimiento",
          id: 2,
          nombre: "Vencimiento 2",
          fechaFin: "15/08/2022",
        },
      },
      {
        title: "Futuro TRIGO Vol.100,000",
        className: "eventoFuturo",
        date: "2022-08-01",
        extendedProps: {
          tipoEvento: "Futuro",
          id: 1,
          tipo: "Futuros",
          operacion: "Futuro",
          condicion: "V",
          producto: "TRIGO",
          posicion: "01/2012",
          volumen: "100,000",
          precioEj: "0,00",
          precioPrima: "$ 185,0000",
          destino: "Buenos Aires",
          registro: "951990",
          fecAlta: "02/12/2010",
          regCancela: "--",
          fecInicial: "--",
          precioInic: "$ 0,0000",
          enContratos: "0.00",
          estado: "Cancelada",
        },
      },
      {
        title: "Futuro ACEITE Vol.200,000",
        className: "eventoFuturo",
        date: "2022-07-29",
        extendedProps: {
          tipoEvento: "Futuro",
          id: 2,
          tipo: "Futuros",
          operacion: "Futuro",
          condicion: "V",
          producto: "ACEITE",
          posicion: "02/2012",
          volumen: "200,000",
          precioEj: "0,00",
          precioPrima: "$ 185,0000",
          destino: "Buenos Aires",
          registro: "951990",
          fecAlta: "02/12/2010",
          regCancela: "--",
          fecInicial: "--",
          precioInic: "$ 0,0000",
          enContratos: "0.00",
          estado: "Cancelada",
        },
      },
    ];

    if (!isCheckedCobranza && !isCheckedTodos)
      eventos = eventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Cobranza"
      );
    if (!isCheckedCupo && !isCheckedTodos)
      eventos = eventos.filter((e) => e.extendedProps.tipoEvento !== "Cupo");
    if (!isCheckedVencimiento && !isCheckedTodos)
      eventos = eventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Vencimiento"
      );
    if (!isCheckedFuturo && !isCheckedTodos)
      eventos = eventos.filter((e) => e.extendedProps.tipoEvento !== "Futuro");
    setEventosCalendario(eventos);

    let listSundays = document.getElementsByClassName("fc-day-sun");
    let listSaturdays = document.getElementsByClassName("fc-day-sat");
    addRedClass(listSundays);
    addRedClass(listSaturdays);
  }, [
    isCheckedCobranza,
    isCheckedCupo,
    isCheckedFuturo,
    isCheckedVencimiento,
    isCheckedTodos,
  ]);

  return (
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

        <table class="table_year">
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
                      firstDay={5}
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
                      firstDay={5}
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
                      weekNumbers={false}
                      firstDay={2}
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
                      firstDay={5}
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CalendarioAnual;
