import logo from './logo.svg';
import Bienvenida from './componentes/bienvenida/Bienvenida';
import EventosHome from './componentes/eventoshome/EventosHome';
import CobranzasHome from './componentes/cobranzas/home/CobranzasHome';
import CuposHome from './componentes/cupos/home/CuposHome';
import VencimientosHome from './componentes/vencimientos/home/VencimientosHome';
import FuturosHome from './componentes/futuros/home/FuturosHome';
import EventosZeniHome from './componentes/eventosZeni/home/EventosZeniHome';
import Botonera from './componentes/botonera/Botonera';
import './App.css';

function App() {
  return (
    <div>
      <Bienvenida nombreUsuario="Roberto Villa" nroCuenta="3990" nombreCuenta="Aceitera Gral. Deheza S.A."/>
      <EventosHome/>
      <Botonera/>
      <div className='row'>
      <CobranzasHome/>
      <CuposHome/>
      <VencimientosHome/>
      <FuturosHome/>
      <EventosZeniHome/>
      </div>

    </div>
  );
}

export default App;
