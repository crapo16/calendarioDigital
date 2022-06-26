import FuturosItem from "../item/FuturosItem";
function FuturosHome({futuros,visibilidadFuturos,visibilidadTodos}){
    return (
        <div className={visibilidadFuturos || visibilidadTodos?"contenedorHome":"hide"} id="futuros">
            <div className="col s12 m3 l2">
            <div className="card bg-futuros-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-futuros">Futuros</span>

                {
                    futuros.length>0?
                    futuros.map(function(futuro){
                        return (
                            <FuturosItem key={futuro.id} item={futuro}/>
                        )
                    }): <p>Sin eventos</p>
                } 
                </div>
            </div>
            </div>
        </div>

    );
}

export default FuturosHome;