import logo from './logo.svg';
import Bienvenida from './componentes/bienvenida/Bienvenida';
import EventosHome from './componentes/eventoshome/EventosHome';
import { Routes,Route, Link } from 'react-router-dom';
import Calendario from './componentes/calendario/Calendario';
import CalendarioAnual from './componentes/calendario/CalendarioAnual';
import './App.css';

function App() {
  return (

      <Routes>
        <Route path="/" element={<EventosHome nombreUsuario="Roberto Villa" nroCuenta="3990" nombreCuenta="Aceitera Gral. Deheza S.A."/>}/>
        <Route path="/calendario" element={<Calendario/>}/>
        <Route path="/CalendarioAnual" element={<CalendarioAnual/>}/>
        <Route path="*" element={ 
          <div>
            <h2>Pagina no encontrada</h2>
            <Link to="/">{'<<'}Volver al inicio</Link>
          </div>
        }/>
      </Routes>
  );
}

export default App;
