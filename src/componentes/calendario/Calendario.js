import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventosContext } from "../../context/EventosContext";
//import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import * as React from "react";
import { useContext ,Link} from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

import { useEffect } from "react";
import CobranzasModal from "../cobranzas/modal/CobranzasModal";
import CuposModal from "../cupos/modal/CuposModal";
import FuturoModal from "../futuros/modal/FuturoModal";
import VencimientoModal from "../vencimientos/modal/VencimientosModal";
import SelectorEventos from "./SelectorEventos";

export default function Calendario() {
  //const {eventos}= useContext(EventosContext);
  const {eventos}=useContext(EventosContext);
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

  const location = useLocation()
  
  const { vista=""} = location?.state || ""
  
  let initialView = "dayGridMonth" 
  switch(vista){
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
      eventos = eventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Cupo"
      );
    if (!isCheckedVencimiento && !isCheckedTodos)
      eventos = eventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Vencimiento"
      );
    if (!isCheckedFuturo && !isCheckedTodos)
      eventos = eventos.filter(
        (e) => e.extendedProps.tipoEvento !== "Futuro"
      );
    console.log(eventos);    
    setEventosCalendario(eventos);


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
        initialView={ initialView }
        dayMaxEventRows= {true} // for all non-TimeGrid views
        views= {{
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
              var getUrl = window.location;
              var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
              document.location.href = baseUrl+="CalendarioAnual";
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