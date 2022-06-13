import './EventosHome.css';
import getEventos from '../../api';
import {useState,useEffect} from 'react';
import CobranzasHome from '../cobranzas/home/CobranzasHome';
import CuposHome from '../cupos/home/CuposHome';
import VencimientosHome from '../vencimientos/home/VencimientosHome';
import FuturosHome from '../futuros/home/FuturosHome';
import EventosZeniHome from '../eventosZeni/home/EventosZeniHome';
import Botonera from '../botonera/Botonera';



function EventosHome(){
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
    )
}

export default EventosHome;