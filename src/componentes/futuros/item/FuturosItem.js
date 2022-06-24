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
                <div className="modalHeader bg-futuros">
                    <h6>Futuro</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
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
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.operacion} {item.producto} Vol.{item.volumen} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a><div class="divider"></div>
        </div>
        
    );

}