import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

function CupoItem({item}){

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return (

        <div>
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

            <><a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.producto} - {item.comprador} - {item.vendedor} - - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a>
            <div className="divider"></div></>
        </div>
        
    );

}

export default CupoItem;