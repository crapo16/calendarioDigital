import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");

function CobranzasItem({item}){
        
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
                className={"modalCobranza"}
            >
                <div className="modalHeader bg-cobranza">
                    <h6>Cobranza</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i class="material-icons">close</i></button>
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

        
            <a href="#" onClick={toggleModal}  data-target={"modal"+item.id} className="truncate hoverable white-text modal-trigger">{item.cv} {item.impComprobante} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a>
            <div className="divider"></div>
        </div>
    );

}

export default CobranzasItem;