import './CobranzasHome.css';
import CobranzasItem from '../item/CobranzasItem';
import ReactModal from "react-modal";
import { useContext } from 'react';
import { EventosContext } from '../../../context/EventosContext';
import { useState } from 'react';

function CobranzasHome({visibilidadCobranzas, visibilidadTodos}){
    const {eventos}=useContext(EventosContext);
    
    return (
        <div className={visibilidadCobranzas || visibilidadTodos?"contenedorHome":"hide"} id="cobranzas">

            <div className="card bg-cobranza-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-cobranza">Cobranzas</span>
                {
                            eventos['cobranzas']!=null && eventos['cobranzas'].length>0?
                            eventos['cobranzas'].map(function(cobranza){
                                return (
                                    <CobranzasItem key={cobranza.id} item={cobranza}/>
                                )
                            }): <p>Sin eventos</p>
                }
                </div>
            </div>

        </div>

    );
}

export default CobranzasHome;