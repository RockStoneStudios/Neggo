import logon from '../../assets/nlogo.png';
import ellipse from '../../assets/ellipse.png';
import cerrar from '../../assets/cerrar.png';
import './login.css';

const InicioSesion = () => {
  return (
    <div className='loginContainer'>
       <img className = "cerrar" src={cerrar} alt="" />
        <h1 className='loginTitle'>Bienvenido de nuevo</h1>
        <span className='logingUser'>Usuario</span>
        <form className='loginForm'>
          <input className='inputLogin' type="text" />
          <span className='olvidoLogin'>Olvide mi usuario/contraseña</span>
          <button className='buttonLogin'>Siguiente</button>
        </form>
       <div className='logoContainer'>
        <img className='logo' src={logon} alt="" />
        <img className='ellipse' src={ellipse} alt= ""/>
       </div>
    </div>
  )
}

export default InicioSesion