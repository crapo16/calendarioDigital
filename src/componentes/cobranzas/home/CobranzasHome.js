import './CobranzasHome.css';
import CobranzasItem from '../item/CobranzasItem';
import { useContext, memo } from 'react';
import { EventosContext } from '../../../context/EventosContext';
import { useState } from 'react';

function CobranzasHome({ visibilidadCobranzas, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);
    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['cobranzas'].length <= cantidadItems) {
            setMostrarBoton(false);
        }
    };


    return (
        <div className={visibilidadCobranzas || visibilidadTodos ? "contenedorHome" : "hide"} id="cobranzas">

            <div className="card bg-cobranza-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-cobranza">Cobranzas</span>
                    {
                        (eventos != null && eventos['cobranzas'] != null && eventos['cobranzas'].length > 0 ?
                            eventos['cobranzas'].slice(0, cantidadItems).map(function (cobranza) {
                                return (
                                    <CobranzasItem key={cobranza.id} item={cobranza} />
                                )
                            }) : <p>Sin eventos</p>)

                    }
                    {
                        mostrarBoton && eventos != null && eventos['cobranzas'] != null && eventos['cobranzas'].length > 0 
                        ? <button class="button-ver-mas" onClick={handleClick}>Ver más</button> 
                        : null
                    }
                </div>
            </div>

        </div>

    );
}

export default memo(CobranzasHome);