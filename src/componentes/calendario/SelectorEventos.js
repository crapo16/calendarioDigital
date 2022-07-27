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
        <span>COBRANZAS</span>
      </label>

      <label>
        <input
          type="checkbox"
          className="filled-in color-cupos"
          checked={isCheckedCupo ? true : false}
          id="checkbox_cupos"
          onClick={handleCheckCupos}
        />
        <span>CUPOS OTORGADOS</span>
      </label>
      <label>
        <input
          type="checkbox"
          className="filled-in color-vencimientos"
          checked={isCheckedVencimiento ? true : false}
          id="checkbox_vencimientos"
          onClick={handleCheckVencimientos}
        />
        <span>VENCIMIENTOS</span>
      </label>

      <label>
        <input
          type="checkbox"
          className="filled-in color-futuros"
          checked={isCheckedFuturo ? true : false}
          id="checkbox_futuros"
          onClick={handleCheckFuturos}
        />
        <span>FECHAS DE FUTUROS</span>
      </label>

      <label>
        <input
          type="checkbox"
          className="filled-in color-todos"
          checked={isCheckedTodos ? true : false}
          id="checkbox_todos"
          onClick={handleCheckTodos}
        />
        <span>TODOS</span>
      </label>
    </div>
  );
}

export default SelectorEventos;
