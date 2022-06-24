import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

export default function FuturosItem({item}){
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
                className={"modalFuturo"}
            >
                <div className="modalFuturoHeader">
                    <h6>Futuro</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
                </div>    
                <div>{item.operacion} {item.producto} Vol.{item.volumen} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</div>               
            </Modal>
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.operacion} {item.producto} Vol.{item.volumen} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a><div class="divider"></div>
        </div>
        
    );

}