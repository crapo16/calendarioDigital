import React, { useRef, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import configData from '../../../config.json';
import TiposCalendario from '../../../enums/TiposCalendario.enum';
import axios from "axios";
import { useLocation } from "react-router-dom"
import './CrearEvento.css';
import moment from 'moment';

const CrearEvento = (props) => {
  const [evento, setEvento] = useState({});

  const location = useLocation();

  const { eventoUpdate = {} } = location?.state || {}


  const [selectCalendario, setSelectCalendario] = useState(TiposCalendario[0].id);
 

  const [errorMsg, setErrorMsg] = useState('');
  const { nombre, fecha,tipoCalendario } = evento;

  useEffect(() => {
      if(eventoUpdate){
        eventoUpdate.fecha = moment(eventoUpdate.fecha).format("YYYY-MM-DD") 
        setSelectCalendario(eventoUpdate.tipoCalendario)
        setEvento(eventoUpdate)
        
      }
        

    });
  function checkearEvento(evento){
    if(evento && evento.nombre && evento.fecha && evento.tipoCalendario){
      return true
    }
    else{
      return false
    }

  }

  const handleOnSubmit = (event) => {
    console.log(eventoUpdate)
    event.preventDefault();
    const valores = [nombre, fecha];
    let errorMsg = '';

    evento.tipoCalendario = selectCalendario
   
    if (checkearEvento(evento)) {
      errorMsg = ""
      // const evento = {
      //   nombre: nombre,
      //   fecha: fecha,
      //   tipoCalendario: tipoCalendario
      // };
      guardarEvento()
    } else {
      errorMsg = 'Por favor, rellene todos los campos.';
    }
    setErrorMsg(errorMsg);
  };

  async function guardarEvento() {
    const options = {
        headers: new Headers({ 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }),
        method: "POST",
        
    };

  await axios.post(`${configData.SERVER_URL}CrearEvento`,evento, options)
    .then((response) => {
        response.json().then((json) =>
            //redirect?
            {

            }
        )
    }).catch(exception => {
      //nothing yet
    });
  
}
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombre':
          setEvento((prevState) => ({
            ...prevState,
            [name]: value
          }));
      break;
      case 'fecha':
        setEvento((prevState) => ({
            ...prevState,
            [name]: value
        }));
        break;
      default:
        setEvento((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form bodyPadding">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre del evento</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nombre"
            defaultValue={nombre}
            placeholder="Ingrese el nombre del evento"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="fecha"
            defaultValue={fecha}
            placeholder="Ingrese la fecha"
            onChange={handleInputChange}
          />
        </Form.Group>
       
         <Form.Group controlId="formBasicSelect">
            <Form.Label>Tipo de calendario</Form.Label>
            <Form.Control
              className='show'
              as="select"
              value = {selectCalendario}
              onChange={(e) => setSelectCalendario(e.target.value)}
              >
              {TiposCalendario.map((option) => (
                <option value={option.id}>{option.value}</option>
              ))}
                
            </Form.Control>
      </Form.Group> 
      
        <Button variant="primary" type="submit" className="submit-btn mt10">
          Guardar
        </Button>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}

      </Form>
  
    </div>
  );
};

export default CrearEvento;