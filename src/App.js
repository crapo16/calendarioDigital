import logo from './logo.svg';
import Bienvenida from './componentes/bienvenida/Bienvenida';
import EventosHome from './componentes/eventoshome/EventosHome';

import './App.css';

function App() {
  return (
    <div>
      <Bienvenida nombreUsuario="Roberto Villa" nroCuenta="3990" nombreCuenta="Aceitera Gral. Deheza S.A."/>
      <EventosHome/>
      

    </div>
  );
}

export default App;
