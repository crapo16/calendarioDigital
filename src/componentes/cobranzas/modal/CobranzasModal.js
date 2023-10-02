import Modal from "react-modal";

function CobranzasModal({item, toggleModal, isOpen}){

    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Detalle Evento"
                className={"modalCobranza"}
            >
                <div className="modalHeader bg-cobranza">
                    <h6>Cobranzas y Pagos</h6>
                    <button className="btnCerrarModal" onClick={toggleModal}><i className="material-icons">close</i></button>
                </div>  
                <div className="itemContainer"> 
                    <div>Vto.</div> 
                    <div>{item.vto}</div>
                </div>
                <div className="divider" />
                <div className="itemContainer">
                    <div>Comprador</div>
                    <div>{item.contraparte}</div>
                </div>
                <div className="divider" />
                <div className="itemContainer">
                    <div>Vendedor</div>
                    <div>{item.cuenta   }</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>C/V</div> 
                    <div>{item.cv}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Imp. Comprobante</div> 
                    <div>{item.impComprobante}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>IVA</div> 
                    <div>{item.iva}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Saldo a Conf.</div> 
                    <div>{item.saldoConf}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Pendiente</div> 
                    <div>{item.pendiente}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Moneda</div> 
                    <div>{item.moneda}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Datos Cpte.</div> 
                    <div>{item.datosCpte}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Cpte. Origen</div> 
                    <div>{item.cpteOrigen}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Cto.</div> 
                    <div>{item.cto}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Contraparte</div> 
                    <div>{item.contraparte}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Tipo de Cobranza</div> 
                    <div>{item.tipoCobranza}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Observaciones</div> 
                    <div>{item.observaciones}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>Tipo</div> 
                    <div>{item.tipo}</div>
                </div>
                <div className="divider"/>
                <div className="itemContainer"> 
                    <div>COE</div> 
                    <div>{item.coe}</div>
                </div>
                
            </Modal>

    );
}

export default CobranzasModal;