function Botonera() {
  return (
    <div className="botonera" id="botonera">
      <div>
        <div className="chip c-cobranzas">COBRANZAS</div>
        <div className="chip c-cupos">CUPOS OTORGADOS</div>
        <div className="chip c-vencimientos">VENCIMIENTOS</div>
        <div className="chip c-futuros">FUTUROS Y OPCIONES</div>
        <div className="chip c-eventos">EVENTOS</div>
        <div className="chip c-todos active">TODOS</div>
      </div>
      <div>
        <div className="btn waves-effect indigo lighten-5 color-primary">
          <i className="material-icons left">today</i>
          VER CALENDARIO
        </div>
      </div>
    </div>
  );
}

export default Botonera;
