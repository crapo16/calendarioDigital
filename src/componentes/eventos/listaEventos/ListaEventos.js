import { useContext, useState,useEffect } from "react";
import './ListaEventos.css';
import configData from '../../../config.json';
import { Link } from "react-router-dom";
import TiposCalendario from "../../../enums/TiposCalendario.enum";
import Moment from 'moment';


function ListaEventos() {
  const [eventosLocal, setEventos ] = useState([]);
  const [cantidadItems, setCantidadItems] = useState(10);
  const [mostrarBoton, setMostrarBoton] = useState(true)
  const [seCargoEventos, setSeCargoEventos] = useState(false);

  const handleClick = () => {
      const cantidadItemsNuevo = cantidadItems + 10;
      setCantidadItems(cantidadItemsNuevo);
      if (eventosLocal.length <= cantidadItemsNuevo) {
          setMostrarBoton(false);
      }
  };

  const eliminarEvento = (evento) => {

  };

  async function obtenerEventos() {
    
    const options = {
        headers: new Headers({ 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }),
        method: "GET"
    };

//   await fetch(`${configData.SERVER_URL}EventosLocal`, options)
//     .then((response) => {
//         response.json().then((json) =>
//             setEventos(json),
//         )
//     }).catch(exception => {
//       //nothing yet
//     });

    setEventos([ { nombre: "Prueba",fecha: Date.now(),tipoCalendario: 0},{ nombre: "Prueba 2",fecha: new Date(),tipoCalendario: 2},{ nombre: "Prueba 3",fecha: new Date(),tipoCalendario: 1}])
    if (eventosLocal) {
        
        setSeCargoEventos(true);
    }
   
    
}
useEffect(() => {
    
    

    !seCargoEventos && obtenerEventos();
}, [seCargoEventos]);

  return (
    
      <div id="eventos" className="padding2">  
        <div className="fc-toolbar-chunk">
            <Link to="/crearEvento" >
            <button
                type="button"
                title="Crear evento"
                aria-pressed="false"
                className="btn btn-primary mr-5"
            >
                Crear evento
            </button>
            </Link>
        </div>
          <div className="card bg-vencimientos-light hoverable">
              <div className="card-content white-text">
                  <span className="card-title bg-vencimientos">Eventos</span>
                    {
                    //   eventosLocal != null && eventosLocal != null && eventosLocal.length > 0 ?
                    //     eventosLocal.slice(0, cantidadItems).map(function (eventosLocal) {
                    //         return ""
                    //       }) : <p>Sin eventos</p> 
                    
                    eventosLocal == null || eventosLocal.length === 0 ? "Sin eventos" :
                    
                    <div className="grid-container">
                        <div>Nombre</div><div>Fecha</div><div>Tipo de calendario</div><div>Acciones</div>
                    </div>
                    }    
                    {
                        eventosLocal.slice(0, cantidadItems).map(function (evento) {
                            return <div className="grid-container"><div>{ evento.nombre }</div><div>{ Moment(evento.fecha).format("DD-MM-YYYY") }</div><div>{TiposCalendario[evento.tipoCalendario].value}</div><div>
                                <Link to="/crearEvento" state={{ eventoUpdate: evento }} >
                                    <button
                                        type="button"
                                        title="Editar"
                                        aria-pressed="false"
                                        className="btn btn-primary">
                                        Editar
                                    </button>
                                </Link>
                                <button  className="btn btn-primary" onClick={() => eliminarEvento(evento)}>Eliminar</button></div></div>
                        })
                    }    
                         
                    
                   
                    
                  {
                      mostrarBoton && eventosLocal != null && eventosLocal != null && eventosLocal.length > 0 && eventosLocal.length > 10
                          ? <button className="button-ver-mas-vencimiento" onClick={handleClick}>Ver más</button>
                          : null
                  }

              </div>
          </div>

      </div>
  );
}

export default ListaEventos;
