import CupoItem from "../item/CupoItem";
import { useContext } from "react";
import { EventosContext } from "../../../context/EventosContext";

function CuposHome({visibilidadCupos,visibilidadTodos}){
    const {eventos}=useContext(EventosContext);

    return (
        <div className={visibilidadCupos || visibilidadTodos?"contenedorHome":"hide"} id="cupos">

            <div className="card bg-cupos-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-cupos">Cupos</span>

                {
                            eventos['cupos']!=null && eventos['cupos'].length>0?
                            eventos['cupos'].map(function(cupo){
                                return (
                                    <CupoItem key={cupo.id} item={cupo}/>
                                )
                            }): <p>Sin eventos</p>
                }
                </div>
            </div>

        </div>
    );
}

export default CuposHome;