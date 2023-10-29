import Modal from "react-modal";
import React, { useState } from "react";
import CuposModal from '../modal/CuposModal'

Modal.setAppElement("#root");

function CupoItem({item}){

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return (

        <div>
            <CuposModal isOpen={isOpen} item={item} toggleModal={toggleModal}/>

            <><a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.contrato} - Vendedor: {item.vendedor} - Comprador: {item.comprador} - {item.producto} - {item.otorgados}</a>
            <div className="divider"></div></>
        </div>
        
    );

}

export default CupoItem;