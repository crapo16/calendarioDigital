function SelectorEventos(props) {
  const {
    isCheckedCobranza,
    isCheckedCupo,
    isCheckedVencimiento,
    isCheckedFuturo,
    isCheckedTodos,
    handleCheckCobranzas,
    handleCheckCupos,
    handleCheckVencimientos,
    handleCheckFuturos,
    handleCheckTodos,
  } = props;

  return (
    <div className="check_container">
      <h6>Buscar por:</h6>
      <label>
        <input
          type="checkbox"
          className="filled-in color-cobranzas"
          checked={isCheckedCobranza ? true : false}
          id="checkbox_cobranzas"
          onClick={handleCheckCobranzas}
        />
        <span><span className="span-botonera-calendario span-cobranzas">COBRANZAS Y PAGOS</span></span>
      </label>

      <label>
        <input
          type="checkbox"
          className="filled-in color-cupos"
          checked={isCheckedCupo ? true : false}
          id="checkbox_cupos"
          onClick={handleCheckCupos}
        />
        <span><span className="span-botonera-calendario span-cupos">CUPOS OTORGADOS</span></span>

      </label>
      {/* <label>
        <input
          type="checkbox"
          className="filled-in color-vencimientos"
          checked={isCheckedVencimiento ? true : false}
          id="checkbox_vencimientos"
          onClick={handleCheckVencimientos}
        />
        <span><span className="span-botonera-calendario span-vencimientos">VENCIMIENTOS</span></span>
      </label> */}

      <label>
        <input
          type="checkbox"
          className="filled-in color-futuros"
          checked={isCheckedFuturo ? true : false}
          id="checkbox_futuros"
          onClick={handleCheckFuturos}
        />
        <span><span className="span-botonera-calendario span-futuros">FUTUROS Y OPCIONES</span></span>
      </label>

      <label>
        <input
          type="checkbox"
          className="filled-in color-todos"
          checked={isCheckedTodos ? true : false}
          id="checkbox_todos"
          onClick={handleCheckTodos}
        />
        <span><span className="span-botonera-calendario span-todos">TODOS</span></span>
      </label>
    </div>
  );
}

export default SelectorEventos;
