﻿import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import timeGridPlugin from "@fullcalendar/timegrid";
import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import CobranzasModal from "../cobranzas/modal/CobranzasModal";
import CuposModal from "../cupos/modal/CuposModal";
import FuturoModal from "../futuros/modal/FuturoModal";
// import VencimientoModal from "../vencimientos/modal/VencimientosModal";
import SelectorEventos from "./SelectorEventos";
import { Link, useNavigate } from 'react-router-dom';
import configData from '../../config.json';
import './Calendario.css';


export default function Calendario() {

    //const {eventos}= useContext(EventosContext);
    const [seCargoEventos, setSeCargoEventos] = useState(false);
    const [eventosCalendario, setEventosCalendario] = useState([]);
    const [error, setError] = useState(null);
    const [eventosTodos, setEventosTodos] = useState([]);
    const [contenido, setContenido] = useState({});
    //Para controlar los modales
    const [isOpenCobranza, setIsOpenCobranza] = useState(false);
    const [isOpenCupo, setIsOpenCupo] = useState(false);
    // const [isOpenVencimiento, setIsOpenVencimiento] = useState(false);
    const [isOpenFuturo, setIsOpenFuturo] = useState(false);
    //Para controlar los checkboxes
    const [isCheckedCobranza, setIsCheckedCobranza] = useState(false);
    const [isCheckedCupo, setIsCheckedCupo] = useState(false);
    // const [isCheckedVencimiento, setIsCheckedVencimiento] = useState(false);
    const [isCheckedFuturo, setIsCheckedFuturo] = useState(false);
    const [isCheckedTodos, setIsCheckedTodos] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const { selectedIDs } = location.state || {};

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
        setIsOpenCupo(false);
        setIsOpenFuturo(false);
        // setIsOpenVencimiento(false);
    }

    function toggleModalCupo() {
        setIsOpenCupo(!isOpenCupo);
        setIsOpenCobranza(false);
        setIsOpenFuturo(false);
        // setIsOpenVencimiento(false);
    }

    // function toggleModalVencimiento() {
    //   setIsOpenVencimiento(!isOpenVencimiento);
    //   setIsOpenCupo(false);
    //   setIsOpenFuturo(false);
    //   setIsOpenCobranza(false);
    // }

    function toggleModalFuturo() {
        setIsOpenFuturo(!isOpenFuturo);
        setIsOpenCupo(false);
        //setIsOpenVencimiento(false);
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

    // function handleCheckVencimientos() {
    //   setIsCheckedVencimiento(!isCheckedVencimiento);
    //   setIsCheckedTodos(false);
    // }
    function handleCheckFuturos() {
        setIsCheckedFuturo(!isCheckedFuturo);
        setIsCheckedTodos(false);
    }

    function handleCheckTodos() {
        setIsCheckedCobranza(false);
        //setIsCheckedVencimiento(false);
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
                //toggleModalVencimiento();
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

        const options = {
            headers: new Headers({ Accept: 'application/json' }),
            method: "GET"
        };
        const datosUsuario = JSON.parse(localStorage.getItem('userData'));

        const obtenerEventos = async () => {
            await fetch(`${configData.SERVER_URL}Evento?hash=${datosUsuario[1]}&user=${datosUsuario[0]}&fechaHasta=${datosUsuario[2]}`, options)
                .then(res => res.json())
                .then(
                    (result) => {
                        // Eliminar duplicados antes de asignar los eventos
                        const setEventos = new Set(result['eventosFullCalendar'].map(JSON.stringify));
                        const eventosSinDuplicados = Array.from(setEventos).map(JSON.parse);

                        // Filtrar los eventos basados en selectedIDs
                        const eventosFiltrados = eventosSinDuplicados.filter(evento => selectedIDs.includes(evento.extendedProps.cuentaId));

                        // Actualizar los títulos según el className
                        const eventosFiltradosActualizados = eventosFiltrados.map(item => {
                            if (item.className === "eventoCobranza") {
                                const nuevoTitle = `${item.extendedProps.cto} - Comprador: ${item.extendedProps.contraparte} - $${(item.extendedProps.impComprobante ? parseFloat(item.extendedProps.impComprobante.replace(',', '.')).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00')}`;
                                return {
                                    ...item,
                                    title: nuevoTitle
                                };
                            } else if (item.className === "eventoCupo") {
                                const nuevoTitle = `${item.extendedProps.contrato} - Comprador: ${item.extendedProps.comprador} - Cantidad: ${item.extendedProps.otorgados} - ${item.extendedProps.fecha}`;
                                return {
                                    ...item,
                                    title: nuevoTitle
                                };
                            }

                            return item;
                        });

                        // Agrupar los eventos por contrato y fecha
                        const eventosAgrupados = {};
                        const eventosNoAgrupados = [];

                        eventosFiltradosActualizados.forEach(evento => {
                            const contrato = evento.extendedProps.contrato;
                            const fecha = evento.extendedProps.fecha;
                            if (contrato !== undefined && fecha !== undefined) {
                                const key = `${contrato}_${fecha}`;
                                if (!eventosAgrupados[key]) {
                                    eventosAgrupados[key] = { ...evento, cantidad: 1, nroCupos: [evento.extendedProps.nroCupo || ''], impComprobanteTotal: 0 };
                                } else {
                                    eventosAgrupados[key].cantidad += 1;
                                    if (evento.className === 'eventoCobranza') {
                                        eventosAgrupados[key].impComprobanteTotal += parseFloat(evento.extendedProps.impComprobante.replace(',', '.')) || 0;
                                    }
                                    eventosAgrupados[key].nroCupos.push(evento.extendedProps.nroCupo || '');
                                }
                            } else {
                                eventosNoAgrupados.push(evento);
                            }
                        });

                        // Combinar eventos agrupados y no agrupados en una sola lista
                        const eventosAgrupadosList = Object.values(eventosAgrupados);
                        const eventosFinal = eventosAgrupadosList.concat(eventosNoAgrupados);



                        // Convertir los eventos agrupados a la estructura original
                        const eventosAgrupadosOriginal = eventosFinal.map(eventoAgrupado => {
                            if (eventoAgrupado.className === 'eventoCupo') {
                                return {
                                    ...eventoAgrupado,
                                    title: `${eventoAgrupado.extendedProps.contrato} - Comprador: ${eventoAgrupado.extendedProps.comprador} - Cantidad: ${eventoAgrupado.cantidad} - ${eventoAgrupado.extendedProps.fecha}`,
                                    className: 'eventoCupo',
                                    date: eventoAgrupado.extendedProps.date,
                                    extendedProps: {
                                        ...eventoAgrupado.extendedProps,
                                        nroCupo: eventoAgrupado.nroCupos[0], // Tomar solo el primer número de cupo
                                    },
                                };
                            } else {
                                return eventoAgrupado; // Si no es un cupo, devolver el evento sin modificar
                            }
                        });


                        setEventosCalendario(eventosAgrupadosOriginal);
                        setEventosTodos(eventosAgrupadosOriginal);
                        setSeCargoEventos(true);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setSeCargoEventos(true);
                        setError(error);
                    }
                );
        };





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
                let arrayCupo = eventosTodos.filter((e) => e.extendedProps.tipoEvento === "Cupo");

                // Agrupar los eventos por contrato y fecha
                const cuposAgrupados = Object.values(
                    arrayCupo.reduce((acc, cupo) => {
                        const key = `${cupo.extendedProps.contrato}_${cupo.extendedProps.fecha}`;
                        if (!acc[key]) {
                            acc[key] = { ...cupo, cantidad: 1, nroCupos: [cupo.extendedProps.nroCupo] };
                        } else {
                            acc[key].cantidad += 1;
                            acc[key].nroCupos.push(cupo.extendedProps.nroCupo);
                        }
                        return acc;
                    }, {})
                );

                // Convertir los cupos agrupados a la estructura original
                const cuposAgrupadosOriginal = cuposAgrupados.map(cupoAgrupado => {
                    return {
                        ...cupoAgrupado,
                        title: `${cupoAgrupado.extendedProps.contrato} - Comprador: ${cupoAgrupado.extendedProps.comprador} - Cantidad: ${cupoAgrupado.cantidad} - ${cupoAgrupado.extendedProps.fecha}`,
                        className: "eventoCupo",
                        date: cupoAgrupado.extendedProps.date,
                        extendedProps: {
                            ...cupoAgrupado.extendedProps,
                            nroCupo: cupoAgrupado.nroCupos[0], // Tomar solo el primer número de cupo
                        },
                    };
                });

                arrayEventos = arrayEventos.concat(cuposAgrupadosOriginal);
            }




            if (isCheckedFuturo) {
                let arrayFuturo = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Futuro");
                arrayEventos = arrayEventos.concat(arrayFuturo);
            }

            // if (isCheckedVencimiento) {
            //   let arrayVencimiento = eventosTodos.filter((e) => e.extendedProps.tipoEvento == "Vencimiento");
            //   arrayEventos = arrayEventos.concat(arrayVencimiento);
            // }

            if (isCheckedTodos) {
                obtenerEventos();
                arrayEventos = eventosTodos;
            }


            // Eliminar duplicados
            const setEventos = new Set(arrayEventos.map(JSON.stringify));
            arrayEventos = Array.from(setEventos).map(JSON.parse);

            setEventosCalendario(arrayEventos);

        }

    }, [
        isCheckedCobranza,
        isCheckedCupo,
        isCheckedFuturo,
        // isCheckedVencimiento,
        isCheckedTodos,
    ]);

    return (

        <div>

            <div>
                <div className="btn waves-effect indigo lighten-5 color-primary" onClick={() => navigate(-1)}>
                    <i className="material-icons left">arrow_back</i>
                    VOLVER ATRÁS
                </div>
            </div>

            {seCargoEventos ?
                <>
                    <CobranzasModal
                        isOpen={isOpenCobranza}
                        item={contenido}
                        toggleModal={toggleModalCobranza} />
                    <CuposModal
                        isOpen={isOpenCupo}
                        item={contenido}
                        toggleModal={toggleModalCupo} />
                    <FuturoModal
                        isOpen={isOpenFuturo}
                        item={contenido}
                        toggleModal={toggleModalFuturo} />
                    {/* <VencimientoModal
            isOpen={isOpenVencimiento}
            item={contenido}
            toggleModal={toggleModalVencimiento} /> */}

                    <SelectorEventos
                        isCheckedCobranza={isCheckedCobranza}
                        isCheckedCupo={isCheckedCupo}
                        isCheckedFuturo={isCheckedFuturo}
                        // isCheckedVencimiento={isCheckedVencimiento}
                        isCheckedTodos={isCheckedTodos}
                        handleCheckCobranzas={handleCheckCobranzas}
                        handleCheckCupos={handleCheckCupos}
                        handleCheckFuturos={handleCheckFuturos}
                        // handleCheckVencimientos={handleCheckVencimientos}
                        handleCheckTodos={handleCheckTodos} />
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView={initialView}
                        eventOrder={(a, b) => {
                            var contratoA = a.cto || a.contrato
                            var contratoB = b.cto || b.contrato

                            if (contratoA < contratoB) {
                                return -1
                            }
                            else {
                                return 1
                            }
                        }
                        }
                        dayMaxEventRows={true} // for all non-TimeGrid views
                        views={{
                            timeGrid: {
                                dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
                            },
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
                                    navigate('/calendarioanual', { replace: true });
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
                    /></>
                : <>
                    <div className="pos-center">
                        <div className="loader">
                        </div>
                    </div>
                </>}

        </div>
    );
}