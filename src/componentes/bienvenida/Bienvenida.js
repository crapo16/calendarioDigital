import './Bienvenida.css';


function Bienvenida({nombreUsuario, nroCuenta, nombreCuenta}){
    return (
        <div>
            Buen día {nombreUsuario}
            {nroCuenta}, {nombreCuenta}
        </div>
    )
}

export default Bienvenida;