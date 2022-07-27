import Modal from "react-modal";

function CobranzasModal({item, toggleModal, isOpen}){

    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Detalle Evento"
                className={"modalCobranza"}
            >
                <div className="modalHeader bg-cobranza">
                    <h6>Cobranza</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
                </div>    
                <div className="itemContainer"> 
                    <div>{item.cv}</div> 
                    <div>{item.impComprobante}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>{item.cv}</div> 
                    <div>{item.impComprobante}</div>
                </div>
                
            </Modal>

    );
}

export default CobranzasModal;