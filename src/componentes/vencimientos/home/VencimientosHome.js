import './VencimientosHome.css';
import VencimientosItem from "../item/VencimientosItem";
import { EventosContext } from "../../../context/EventosContext";
import { useContext, useState } from "react";

function VencimientosHome({ visibilidadVencimientos, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);
    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['vencimientos'].length <= cantidadItems) {
            setMostrarBoton(false);
        }
    };


    return (
        <div className={visibilidadVencimientos || visibilidadTodos ? "contenedorHome" : "hide"} id="vencimientos">

            <div className="card bg-vencimientos-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-vencimientos">Vencimientos</span>
                    {
                        eventos != null && eventos['vencimientos'] != null && eventos['vencimientos'].length > 0 ?
                            eventos['vencimientos'].slice(0, cantidadItems).map(function (vencimiento) {
                                return (
                                    <VencimientosItem key={vencimiento.id} item={vencimiento} />
                                )
                            }) : <p>Sin eventos</p>
                    }
                    {
                        mostrarBoton && eventos != null && eventos['vencimientos'] != null && eventos['vencimientos'].length > 0 && eventos['vencimientos'].length > 10
                            ? <button class="button-ver-mas-vencimiento" onClick={handleClick}>Ver más</button>
                            : null
                    }

                </div>
            </div>

        </div>
    );
}

export default VencimientosHome;