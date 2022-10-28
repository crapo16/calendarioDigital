import Modal from "react-modal";

function FuturoModal({isOpen,toggleModal,item}){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Detalle Evento"
            className={"modalFuturo"}
        >
            <div className="modalHeader bg-futuros">
                <h6>Vencimiento Fut y Opc</h6>
                <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
            </div>    
            <div className="itemContainer">
                <div>Tipo</div> 
                <div>{item.tipo}</div>
            </div>
            <div className="divider"/>  
            <div className="itemContainer">
                <div>Operacion</div> 
                <div>{item.operacion}</div>
            </div>   
            <div className="divider" />
            <div className="itemContainer">
                <div>Condicion</div>
                <div>{item.condicion}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Producto</div>
                <div>{item.producto}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Posicion</div>
                <div>{item.posicion}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Volumen</div>
                <div>{item.volumen}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Precio Ej.</div>
                <div>{item.precioEj}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Precio/Prima</div>
                <div>{item.precioPrima}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Destino</div>
                <div>{item.destino}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Registro</div>
                <div>{item.registro}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Fec.Alta</div>
                <div>{item.fecAlta}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Reg.Cancela</div>
                <div>{item.regCancela}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Fec.Inicial</div>
                <div>{item.fecInicial}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Precio inic.</div>
                <div>{item.precioInic}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>En Contratos</div>
                <div>{item.enContratos}</div>
            </div>        
            <div className="divider" />
            <div className="itemContainer">
                <div>Estado</div>
                <div>{item.estado}</div>
            </div>        
        </Modal>
    )
}

export default FuturoModal;