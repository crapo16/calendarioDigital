import Modal from "react-modal";
import React, { useState } from "react";
import FuturoModal from '../modal/FuturoModal';

Modal.setAppElement("#root");

export default function FuturosItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <FuturoModal item={item} isOpen={isOpen} toggleModal={toggleModal} />
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text">{item.fecAlta} - {item.condicion} - {item.producto} - {item.volumen} - {item.posicion}</a><div className="divider"></div>
        </div>

    );

}