import reloj from '../../assets/reloj.png';
import telefono from '../../assets/telefono.png';
import gps from '../../assets/gps.png';
import mensaje from '../../assets/mensaje.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import whatsapp from '../../assets/whatsapp.png';

import './footer.css'

const Footer = () => {
  return (
    <div className='containerFooter'>
      <div className='footerContactos'>
          <h2 className='tituloFooter'>Contáctanos</h2>
          <ul>
          <li className='listContactos'>
              <img  className ="logoContactos" src={reloj} alt="" /> 
              <p>Lunes a viernes 6:00am. -10:00pm</p>
          </li>
       
        
          <li className='listContactos'>
              <img  className ="logoContactos" src={gps} alt="" /> <p>Calle 53 #20-22-Medellin-Antioquia</p>
          </li>
          <li className='listContactos'>
              <img className ="logoContactos" src={mensaje} alt="" /> <p>Contacto@neggo.co</p>
          </li>
          <li className='listContactos'>
              <img className ="logoContactos" src={telefono} alt="" /> <p>+57 3508436568</p>
          </li>
          </ul>
      </div>

      <div className='footerEnlaces'>
          <h2>Enlaces</h2>
          <ul className='lista'>
          <li className='listEnlaces'>Inicio</li>
          <li className='listEnlaces'>Educacion Financiera</li>
          <li className='listEnlaces'>Calculadora de metas</li>
          <li className='listEnlaces'>Solicitud de Credito</li>
          <li className='listEnlaces'>Presupuesto</li>
          <li className='listEnlaces'>Blog</li>
          <li className='listEnlaces'>Nosotros</li>
          </ul>
      </div>
      <div className='footerLegal'>
          <h2>Legal</h2>
          <li className='listLegal'>Terminos y condiciones</li>
          <li className='listLegal'>Tratamientos de datos</li>
         <div className='footerRedes'>
           <li> <img src={instagram} alt="" /></li>
           <li> <img src={whatsapp} alt="" /></li>
           <li> <img src={twitter} alt="" /></li>
           <li> <img src={youtube} alt="" /></li>
         </div>
      </div>
    </div>
  )
}

export default Footer