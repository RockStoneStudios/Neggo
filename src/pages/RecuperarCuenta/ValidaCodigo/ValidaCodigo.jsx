import cerrar from '../../../assets/cerrar.png';
import logon from '../../../assets/nlogo.png';
import ellipse from '../../../assets/ellipse.png';
import '../../../Styles/Recuperar.Module.css';


const ValidaCodigo = () => {
  return (
    <div className='container'>
    <img src={cerrar} alt="" className='cerrar' />
    <h1 className='title'>Recupera tu cuenta</h1>
    <span className='subtitule'>Valida el codigo que te hemos enviado</span>
    <form className='form'>
        <input type="text" className='inputForm' />
        <button type='submit' className='button'>Siguiente</button>
    </form>
    <div className='logoContainer'>
    <img className='logo' src={logon} alt="" />
    <img className='ellipse' src={ellipse} alt= ""/>
   </div>

</div>
  )
}

export default ValidaCodigo