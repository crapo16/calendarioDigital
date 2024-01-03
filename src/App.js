import EventosHome from './componentes/eventoshome/EventosHome';
import { Routes,Route, Link } from 'react-router-dom';
import Calendario from './componentes/calendario/Calendario';
import CalendarioAnual from './componentes/calendario/CalendarioAnual';
import './App.css';
import { EventosContextProvider } from './context/EventosContext';
import ListaEventos from './componentes/eventos/listaEventos/ListaEventos';
import CrearEvento from './componentes/eventos/crearEvento/CrearEvento';
// import EventosContextProvider from './context/EventosContext';

function App() {

  //Elimina localstorage de eventos si la fecha de vencimiento ya expiro

  if (localStorage.getItem('userData')) {
    const datosUsuario = JSON.parse(localStorage.getItem('userData'));
    let fechaValidez = new Date(datosUsuario[2]) //Elemento 2 = FechaHasta
    let fechaHoy = new Date();
    if(fechaValidez <= fechaHoy){
      localStorage.removeItem('userData');
    }
  }

  return (
      <EventosContextProvider>
        <Routes>
          <Route path="/:hash/:user/:fechaHasta" element={<EventosHome nombreUsuario="" nroCuenta="" nombreCuenta=""/>}/>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/CalendarioAnual" element={<CalendarioAnual/>}/>
          {/* <Route path="/listaDeEventos" element={<ListaEventos/>}/> */}
          {/* <Route path="/crearEvento" element={<CrearEvento/>}/> */}
          <Route path="*" element={ 
            <div>
              <h2>Pagina no encontrada</h2>
              <Link to="/">{'<<'}Volver al inicio</Link>
            </div>
          }/>
        </Routes>
      </EventosContextProvider>
  );
}

export default App;
