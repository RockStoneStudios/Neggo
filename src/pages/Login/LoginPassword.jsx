import cerrar from '../../assets/cerrar.png';
import logon from '../../assets/nlogo.png';
import ellipse from '../../assets/ellipse.png';
import './login.css';

const LoginPassword = () => {
  return (
    <div className = 'loginContainer'>
        <img className='cerrar' src={cerrar} alt="" />
        <h1 className='loginTitle'>Bienvenido de nuevo Usuario</h1>
        <span className='loginUser'>Password</span>
        <form className = 'loginForm'>
            <input type= 'password' className='inputLogin'/>
            <span className='olvidoLogin1'>Comprobemos que eres tu....</span>
            <div style={{marginTop:'20px',textAlign:'center'}}>No soy un robot</div>
            <button className='buttonLogin'>Ingresar</button>
 
         </form>
         <div className='logoContainer'>
            <img className='logo' src={logon} alt="" />
            <img className='ellipse' src={ellipse} alt= ""/>
       </div>
        </div>
    
  )
}

export default LoginPassword