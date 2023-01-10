import './CuposHome.css';
import CupoItem from "../item/CupoItem";
import { useContext, useState, memo } from "react";
import { EventosContext } from "../../../context/EventosContext";

function CuposHome({ visibilidadCupos, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);

    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['cupos'].length <= cantidadItemsNuevo) {
            setMostrarBoton(false);
        }
    };

    return (
        <div className={visibilidadCupos || visibilidadTodos ? "contenedorHome" : "hide"} id="cupos">

            <div className="card bg-cupos-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-cupos">Cupos</span>

                    {
                        eventos != null && eventos['cupos'] != null && eventos['cupos'].length > 0 ?
                            eventos['cupos'].slice(0, cantidadItems).map(function (cupo) {
                                return (
                                    <CupoItem key={cupo.id} item={cupo} />
                                )
                            }) : <p>Sin eventos</p>
                    }
                    {
                        mostrarBoton && eventos != null && eventos['cupos'] != null && eventos['cupos'].length > 0 && eventos['cupos'].length > 10
                            ? <button class="button-ver-mas-cupos" onClick={handleClick}>Ver más</button>
                            : null
                    }
                </div>
            </div>

        </div>
    );
}

export default memo(CuposHome);