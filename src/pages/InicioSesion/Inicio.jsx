import styles from  './Inicio.module.css';
import cerrar from '../../assets/cerrar.png';

const Inicio = () => {
  return (
    <div className={styles.container}>
      <img src={cerrar} className= {styles.cerrar} alt="" />
     <h1>Inicia sesion o crea tu cuenta</h1>
     <div className={styles.inicio_botones}>
         <button className={styles.inicio}>Inicia sesion</button>
         <button className={styles.crea}>Crea tu cuenta</button>
     </div>
    </div>
  )
}

export default Inicio;