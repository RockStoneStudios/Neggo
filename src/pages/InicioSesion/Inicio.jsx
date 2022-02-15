import './inicio.css';
import cerrar from '../../assets/cerrar.png';

const Inicio = () => {
  return (
    <div className='container'>
      <img src={cerrar} className= "cerrar" alt="" />
     <h1>Inicia sesion o crea tu cuenta</h1>
     <div className='inicio-botones'>
         <button className='inicio'>Inicia sesion</button>
         <button className='crea'>Crea tu cuenta</button>
     </div>
    </div>
  )
}

export default Inicio