import CupoItem from "../item/CupoItem";

function CuposHome({cupos, visibilidadCupos,visibilidadTodos}){
    return (
        <div className={visibilidadCupos || visibilidadTodos?"contenedorHome":"hide"} id="cupos">

            <div className="card bg-cupos-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-cupos">Cupos</span>

                {
                            cupos.length>0?
                            cupos.map(function(cupo){
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