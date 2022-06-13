import './EventosHome.css';
import getEventos from '../../api';
import {useState,useEffect} from 'react';
import CobranzasHome from '../cobranzas/home/CobranzasHome';
import CuposHome from '../cupos/home/CuposHome';
import VencimientosHome from '../vencimientos/home/VencimientosHome';
import FuturosHome from '../futuros/home/FuturosHome';
import EventosZeniHome from '../eventosZeni/home/EventosZeniHome';
import Botonera from '../botonera/Botonera';

import CupoItem from '../cupos/item/CupoItem';

function EventosHome(){
    const [eventoss,setEventoss]=useState([]);
    const [prueba, setPrueba]=useState([]);
    const [cobranzas, setCobranzas]=useState([]);
    const [cupos, setCupos]=useState([]);
    const [eventosZeni, setEventosZeni]=useState([]);
    const [futuros, setFuturos]=useState([]);
    const [vencimientos, setVencimientos]=useState([]);
    let i=0;
   
    useEffect(function(){
        /*setPrueba([
            {vto:"14/07/2021",cv:"Venta",impComprobante:"3.455.612,2",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
            cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
            {vto:"15/07/2021",cv:"Venta",impComprobante:"3.455.612,2",iva:"345.612",saldoConf:"0,00",pendiente:"3.123.456",moneda:"S",datosCpte:"LP A 2 331004671478",
            cpteOrigen:"LP A 2 331004671478",cto:"21/16862/7",contraparte:"ADM Agro SRL", tipoCobranza:"Valor Zeni", observaciones:"--",tipo:"LP",coe:"331004671478"},
        
    ]);*/
    console.log(prueba);
        getEventos().then(function(eventos){
            setCobranzas(eventos['cobranzas']);
            setCupos(eventos['cuposOrtogados']);
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
                
                <div className="contenedorHome" id="cupos">
                    <div className="col s12 m4 l2">
                    <div className="card bg-cupos-light hoverable">
                        <div className="card-content black-text">
                        <span className="card-title bg-cupos">Cupos</span>
                        {
                            cupos.length>0?
                            cupos.map(function(cupo){
                                return (
                                    <CupoItem key={cupo.id} item={cupo}/>
                                )
                            }): <p>Sin eventos</p>
                        }
                        
                        </div>
                    </div>
                    </div>
                </div>
                <VencimientosHome/>
                <FuturosHome/>
                <EventosZeniHome/>
            </div>
        </div>
    )
}

export default EventosHome;