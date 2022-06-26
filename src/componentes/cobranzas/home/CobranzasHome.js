import './CobranzasHome.css';
import CobranzasItem from '../item/CobranzasItem';
import ReactModal from "react-modal";

function CobranzasHome({cobranzas, visibilidadCobranzas, visibilidadTodos}){

    
    return (
        <div className={visibilidadCobranzas || visibilidadTodos?"contenedorHome":"hide"} id="cobranzas">
            <div className="col s12 m3 l2">
            <div className="card bg-cobranza-light hoverable">
                <div className="card-content white-text">
                <span className="card-title bg-cobranza">Cobranzas</span>
                {
                            cobranzas.length>0?
                            cobranzas.map(function(cobranza){
                                return (
                                    <CobranzasItem key={cobranza.id} item={cobranza}/>
                                )
                            }): <p>Sin eventos</p>
                }
                </div>
            </div>
            </div>
        </div>

    );
}

export default CobranzasHome;