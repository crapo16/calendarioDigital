import { Link } from "react-router-dom";

function Botonera({visibilidad,manejarEvento}) {

  
  return (
    <div className="botonera" id="botonera">
      <div>
        <div className={visibilidad['cobranza']?"chip c-cobranzas active":"chip c-cobranzas"} onClick={manejarEvento('cobranza')} >COBRANZAS</div>
        <div className={visibilidad['cupos']?"chip c-cupos active":"chip c-cupos"}>CUPOS OTORGADOS</div>
        <div className={visibilidad['futuros']?"chip c-vencimientos active":"chip c-vencimientos"}>VENCIMIENTOS</div>
        <div className={visibilidad['vencimientos']?"chip c-futuros active":"chip c-futuros"}>FUTUROS Y OPCIONES</div>
        <div className={visibilidad['eventosZeni']?"chip c-eventos active":"chip c-eventos"}>EVENTOS</div>
        <div className={visibilidad['todos']?"chip c-todos active active":"chip c-todos active"}>TODOS</div>
      </div>
      <div>
        <Link to={'/calendario'}>       
          <div className="btn waves-effect indigo lighten-5 color-primary">
            <i className="material-icons left">today</i>
            VER CALENDARIO
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Botonera;
