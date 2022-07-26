import FuturosItem from "../item/FuturosItem";
import { EventosContext } from "../../../context/EventosContext";
import { useContext,memo } from "react";

function FuturosHome({futuros,visibilidadFuturos,visibilidadTodos}){
    const {eventos}=useContext(EventosContext);
    return (
        <div className={visibilidadFuturos || visibilidadTodos?"contenedorHome":"hide"} id="futuros">

            <div className="card bg-futuros-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-futuros">Futuros</span>

                {
                    eventos['futuros']!=null && eventos['futuros'].length>0?
                    eventos['futuros'].map(function(futuro){
                        return (
                            <FuturosItem key={futuro.id} item={futuro}/>
                        )
                    }): <p>Sin eventos</p>
                } 
                </div>
            </div>

        </div>

    );
}

export default memo(FuturosHome);