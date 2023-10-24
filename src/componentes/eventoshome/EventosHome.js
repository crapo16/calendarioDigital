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
   // const [visibilidadVencimientos, setVisibilidadVencimientos] = useState(false);
    const [visibilidadTodos, setVisibilidadTodos] = useState(true);
    const [cuentasSeleccionadas, setCuentasSeleccionadas] = useState([]);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [fechaHoy] = useState(new Date().toLocaleDateString('es-AR', options).charAt(0).toUpperCase() + new Date().toLocaleDateString('es-AR', options).slice(1));
    const [seCargoEventos, setSeCargoEventos] = useState(false);
    const [cargandoInfo, setCargandoInfo] = useState(false);

    function cambiarTodos(visibilidad) {

        if (visibilidad) {
            setVisibilidadCobranzas(false);
            setVisibilidadEventosZeni(false);
            setVisibilidadCupos(false);
            setVisibilidadFuturos(false);
            //setVisibilidadVencimientos(false);
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

    // function cambiarVencimientos(visibilidad) {
    //     setVisibilidadVencimientos(visibilidad);
    //     setVisibilidadTodos(false);

    // }

    const cuentaCheckedChange = (event) => {
        let cuenta = eventos['usuario'].cuentas.filter(cuenta =>  cuenta.numeroCuenta === event.target.id)[0]
        cuenta.checked = event.target.checked
        obtenerEventos()
    }
    async function obtenerEventos() {
        let datosUsuario = [user, hash, fechaHasta];
        localStorage.setItem('userData', JSON.stringify(datosUsuario));
        const options = {
            headers: new Headers({ 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }),
            method: "GET"
        };

        let cuentasSeleccionadasAux = eventos && eventos['usuario'] ? eventos['usuario'].cuentas.filter(function(cuenta) {
            return cuenta.checked;
          })
          .map(function(cuenta) {
            return cuenta.numeroCuenta;
          }): []
        setCuentasSeleccionadas(cuentasSeleccionadasAux)
        setCargandoInfo(true);

        await fetch(`${configData.SERVER_URL}Evento?hash=${datosUsuario[1]}&user=${datosUsuario[0]}&fechaHasta=${datosUsuario[2]}&cuentasSeleccionadasString=${cuentasSeleccionadasAux.toString()}&getTodasLasCuentas=false`, options)
        .then((response) => {
            response.json().then((json) =>
                setEventos(json),
            )
        }).catch(exception => {
            setCargandoInfo(false);

        });

        setCargandoInfo(false);

        if (eventos) {
            
            setSeCargoEventos(true);
        }
       
        
    }
    useEffect(() => {
        
        

        !seCargoEventos && obtenerEventos();
    }, [seCargoEventos]);


    return (
        <div>
            {seCargoEventos ?

                <div>
                    <div className='user-container section'>
                        {

                            eventos && eventos['usuario'] && eventos['usuario'].razonSocial ? <h4> Buen día {eventos['usuario'].razonSocial}</h4> : <h4></h4>
                        }

                        {
                        
                            eventos && eventos['usuario'] ? eventos['usuario'].cuentas.map((e,index) =>
                            <div className="itemContainer cuenta-container">
                                
                            <div>
                               <h3 className='margin1'> Cuenta {e.numeroCuenta}, {e.denominacionCuenta}</h3>
                            </div>
                            
                            <div className='margin1'>
                                <label className='fontSize26 margin1'>
                                    <input
                                        type="checkbox"
                                        className="filled-in color-cobranzas"
                                        checked={ index === 0 && !seCargoEventos ? true : e.checked }
                                        onChange={cuentaCheckedChange}
                                        id={e.numeroCuenta}
                                        disabled={cargandoInfo}

                                    /><span></span></label>
                            </div>
                        </div>) :
                                <h3></h3>}
                    </div>
                    <div className='date-container'>
                        <div className='row'>
                            <h3>{fechaHoy}</h3>
                        </div>

                        <div className="botonera" id="botonera">
                            <div>
                                <div className={visibilidadCobranzas ? "chip c-cobranzas active" : "chip c-cobranzas"} onClick={() => cambiarCobranzas(!visibilidadCobranzas)}  >COBRANZAS</div>
                                <div className={visibilidadCupos ? "chip c-cupos active" : "chip c-cupos"} onClick={() => cambiarCupos(!visibilidadCupos)}>CUPOS OTORGADOS</div>
                                {/* <div className={visibilidadVencimientos ? "chip c-vencimientos active" : "chip c-vencimientos"} onClick={() => cambiarVencimientos(!visibilidadVencimientos)}>VENCIMIENTOS</div> */}
                                <div className={visibilidadFuturos ? "chip c-futuros active" : "chip c-futuros"} onClick={() => cambiarFuturos(!visibilidadFuturos)}>FUTUROS Y OPCIONES</div>
                                {/* <div className={visibilidadEventosZeni?"chip c-eventos active":"chip c-eventos"} onClick={()=>setVisibilidadEventosZeni(!visibilidadEventosZeni)}>EVENTOS</div> */}
                                <div className={visibilidadTodos ? "chip c-todos active active" : "chip c-todos"} onClick={() => cambiarTodos(!visibilidadTodos)}>TODOS</div>
                            </div>
                            <div>
                                
                                <Link to={'/calendario2023.pdf'} target='_blank' rel='noopener noreferrer'>
                                    <div className="btn waves-effect mr-5 matba">
                                        CALENDARIO MATBA
                                    </div>
                                </Link>
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
                            {/* <VencimientosHome visibilidadVencimientos={visibilidadVencimientos} visibilidadTodos={visibilidadTodos} /> */}
                            <FuturosHome visibilidadFuturos={visibilidadFuturos} visibilidadTodos={visibilidadTodos} />
                            {/* <EventosZeniHome visibilidadEventosZeni={visibilidadEventosZeni} visibilidadTodos={visibilidadTodos}/> */}
                            {!visibilidadTodos /*&& !visibilidadVencimientos */ && !visibilidadCobranzas && !visibilidadCupos && !visibilidadEventosZeni && !visibilidadFuturos ?
                                <p>Seleccione al menos un item para ver los eventos</p> : ""
                            }
                        </div>

                    </div>
                </div>
                : <>
                    <div className="pos-center">
                        <div className="loader">
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default memo(EventosHome);