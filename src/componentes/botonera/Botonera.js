function Botonera() {
  return (
    <div className="botonera" id="botonera">
      <div>
        <div class="chip c-cobranzas">COBRANZAS</div>
        <div class="chip c-cupos">CUPOS OTORGADOS</div>
        <div class="chip c-vencimientos">VENCIMIENTOS</div>
        <div class="chip c-futuros">FUTUROS Y OPCIONES</div>
        <div class="chip c-eventos">EVENTOS</div>
        <div class="chip c-todos active">TODOS</div>
      </div>
      <div>
        <div class="btn waves-effect indigo lighten-5 color-primary">
          <i class="material-icons left">today</i>
          VER CALENDARIO
        </div>
      </div>
    </div>
  );
}

export default Botonera;
