import  styles from  './Home.module.css';
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
          <div className={styles.container}>
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>Somos la empresa digital mas humana.</h2>
                <p className={styles.infoParrafo}>Queremos que seas parte del sector financiero y que tomes todo el control</p>
                 <button className={styles.infoButton}>Unete a nosotros</button>
              </div>
              <div className='infoImage'>
               <img src= {señora} alt="" />
              </div>

          </div>
        
        <div className={styles.infoPathPadre}>

      
          <div className={styles.infoPath}>
              <h1 className={styles.titlePath}>Herramientas Financieras</h1>
                <div className={styles.infoPath1}>

                    <img className={styles.infoPathIcon} src={path1} alt= ''/>
                  
                    <h2 className={styles.tituloPath}>Credito</h2>
                    <p className={styles.parrafoPath}>Pronto Podras Solicitar tu Credito en nuestra plataforma, estamos trabajando para ti</p>

                </div>
                <div className={styles.infoPath2}>
              
                   <img className={styles.infoPathIcon} src={path3} alt= ''/>
                
                    <h2  className={styles.tituloPath}>Simulador de metas</h2>
                    <p className={styles.parrafoPath}>Calcula cuanto debes ahorrar, para alcanzar eso que tanto quieres</p>
                    <button className={styles.buttonPath}>Inicia aqui</button>
                </div>
                <div className={styles.infoPath3}>
              
                   <img className={styles.infoPathIcon} src={path2} alt= ''/>
                    <h2 className={styles.tituloPath}>Presupuesto</h2>
                    <p className={styles.parrafoPath}>Calcula cuanto debes ahorrar, para alcanzar eso que tanto quieres</p>
                    <button  className={styles.buttonPath}>Inicia aqui</button>
                </div>
                
             </div>
             </div>
            <div className={styles.invitacion}>
                <div className={styles.invitacionImage}>
                 <img className={styles.imagenTargeta} src={targeta} alt="" />
                </div>
                <div className={styles.invitacionInfo}>
                    <h1 className={styles.invitacionTitle}>Una cita con el dinero!</h1>
                    <p className={styles.invitacionParrafo}>No importa si eres un estudiante,ama de casa, secretaria,deportista o hasta empresario
                        todos los dias tenemos que hcaer uso del dinero, Pero ¿Sabemos ahorrar? ¿Por que debemos invertir?
                        o ¿Cómo puedo gastar inteligentemente y ganar dinero?
                    </p>
                    <p className={styles.invitacionParrafo2}><span className={styles.invitacionNombre}>Neggo</span> la primera empresa dedicada a la Educacion Financiera y Economica de las personas en Colombia</p>
                </div>
                
            </div>

            <div className={styles.indicadores}>
              <div className={styles.indicadoresTitle}>
                  <h2>Indicadores Economicos</h2>
              </div>
              <div className={styles.indicadoresItem}>
                  <div className={styles.item}>
                      <img src={salario} alt =""/>
                      <p className={styles.infoItem}>Salario minimo:<span > 1'000.000</span></p>
                  </div>
                  <div className={styles.item}>
                      <img src={bus} alt =""/>
                      <p className={styles.infoItem}>Auxilio de transporte: <span>117.000</span></p>
                  </div>
                  <div className={styles.item}>
                      <img src={dolar} alt =""/>
                      <p className={styles.infoItem}>Dolar:<span> 3950</span></p>
                  </div>
                  <div className={styles.item}>
                      <img src={euro} alt =""/>
                      <p className={styles.infoItem}>Euro: <span>4500</span></p>
                  </div>
              </div>
            </div>
            <div className={styles.containerFormulario}>
            <div className={styles.formulario}>
               <div className={styles.sombraForm}>
               <form  className= {styles.formI}>
                    <h1>En que te gustaria que te ayudaramos</h1>
                    <div className={styles.inputNombre}>
                        <label htmlFor='inputNombre'>Nombres completos</label>
                        <input  className = {styles.inputText} type='text' id='inputNombre'/>
                    </div>
                     <div className={styles.correoTel}>
                      
                    <div className={styles.inputCorreo}>
                       <label htmlFor="inputCorreo">Correo</label>
                       <input  className = {styles.inputText} type='email' id='inputCorreo'/>
                    </div>
                    <div className={styles.inputTelefono}>
                    <label htmlFor="inputTelefono">Teléfono</label>
                    <input className = {styles.inputText}  type="tel" id='inputTelefono' />
                    </div>
                     </div>
                    
                    <textarea className ={styles.inputTextArea}></textarea>
                 <button className={styles.buttonForm}>Enviar</button>
                </form>
               </div>
                <div className={styles.logoGeneral}>
                <div className={styles.logoSuper }>
                 
                   <div className={styles.cuadroAzulClaro}></div>
                  <div className={styles.logoSuperior}>

                  <img  src={log} alt = ""/>
                  </div>
                  
                </div>
                </div>
               
              </div>
                 <div className={styles.containerBottom}></div>  
            </div>
          <Footer/>
         
      </>
  )
};

export default Home;
