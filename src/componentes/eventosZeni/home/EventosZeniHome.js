import EventosZeniItem from "../item/EventosZeniItem";
import { useContext } from "react";
import { EventosContext } from "../../../context/EventosContext";

function EventosZeniHome({visibilidadEventosZeni,visibilidadTodos}){
    const {eventos}=useContext(EventosContext);
    return (
        <div className={visibilidadEventosZeni || visibilidadTodos?"contenedorHome":"hide"} id="eventosZeni">

            <div className="card bg-eventos-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-eventos">Eventos Zeni</span>
                {
                    eventos['eventosZeni']!=null&&eventos['eventosZeni'].length>0?
                    eventos['eventosZeni'].map(function(eventoZeni){
                        return (
                            <EventosZeniItem key={eventoZeni.id} item={eventoZeni}/>
                        )
                    }): <p>Sin eventos</p>
                }
                
                </div>
            </div>

        </div>
    );
}

export default EventosZeniHome;