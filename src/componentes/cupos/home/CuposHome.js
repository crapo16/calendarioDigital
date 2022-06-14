import CupoItem from "../item/CupoItem";

function CuposHome({cupos}){
    return (
        <div className="contenedorHome" id="cupos">
            <div className="col s12 m4 l2">
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
        </div>
    );
}

export default CuposHome;