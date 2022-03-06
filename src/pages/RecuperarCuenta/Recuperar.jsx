import cerrar from '../../assets/cerrar.png';
import '../../Styles/Recuperar.Module.css'
import logon from '../../assets/nlogo.png';
import ellipse from '../../assets/ellipse.png';

const Recuperar = () => {
  return (
    <div className='container'>
      <img className = "cerrar" src={cerrar} alt="" />
       <h1 className='title'>Recupera Tu cuenta</h1>
       <span className='subtitule'>Escribe tu numero de celular o correo electronico</span>
       <form className='form'>
           <input type="text" className = 'inputForm' />
           <button type='submit' className='button'>Recuperar</button>
       </form>
       <div className='logoContainer'>
        <img className='logo' src={logon} alt="" />
        <img className='ellipse' src={ellipse} alt= ""/>
       </div>
    </div>
  )
}

export default Recuperar