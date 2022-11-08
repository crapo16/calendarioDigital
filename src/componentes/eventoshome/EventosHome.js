import './EventosHome.css';

/*import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'*/
import { useState, useEffect, memo } from 'react';
import CobranzasHome from '../cobranzas/home/CobranzasHome';
import CuposHome from '../cupos/home/CuposHome';
import VencimientosHome from '../vencimientos/home/VencimientosHome';
import FuturosHome from '../futuros/home/FuturosHome';
import { EventosContext } from '../../context/EventosContext';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import configData from '../../config.json';


function EventosHome({ nombreUsuario, nroCuenta, nombreCuenta }) {

    const { user, hash, fechaHasta } = useParams();
    const { eventos, setEventos } = useContext(EventosContext);
    const [visibilidadCobranzas, setVisibilidadCobranzas] = useState(false);
    const [visibilidadEventosZeni, setVisibilidadEventosZeni] = useState(false);
    const [visibilidadCupos, setVisibilidadCupos] = useState(false);
    const [visibilidadFuturos, setVisibilidadFuturos] = useState(false);
    const [visibilidadVencimientos, setVisibilidadVencimientos] = useState(false);
    const [visibilidadTodos, setVisibilidadTodos] = useState(true);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [fechaHoy] = useState(new Date().toLocaleDateString('es-AR', options).charAt(0).toUpperCase() + new Date().toLocaleDateString('es-AR', options).slice(1));
    const [hasLoaded, setHasLoaded] = useState(false);

    function cambiarTodos(visibilidad) {

        if (visibilidad) {
            setVisibilidadCobranzas(false);
            setVisibilidadEventosZeni(false);
            setVisibilidadCupos(false);
            setVisibilidadFuturos(false);
            setVisibilidadVencimientos(false);
            setVisibilidadTodos(true);
        }
        else {

            setVisibilidadTodos(false);
        }
    }

    function cambiarCobranzas(visibilidad) {
        setVisibilidadCobranzas(visibilidad);
        setVisibilidadTodos(false);
    }

    function cambiarCupos(visibilidad) {
        setVisibilidadCupos(visibilidad);
        setVisibilidadTodos(false);

    }

    function cambiarFuturos(visibilidad) {
        setVisibilidadFuturos(visibilidad);
        setVisibilidadTodos(false);

    }

    function cambiarVencimientos(visibilidad) {
        setVisibilidadVencimientos(visibilidad);
        setVisibilidadTodos(false);

    }

    useEffect(() => {
        let datosUsuario = [user, hash, fechaHasta];
        localStorage.setItem('userData', JSON.stringify(datosUsuario));
        async function obtenerEventos() {
            const options = {
                headers: new Headers({ 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }),
                method: "GET"
            };
            await fetch(`${configData.SERVER_URL}Evento?hash=${datosUsuario[1]}&user=${datosUsuario[0]}&fechaHasta=${datosUsuario[2]}`, options)
                .then((response) => {
                    response.json().then((json) =>
                        setEventos(json),
                    )
                });

            if (eventos) {
                setHasLoaded(true);
            }
        }

        !hasLoaded && obtenerEventos();
    }, [hasLoaded]);


    return (
        <div>
            <div className='user-container section'>
                {

                    eventos && eventos['usuario'] && eventos['usuario'].razonSocial ? <h4> Buen día {eventos['usuario'].razonSocial}</h4> : <h4></h4>
                }

                {
                    eventos && eventos['usuario'] ? eventos['usuario'].cuentas.map(e =>
                        <h5>Cuenta {e.numeroCuenta}, {e.denominacionCuenta}</h5>) :
                        <h5></h5>}
            </div>
            <div className='date-container'>
                <div className='row'>
                    <h3>{fechaHoy}</h3>
                </div>

                <div className="botonera" id="botonera">
                    <div>
                        <div className={visibilidadCobranzas ? "chip c-cobranzas active" : "chip c-cobranzas"} onClick={() => cambiarCobranzas(!visibilidadCobranzas)}  >COBRANZAS</div>
                        <div className={visibilidadCupos ? "chip c-cupos active" : "chip c-cupos"} onClick={() => cambiarCupos(!visibilidadCupos)}>CUPOS OTORGADOS</div>
                        <div className={visibilidadVencimientos ? "chip c-vencimientos active" : "chip c-vencimientos"} onClick={() => cambiarVencimientos(!visibilidadVencimientos)}>VENCIMIENTOS</div>
                        <div className={visibilidadFuturos ? "chip c-futuros active" : "chip c-futuros"} onClick={() => cambiarFuturos(!visibilidadFuturos)}>FUTUROS Y OPCIONES</div>
                        {/* <div className={visibilidadEventosZeni?"chip c-eventos active":"chip c-eventos"} onClick={()=>setVisibilidadEventosZeni(!visibilidadEventosZeni)}>EVENTOS</div> */}
                        <div className={visibilidadTodos ? "chip c-todos active active" : "chip c-todos"} onClick={() => cambiarTodos(!visibilidadTodos)}>TODOS</div>
                    </div>
                    <div>
                        <Link to={'/calendario'}>
                            <div className="btn waves-effect indigo lighten-5 color-primary">
                                <i className="material-icons left">today</i>
                                VER CALENDARIO
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='event-container'>
                    <CobranzasHome visibilidadCobranzas={visibilidadCobranzas} visibilidadTodos={visibilidadTodos} />
                    <CuposHome visibilidadCupos={visibilidadCupos} visibilidadTodos={visibilidadTodos} />
                    <VencimientosHome visibilidadVencimientos={visibilidadVencimientos} visibilidadTodos={visibilidadTodos} />
                    <FuturosHome visibilidadFuturos={visibilidadFuturos} visibilidadTodos={visibilidadTodos} />
                    {/* <EventosZeniHome visibilidadEventosZeni={visibilidadEventosZeni} visibilidadTodos={visibilidadTodos}/> */}
                    {!visibilidadTodos && !visibilidadVencimientos && !visibilidadCobranzas && !visibilidadCupos && !visibilidadEventosZeni && !visibilidadFuturos ?
                        <p>Seleccione al menos un item para ver los eventos</p> : ""
                    }
                </div>

            </div>
        </div>
    )
}

export default memo(EventosHome);