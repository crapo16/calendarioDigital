// CuposHome.js

import './CuposHome.css';
import CupoItem from "../item/CupoItem";
import CuposModal from "../modal/CuposModal";  // Añadir la importación de CuposModal
import { useContext, useState, memo } from "react";
import { EventosContext } from "../../../context/EventosContext";

function CuposHome({ visibilidadCupos, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);

    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [isOpen, setIsOpen] = useState(false); // Agregar isOpen
    const [selectedCupo, setSelectedCupo] = useState(null); // Agregar selectedCupo

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['cupos'].length <= cantidadItemsNuevo) {
            setMostrarBoton(false);
        }
    };

    const toggleModal = (cupo) => {
        setIsOpen(!isOpen);
        setSelectedCupo(cupo);
    };

    const cuposUnicos = Object.values(
        eventos['cupos'].reduce((acc, cupo) => {
            const key = `${cupo.fecha}_${cupo.contrato}`;
            if (!acc[key]) acc[key] = { ...cupo, nroCupos: [cupo.nroCupo] };
            else acc[key].nroCupos.push(cupo.nroCupo);
            return acc;
        }, {})
    );

    return (
        <div className={visibilidadCupos || visibilidadTodos ? "contenedorHome" : "hide"} id="cupos">

            <div className="card bg-cupos-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-cupos">Cupos</span>

                    {
                        eventos != null && eventos['cupos'] != null && eventos['cupos'].length > 0 ?
                            cuposUnicos.slice(0, cantidadItems).map(function (cupo, index) {
                                return (
                                    <div key={cupo.id + " " + index}>
                                        <CupoItem item={cupo} />
                                    </div>
                                )
                            }) : <p>Sin eventos</p>
                    }
                    {
                        mostrarBoton && eventos != null && eventos['cupos'] != null && eventos['cupos'].length > 0 && eventos['cupos'].length > 10
                            ? <button className="button-ver-mas-cupos" onClick={handleClick}>Ver más</button>
                            : null
                    }
                </div>
            </div>

            {/* Renderizar el modal */}
            {isOpen && <CuposModal isOpen={isOpen} item={selectedCupo} toggleModal={toggleModal} />}
        </div>
    );
}

export default memo(CuposHome);
