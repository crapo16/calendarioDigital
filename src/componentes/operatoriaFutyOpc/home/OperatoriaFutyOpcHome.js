import './OperatoriaFutyOpcHome.css';
import OperatoriaFutyOpcItem from "../item/OperatoriaFutyOpcItem";
import { EventosContext } from "../../../context/EventosContext";
import { useContext, useState } from "react";

function OperatoriaFutyOpcHome({ visibilidadOperatoriaFutyOpc, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);
    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['operatoriaFutyOpc'].length <= cantidadItemsNuevo) {
            setMostrarBoton(false);
        }
    };


    return (
        <div className={visibilidadOperatoriaFutyOpc || visibilidadTodos ? "contenedorHome" : "hide"} id="vencimientos">

            <div className="card bg-vencimientos-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-vencimientos">Operatoria Diaria Fut y Opc</span>
                    {
                        eventos != null && eventos['operatoriaFutyOpc'] != null && eventos['operatoriaFutyOpc'].length > 0 ?
                            eventos['operatoriaFutyOpc'].slice(0, cantidadItems).map(function (operatoriaFutyOpc) {
                                return (
                                    <OperatoriaFutyOpcItem key={operatoriaFutyOpc.id} item={operatoriaFutyOpc} />
                                )
                            }) : <p>Sin eventos</p>
                    }
                    {
                        mostrarBoton && eventos != null && eventos['operatoriaFutyOpc'] != null && eventos['operatoriaFutyOpc'].length > 0 && eventos['operatoriaFutyOpc'].length > 10
                            ? <button className="button-ver-mas-vencimiento" onClick={handleClick}>Ver más</button>
                            : null
                    }

                </div>
            </div>

        </div>
    );
}

export default OperatoriaFutyOpcHome;