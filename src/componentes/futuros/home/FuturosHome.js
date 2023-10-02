import './FuturosHome.css';
import FuturosItem from "../item/FuturosItem";
import { EventosContext } from "../../../context/EventosContext";
import { useContext, useState, memo } from "react";

function FuturosHome({ futuros, visibilidadFuturos, visibilidadTodos }) {
    const { eventos } = useContext(EventosContext);
    const [cantidadItems, setCantidadItems] = useState(10);
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const handleClick = () => {
        const cantidadItemsNuevo = cantidadItems + 10;
        setCantidadItems(cantidadItemsNuevo);
        if (eventos['futuros'].length <= cantidadItemsNuevo) {
            setMostrarBoton(false);
        }
    };

    return (
        <div className={visibilidadFuturos || visibilidadTodos ? "contenedorHome" : "hide"} id="futuros">

            <div className="card bg-futuros-light hoverable">
                <div className="card-content white-text">
                    <span className="card-title bg-futuros">Futuros</span>

                    {
                        eventos != null && eventos['futuros'] != null && eventos['futuros'].length > 0 ?
                            eventos['futuros'].slice(0, cantidadItems).map(function (futuro) {
                                return (
                                    <FuturosItem key={futuro.id} item={futuro} />
                                )
                            }) : <p>Sin eventos</p>
                    }
                    {
                        mostrarBoton && eventos != null && eventos['futuros'] != null && eventos['futuros'].length > 0 && eventos['futuros'].length > 10
                            ? <button class="button-ver-mas-futuro" onClick={handleClick}>Ver más</button>
                            : null
                    }

                </div>
            </div>

        </div>

    );
}

export default memo(FuturosHome);