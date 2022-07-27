function SelectorEventos(){
    return (
        <div className="check_container">

          <h6>Buscar por:</h6>
          <label>
            <input type="checkbox" className="filled-in color-cobranzas" checked="checked" id="checkbox_cobranzas" />
            <span>COBRANZAS</span>
          </label>

          <label>
            <input type="checkbox" className="filled-in color-cupos" checked="checked" id="checkbox_cupos" />
            <span>CUPOS OTORGADOS</span>
          </label>        

          <label>
            <input type="checkbox" className="filled-in color-vencimientos" checked="checked" id="checkbox_vencimientos" />
            <span>VENCIMIENTOS</span>
          </label>         

          <label>
            <input type="checkbox" className="filled-in color-futuros" checked="checked" id="checkbox_futuros" />
            <span>FECHAS DE FUTUROS</span>
          </label>      

          <label>
            <input type="checkbox" className="filled-in color-todos" checked="checked" id="checkbox_todos" />
            <span>TODOS</span>
          </label>

      </div>

    )
}

export default SelectorEventos;