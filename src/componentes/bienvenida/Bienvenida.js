import './Bienvenida.css';


function Bienvenida({nombreUsuario, nroCuenta, nombreCuenta}){
    return (
        <div className='user-container section'>
            <h4> Buen día {nombreUsuario}</h4>
            <h5> Cuenta {nroCuenta}, {nombreCuenta}</h5>
        </div>
    )
}

export default Bienvenida;