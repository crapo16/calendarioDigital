import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

export default function EventosZeniItem({item}){
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
                className={"modalEventoZeni"}
            >
                <div className="modalEventoZeniHeader">
                    <h6>Evento Zeni</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
                </div>    
                <div>{item.nombre} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</div>               
            </Modal>
        <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.nombre} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a><div class="divider"></div>
        </div>
    );
}