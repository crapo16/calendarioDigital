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
                    <div>{item.producto}</div> 
                    <div>{item.comprador}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer">
                    <div>{item.producto}</div> 
                    <div>{item.vendedor}</div>
                </div>               
            </Modal>
    )

}

export default CuposModal;