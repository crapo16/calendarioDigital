import Modal from "react-modal";
import React, { useState } from "react";
import OperatoriaFutyOpcModal from '../modal/OperatoriaFutyOpcModal';

Modal.setAppElement("#root");

export default function OperatoriaFutyOpcItem({item}){
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <OperatoriaFutyOpcModal item={item} toggleModal={toggleModal} isOpen={isOpen}/>
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.fecAlta} - {item.condicion} - {item.producto} - {item.volumen} - {item.posicion}</a><div className="divider"></div>
        </div>

        
    );
}