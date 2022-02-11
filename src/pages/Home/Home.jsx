import './home.css'
import Navbar from '../../components/navbar/Navbar';
import señora from '../../assets/señora.png';
import path1 from '../../assets/path1.png';
import path2 from '../../assets/path2.png';
import path3 from '../../assets/path3.png';
import targeta from '../../assets/targeta.png';
import salario from '../../assets/salario.png';
import bus from '../../assets/bus.png';
import dolar from '../../assets/dolar.png';
import euro from '../../assets/euro.png';
import log from '../../assets/log.png';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
      <>
          <Navbar/>
          <div className='container'>
              <div className='info'>
                <h2 className='infoTitle'>Somos la empresa digital mas humana.</h2>
                <p className='infoParrafo'>Queremos que seas parte del sector financiero y que tomes todo el control</p>
                 <button className='infoButton'>Unete a nosotros</button>
              </div>
              <div className='infoImage'>
               <img src= {señora} alt="" />
              </div>

          </div>
        
        <div className='infoPathPadre'>

      
          <div className='infoPath'>
              <h1 className='titlePath'>Herramientas Financieras</h1>
                <div className='infoPath1'>

                    <img className='infoPathIcon' src={path1} alt= ''/>
                  
                    <h2 className='tituloPath'>Credito</h2>
                    <p className='parrafoPath'>Pronto Podras Solicitar tu Credito en nuestra plataforma, estamos trabajando para ti</p>

                </div>
                <div className='infoPath2'>
              
                   <img className='infoPathIcon' src={path3} alt= ''/>
                
                    <h2  className='tituloPath'>Simulador de metas</h2>
                    <p className='parrafoPath'>Calcula cuanto debes ahorrar, para alcanzar eso que tanto quieres</p>
                    <button className='buttonPath'>Inicia aqui</button>
                </div>
                <div className='infoPath3'>
              
                   <img className='infoPathIcon' src={path2} alt= ''/>
                    <h2  className='tituloPath'>Presupuesto</h2>
                    <p className='parrafoPath'>Calcula cuanto debes ahorrar, para alcanzar eso que tanto quieres</p>
                    <button className='buttonPath'>Inicia aqui</button>
                </div>
                
             </div>
             </div>
            <div className='invitacion'>
                <div className='invitacionImage'>
                 <img className='imagenTargeta' src={targeta} alt="" />
                </div>
                <div className='invitacionInfo'>
                    <h1 className='invitacionTitle'>Una cita con el dinero!</h1>
                    <p className='invitacionParrafo'>No importa si eres un estudiante,ama de casa, secretaria,deportista o hasta empresario
                        todos los dias tenemos que hcaer uso del dinero, Pero ¿Sabemos ahorrar? ¿Por que debemos invertir?
                        o ¿Cómo puedo gastar inteligentemente y ganar dinero?
                    </p>
                    <p className='invitacionParrafo2'><span className='invitacionNombre'>Neggo</span> la primera empresa dedicada a la Educacion Financiera y Economica de las personas en Colombia</p>
                </div>
                
            </div>

            <div className='indicadores'>
              <div className="indicadoresTitle">
                  <h2>Indicadores Economicos</h2>
              </div>
              <div className='indicadoresItem'>
                  <div className='item'>
                      <img src={salario} alt =""/>
                      <p className='infoItem'>Salario minimo:<span > 1'000.000</span></p>
                  </div>
                  <div className='item'>
                      <img src={bus} alt =""/>
                      <p className='infoItem'>Auxilio de transporte: <span>117.000</span></p>
                  </div>
                  <div className='item'>
                      <img src={dolar} alt =""/>
                      <p className='infoItem'>Dolar:<span> 3950</span></p>
                  </div>
                  <div className='item'>
                      <img src={euro} alt =""/>
                      <p className='infoItem'>Euro: <span>4500</span></p>
                  </div>
              </div>
            </div>
            <div className='containerFormulario'>
            <div className='formulario'>
               <div className='sombraForm'>
               <form  className= "formI">
                    <h1>En que te gustaria que te ayudaramos</h1>
                    <div className='inputNombre'>
                        <label htmlFor='inputNombre'>Nombres completos</label>
                        <input  className = 'inputText' type='text' id='inputNombre'/>
                    </div>
                     <div className='correoTel'>
                      
                    <div className='inputCorreo'>
                       <label htmlFor="inputCorreo">Correo</label>
                       <input  className = 'inputText' type='email' id='inputCorreo'/>
                    </div>
                    <div className='inputTelefono'>
                    <label htmlFor="inputTelefono">Teléfono</label>
                    <input className = 'inputText'  type="tel" id='inputTelefono' />
                    </div>
                     </div>
                    
                    <textarea className ='inputTextArea'></textarea>
                 <button className='buttonForm'>Enviar</button>
                </form>
               </div>
                <div className="logoGeneral">
                <div className='logoSuper '>
                 
                   <div className="cuadroAzulClaro"></div>
                  <div className='logoSuperior'>

                  <img  src={log} alt = ""/>
                  </div>
                  
                </div>
                </div>
               
              </div>
                 <div className='containerBottom'></div>  
            </div>
          <Footer/>
         
      </>
  )
};

export default Home;
