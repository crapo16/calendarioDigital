import Modal from "react-modal";

function VencimientoModal({isOpen,item,toggleModal}){
    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Detalle Evento"
                className={"modalVencimiento"}
            >
                <div className="modalHeader bg-vencimientos">
                    <h6>Vencimiento</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
                </div>    
                <div className="itemContainer">
                    <div>Nombre</div> 
                    <div>{item.nombre}</div>
                </div>
                <div className="divider"/> 
                <div className="itemContainer">
                    <div>Fecha fin</div> 
                    <div>{item.fechaFin}</div>
                </div>              
            </Modal>
    )
}

export default VencimientoModal;