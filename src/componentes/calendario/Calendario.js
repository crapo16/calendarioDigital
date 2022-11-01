import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventosContext } from "../../context/EventosContext";
//import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import * as React from "react";
import { useContext, Link } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import CobranzasModal from "../cobranzas/modal/CobranzasModal";
import CuposModal from "../cupos/modal/CuposModal";
import FuturoModal from "../futuros/modal/FuturoModal";
import VencimientoModal from "../vencimientos/modal/VencimientosModal";
import SelectorEventos from "./SelectorEventos";
import {useNavigate} from 'react-router-dom';

export default function Calendario() {
  //const {eventos}= useContext(EventosContext);
  const { eventos } = useContext(EventosContext);
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
  const navigate = useNavigate();
  const location = useLocation()

  const { vista = "" } = location?.state || ""

  let initialView = "dayGridMonth"
  switch (vista) {
    case "dia":
      initialView = "timeGridDay"
      break;
    case "semana":
      initialView = "dayGridWeek"
      break;

    default:
  }

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

  // function addRedClass(list) {
  //   for (let element of list) {
  //     for (let child of element.children) {
  //       let label = child.firstChild?.firstChild;
  //       label.className = "color-red";
  //     }
  //   }
  // }

  useEffect(() => {
    //cargo los eventos que se muestran en el calendario
    let arrayEventos = eventos['eventosFullCalendar'];

    if (!isCheckedCobranza && !isCheckedTodos)
      arrayEventos = arrayEventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Cobranza"
      );
    if (!isCheckedCupo && !isCheckedTodos)
    arrayEventos = arrayEventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Cupo"
      );
    if (!isCheckedVencimiento && !isCheckedTodos)
    arrayEventos = arrayEventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Vencimiento"
      );
    if (!isCheckedFuturo && !isCheckedTodos)
    arrayEventos = arrayEventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Futuro"
      );

    setEventosCalendario(arrayEventos);

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
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={initialView}
        dayMaxEventRows={true} // for all non-TimeGrid views
        views={{
          timeGrid: {
            dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
          }
        }}
        eventMaxStack={1}
        locale={esLocale}
        customButtons={{
          vistaDiaria: {
            text: "Día",
            click: function () {
              alert("Agregar resourceTimeline (resourceTimelinePlugin)");
            },
          },
          vistaAnual: {
            text: "Año",
            click: function () {
              navigate('/calendarioanual', {replace: true})
              // var getUrl = window.location;
              // var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
              // document.location.href = baseUrl += "CalendarioAnual";
            },
          },
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridDay timeGridWeek dayGridMonth vistaAnual",
        }}
        weekends={true}
        eventClick={(info) => {
          mostrarModal(info.event.extendedProps);
        }}
        events={eventosCalendario}
      />
    </>
  );
}