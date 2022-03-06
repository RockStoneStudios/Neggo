import cerrar from '../../../assets/cerrar.png';
import logon from '../../../assets/nlogo.png';
import ellipse from '../../../assets/ellipse.png';
import '../../../Styles/Recuperar.Module.css';
import '../../../Styles/RecuperaCuenta2.Module.css';


const RecuperaCuenta2 = () => {
  return (
    <div className='container'>
    <img src={cerrar} alt="" className='cerrar' />
    <h1 className='title'>Recupera tu cuenta</h1>
    
    <form className='formula'>
        <label htmlFor="" className='label'>Escribe tu nueva clave de acceso</label>
        <input type="text" className='inputForm' />
        <label htmlFor="" className='label'>Escribe nuevamente tu clave de acceso</label>
        <input type="text" className='inputForm' />

        <button type='submit' className='button'>Recuperar</button>
    </form>
    <div className='logoContainer'>
    <img className='logo' src={logon} alt="" />
    <img className='ellipse' src={ellipse} alt= ""/>
   </div>

</div>
  )
}

export default RecuperaCuenta2