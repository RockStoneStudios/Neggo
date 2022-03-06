import cerrar from '../../assets/cerrar.png';
import logon from '../../assets/nlogo.png';
import ellipse from '../../assets/ellipse.png';
import styles from './Login.module.css';

const LoginPassword = () => {
  return (
    <div className = {styles.loginContainer}>
        <img className= {styles.cerrar} src={cerrar} alt="" />
        <h1 className={styles.loginTitle}>Bienvenido de nuevo Usuario</h1>
        <span className={styles.loginUser}>Password</span>
        <form className = {styles.loginForm}>
            <input type= 'password' className={styles.inputLogin}/>
            <span className={styles.olvidoLogin1}>Comprobemos que eres tu....</span>
            <div style={{marginTop:'20px',textAlign:'center'}}>No soy un robot</div>
            <button className={styles.buttonLogin}>Ingresar</button>
 
         </form>
         <div className={styles.logoContainer}>
            <img className= {styles.logo} src={logon} alt="" />
            <img className={styles.ellipse} src={ellipse} alt= ""/>
       </div>
        </div>
    
  )
}

export default LoginPassword