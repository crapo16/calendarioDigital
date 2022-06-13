import VencimientosItem from "../item/VencimientosItem";
function VencimientosHome({vencimientos}){
    return (
        <div className="contenedorHome" id="vencimientos">
            <div className="col s12 m4 l2">
            <div className="card bg-vencimientos-light hoverable">
                <div className="card-content black-text">
                <span className="card-title bg-vencimientos">Vencimientos</span>
                {
                    vencimientos.length>0?
                    vencimientos.map(function(vencimiento){
                        return (
                            <VencimientosItem key={vencimiento.id} item={vencimiento}/>
                        )
                    }): <p>Sin eventos</p>
                }
                
                </div>
            </div>
            </div>
        </div>
    );
}

export default VencimientosHome;