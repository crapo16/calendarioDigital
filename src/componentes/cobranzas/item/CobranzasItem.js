import Modal from "react-modal";
import React, { useState } from "react";
import CobranzasModal from '../modal/CobranzasModal';

Modal.setAppElement("#root");

function CobranzasItem({ item }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }



    return (
        <div>
            <CobranzasModal isOpen={isOpen} toggleModal={toggleModal} item={item} />
            <a href="#" onClick={toggleModal} className="truncate hoverable white-text modal-trigger">
                {item.cto} - Comprador: {item.contraparte} - {"$ " + (item.impComprobante ? parseFloat(item.impComprobante.replace(',', '.')).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 0)}
            </a>
            <div className="divider"></div>
        </div>

    );

}

export default CobranzasItem;