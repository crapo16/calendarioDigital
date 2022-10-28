import './EventosHome.css';

/*import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'*/
import {useState,useEffect,memo} from 'react';
import CobranzasHome from '../cobranzas/home/CobranzasHome';
import CuposHome from '../cupos/home/CuposHome';
import VencimientosHome from '../vencimientos/home/VencimientosHome';
import FuturosHome from '../futuros/home/FuturosHome';
import EventosZeniHome from '../eventosZeni/home/EventosZeniHome';
import { EventosContext } from '../../context/EventosContext';

import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';



function EventosHome({nombreUsuario, nroCuenta, nombreCuenta}){

    const {user,hash,fechaHasta}=useParams();

    const {setDatosUsuario,eventos}=useContext(EventosContext);
    const [visibilidadCobranzas, setVisibilidadCobranzas]=useState(false);
    const [visibilidadEventosZeni, setVisibilidadEventosZeni]=useState(false);
    const [visibilidadCupos, setVisibilidadCupos]=useState(false);
    const [visibilidadFuturos, setVisibilidadFuturos]=useState(false);
    const [visibilidadVencimientos, setVisibilidadVencimientos]=useState(false);
    const [visibilidadTodos, setVisibilidadTodos]=useState(true);
    
    function cambiarTodos(visibilidad){

        if(visibilidad)
        {
        setVisibilidadCobranzas(false);
        setVisibilidadEventosZeni(false);
        setVisibilidadCupos(false);
        setVisibilidadFuturos(false);
        setVisibilidadVencimientos(false);
        setVisibilidadTodos(true);
        }
        else{
            
            setVisibilidadTodos(false);
        }
    }

    function cambiarCobranzas(visibilidad){
        setVisibilidadCobranzas(visibilidad);
        setVisibilidadTodos(false);
    }

    function cambiarCupos(visibilidad){
        setVisibilidadCupos(visibilidad);
        setVisibilidadTodos(false);

    }

    function cambiarFuturos(visibilidad){
        setVisibilidadFuturos(visibilidad);
        setVisibilidadTodos(false);

    }

    function cambiarVencimientos(visibilidad){
        setVisibilidadVencimientos(visibilidad);
        setVisibilidadTodos(false);

    }

    useEffect(()=>{
        setDatosUsuario(user,hash,fechaHasta);



    },[user,hash,fechaHasta])
    return (
        <div>
            <div className='user-container section'>
                <h4> Buen día {nombreUsuario}</h4>
                <h5> Cuenta {nroCuenta}, {nombreCuenta}</h5>
            </div>
            <div className='date-container'>
                <div className='row'>
                    <h3>Martes 17 de mayo, 2022</h3>
                </div>

                <div className="botonera" id="botonera">
                    <div>
                        <div className={visibilidadCobranzas?"chip c-cobranzas active":"chip c-cobranzas"} onClick={()=>cambiarCobranzas(!visibilidadCobranzas)}  >COBRANZAS</div>
                        <div className={visibilidadCupos?"chip c-cupos active":"chip c-cupos"} onClick={()=>cambiarCupos(!visibilidadCupos)}>CUPOS OTORGADOS</div>
                        <div className={visibilidadVencimientos?"chip c-vencimientos active":"chip c-vencimientos"} onClick={()=>cambiarVencimientos(!visibilidadVencimientos)}>VENCIMIENTOS</div>
                        <div className={visibilidadFuturos?"chip c-futuros active":"chip c-futuros"} onClick={()=>cambiarFuturos(!visibilidadFuturos)}>FUTUROS Y OPCIONES</div>
                        {/* <div className={visibilidadEventosZeni?"chip c-eventos active":"chip c-eventos"} onClick={()=>setVisibilidadEventosZeni(!visibilidadEventosZeni)}>EVENTOS</div> */}
                        <div className={visibilidadTodos?"chip c-todos active active":"chip c-todos"} onClick={()=>cambiarTodos(!visibilidadTodos)}>TODOS</div>
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
                    <CobranzasHome visibilidadCobranzas={visibilidadCobranzas} visibilidadTodos={visibilidadTodos}/>
                    <CuposHome visibilidadCupos={visibilidadCupos} visibilidadTodos={visibilidadTodos}/>
                    <VencimientosHome  visibilidadVencimientos={visibilidadVencimientos} visibilidadTodos={visibilidadTodos}/>
                    <FuturosHome visibilidadFuturos={visibilidadFuturos} visibilidadTodos={visibilidadTodos}/>
                    {/* <EventosZeniHome visibilidadEventosZeni={visibilidadEventosZeni} visibilidadTodos={visibilidadTodos}/> */}
                    {!visibilidadTodos && !visibilidadVencimientos && !visibilidadCobranzas && !visibilidadCupos && !visibilidadEventosZeni && !visibilidadFuturos?
                        <p>Seleccione al menos un item para ver los eventos</p>:""
                    }
                 </div>
                
            </div>
        </div>
    )
}

export default memo(EventosHome);