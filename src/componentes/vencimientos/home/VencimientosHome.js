import VencimientosItem from "../item/VencimientosItem";
import { EventosContext } from "../../../context/EventosContext";
import { useContext } from "react";

function VencimientosHome({visibilidadVencimientos,visibilidadTodos}){
    const {eventos}=useContext(EventosContext);

    return (
        <div className={visibilidadVencimientos || visibilidadTodos?"contenedorHome":"hide"} id="vencimientos">

            <div className="card bg-vencimientos-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-vencimientos">Vencimientos</span>
                {
                    eventos!=null && eventos['vencimientos']!=null && eventos['vencimientos'].length>0?
                    eventos['vencimientos'].map(function(vencimiento){
                        return (
                            <VencimientosItem key={vencimiento.id} item={vencimiento}/>
                        )
                    }): <p>Sin eventos</p>
                }
                
                </div>
            </div>

        </div>
    );
}

export default VencimientosHome;