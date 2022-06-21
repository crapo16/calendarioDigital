import './EventosHome.css';

/*import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'*/
import getEventos from '../../api';
import {useState,useEffect} from 'react';
import CobranzasHome from '../cobranzas/home/CobranzasHome';
import CuposHome from '../cupos/home/CuposHome';
import VencimientosHome from '../vencimientos/home/VencimientosHome';
import FuturosHome from '../futuros/home/FuturosHome';
import EventosZeniHome from '../eventosZeni/home/EventosZeniHome';
import Botonera from '../botonera/Botonera';



function EventosHome({nombreUsuario, nroCuenta, nombreCuenta}){
    const [cobranzas, setCobranzas]=useState([]);
    const [cupos, setCupos]=useState([]);
    const [eventosZeni, setEventosZeni]=useState([]);
    const [futuros, setFuturos]=useState([]);
    const [vencimientos, setVencimientos]=useState([]);
   
    useEffect(function(){
        
        getEventos().then(function(eventos){
            setCobranzas(eventos['cobranzas']);
            setCupos(eventos['cuposOtorgados']);
            setFuturos(eventos['futuros']);
            setVencimientos(eventos['vencimientos']);
            setEventosZeni(eventos['eventosZeni']);
                      
        });
        
    }, []);



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
                <Botonera/>
                
                <div className='row event-container'>
                    <CobranzasHome cobranzas={cobranzas}/>
                    <CuposHome cupos={cupos}/>
                    <VencimientosHome vencimientos={vencimientos}/>
                    <FuturosHome futuros={futuros}/>
                    <EventosZeniHome eventosZeni={eventosZeni}/>
                </div>
                
            </div>
        </div>
    )
}

export default EventosHome;