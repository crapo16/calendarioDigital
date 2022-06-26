import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

export default function VecimientosItem({item}){
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
                className={"modalVencimiento"}
            >
                <div className="modalHeader bg-vencimientos">
                    <h6>Vencimiento</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
                </div>    
                <div className="itemContainer">
                    <div>{item.nombre}</div> 
                    <div>{item.fechaFin}</div>
                </div>
                <div className="divider"/> 
                <div className="itemContainer">
                    <div>{item.nombre}</div> 
                    <div>{item.fechaFin}</div>
                </div>              
            </Modal>
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.nombre} - {item.fechaFin} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a><div className="divider"></div>
        </div>

        
    );
}