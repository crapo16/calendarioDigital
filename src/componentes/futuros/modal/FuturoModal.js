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
                <h6>Futuro</h6>
                <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
            </div>    
            <div className="itemContainer">
                <div>{item.operacion}</div> 
                <div>{item.producto}</div>
            </div>
            <div className="divider"/>  
            <div className="itemContainer">
                <div>Volumen:</div> 
                <div>{item.volumen}</div>
            </div>              
        </Modal>
    )
}

export default FuturoModal;