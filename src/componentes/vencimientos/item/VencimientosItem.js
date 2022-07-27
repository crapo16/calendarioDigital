import Modal from "react-modal";
import React, { useState } from "react";
import VencimientoModal from '../modal/VencimientosModal';

Modal.setAppElement("#root");

export default function VecimientosItem({item}){
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <VencimientoModal item={item} toggleModal={toggleModal} isOpen={isOpen}/>
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.nombre} - {item.fechaFin} - lorem ipsun sit dolor ammet neque plus ultra veritas veritae</a><div className="divider"></div>
        </div>

        
    );
}