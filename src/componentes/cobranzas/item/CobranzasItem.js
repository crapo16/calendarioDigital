import Modal from "react-modal";
import React, { useState } from "react";
import CobranzasModal from '../modal/CobranzasModal';

Modal.setAppElement("#root");

function CobranzasItem({item}){
        
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
      
      
      
    return (
        <div>
            <CobranzasModal isOpen={isOpen} toggleModal={toggleModal} item={item}/>

            <a href="#" onClick={toggleModal}  data-target={"modal"+item.id} className="truncate hoverable white-text modal-trigger">{item.cto} - {"$ " + (item.impComprobante).toLocaleString('es-AR')} - {item.cv} - {item.datosCpte} - Comprador: {item.contraparte} - Vendedor: {item.cuenta}</a>
            <div className="divider"></div>
        </div>
    );

}

export default CobranzasItem;