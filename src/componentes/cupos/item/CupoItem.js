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
                <div className="modalCupoHeader">
                    <h6>Cupo</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
                </div>    
                <div>{item.producto} - {item.comprador} - {item.vendedor} - - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</div>               
            </Modal>

            <><a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.producto} - {item.comprador} - {item.vendedor} - - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a>
            <div className="divider"></div></>
        </div>
        
    );

}

export default CupoItem;