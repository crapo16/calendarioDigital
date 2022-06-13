import EventosZeniItem from "../item/EventosZeniItem";
function EventosZeniHome({eventosZeni}){
    return (
        <div className="contenedorHome" id="eventosZeni">
            <div className="col s12 m4 l2">
            <div className="card bg-eventos-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-eventos">Eventos Zeni</span>
                {
                    eventosZeni.length>0?
                    eventosZeni.map(function(eventoZeni){
                        return (
                            <EventosZeniItem key={eventoZeni.id} item={eventoZeni}/>
                        )
                    }): <p>Sin eventos</p>
                }
                
                </div>
            </div>
            </div>
        </div>
    );
}

export default EventosZeniHome;