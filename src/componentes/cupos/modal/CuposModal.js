import Modal from "react-modal";

function CuposModal({isOpen,item,toggleModal}){
    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Detalle Evento"
                className={"modalCupo"}
            >
                <div className="modalHeader bg-cupos">
                    <h6>Cupo</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
                </div>    
            <div className="itemContainer">
                <div>Fecha</div>
                <div>{item.fecha}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Comprador</div>
                <div>{item.comprador}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Vendedor</div>
                <div>{item.vendedor}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Destinatario</div>
                <div>{item.destinatario}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Destino</div>
                <div>{item.destino}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Localidad Destino </div>
                <div>{item.localidadDestino}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Contrato</div>
                <div>{item.contrato}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Otorgados</div>
                <div>{item.otorgados}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Producto</div>
                <div>{item.producto}</div>
            </div>
            <div className="divider" />
            <div className="itemContainer">
                <div>Nro. Cupo</div>
                <div>{item.nroCupo}</div>
            </div>

          </Modal>
    )

}

export default CuposModal;