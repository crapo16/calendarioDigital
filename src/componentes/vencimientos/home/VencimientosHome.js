import VencimientosItem from "../item/VencimientosItem";
function VencimientosHome({vencimientos,visibilidadVencimientos,visibilidadTodos}){
    return (
        <div className={visibilidadVencimientos || visibilidadTodos?"contenedorHome":"hide"} id="vencimientos">

            <div className="card bg-vencimientos-light hoverable">
                <div className="card-content white-text">
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
    );
}

export default VencimientosHome;