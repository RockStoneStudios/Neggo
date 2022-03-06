import logon from '../../assets/nlogo.png';
import ellipse from '../../assets/ellipse.png';
import cerrar from '../../assets/cerrar.png';
import styles from './Login.module.css';

const InicioSesion = () => {
  return (
    <div className={styles.loginContainer}>
       <img className = {styles.cerrar} src={cerrar} alt="" />
        <h1 className={styles.loginTitle}>Bienvenido de nuevo</h1>
        <span className={styles.loginUser}>Usuario</span>
        <form className={styles.loginForm}>
          <input className={styles.inputLogin} type="text" />
          <span className={styles.olvidoLogin}>Olvide mi usuario/contraseña</span>
          <button className={styles.buttonLogin}>Siguiente</button>
        </form>
       <div className={styles.logoContainer}>
        <img className={styles.logo} src={logon} alt="" />
        <img className= {styles.ellipse} src={ellipse} alt= ""/>
       </div>
    </div>
  )
}

export default InicioSesion