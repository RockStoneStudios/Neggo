
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import alcancia from '../../assets/alcancia.png';
import diaAhorro from '../../assets/diaAhorro.png';
import millonarios from '../../assets/millonarios.png';
import negar from '../../assets/negarPlanta.png';
import styles from './Educacion.module.css';

const Educacion = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
        <div className={styles.imagen}>
         <img src={alcancia} alt=".." width={1350} height={180}/>
        </div>
        
            <div className={styles.texto_titulo}>
                 <div className={styles.titulo}>
                 <h1>Educación financiera una tarea pendiente.</h1>
                </div>
                <div className={styles.parrafo_titulo}>
                    <h3>Ricardo Cortes Gaviria, CFO & Co-funder Neggo</h3>
                    <p>21 de marzo -2021</p>
                </div>
            </div>
          <div className={styles.texto_principal}>
             <p className={styles.parrafo_principal}>
             La falta de ahorro en las personas, las miles de estafas a la hora de invertir en los últimos años   y el acceso a los créditos formales o “gota a gota” son el resultado que en Colombia nos hace falta Educación Financiera. Para muchos será fácil decir que la educación financiera es algo que debe ser incluida en el sistema educativo (sin importar si es educación pública o privada), y debería ser así. Ero la responsabilidad de nuestra educación y la de nuestros hijos, corresponde también a las acciones que desarrollemos para cambiar esta realidad.
            </p>
            <p className={styles.parrafo_principal}>
              En redes sociales vemos frases de motivación, pequeños concejos, publicidad y mucho mas sobre el tema financiero. Pero ¿que tanto nos enseña sobre Educación financiera? Bueno, responder esta pregunta en un articulo es ignorar que este tema es algo amplio, como también, tiene mucho que ver con nuestra forma de vivir y la que queremos dejar a nuestros hijos.
            </p>
            <p  className={styles.parrafo_principal}>
             La educación financiera tiene varios significados, pero a modo general es el desarrollo e habilidades y actitudes como el aumento del conocimiento referente a los temas financieros y económicos que afectan nuestros recursos. Aplicar los principios de las finanzas y la economía en la gestión de los recursos propios y familiares, se le conoce como finanzas personales 
            </p>
            <p  className={styles.parrafo_principal}>
             La Compresión de conceptos y productos financieros como el manejo de dinero, las deudas y las inversiones, son resultados que genera en nuestra vida contar con Educación Financieras y Económica. La importancia de tener presente lo anterior en nuestro día a día, nos ayudara a tomar mejores y acertadas decisiones que se verán reflejadas en nuestro patrimonio.
            </p>
            <p className={styles.parrafo_principal}>
              Ahora que tenemos algo claro de cual es el significado, podemos hablar de algunos conceptos, que, aunque muchos los conocemos, otros los hemos escuchado, la mayoría no se practican. Es una invitación para ti, que después de leer este artículo, realices un análisis interno y muy consciente de como estamos administrando nuestros recursos, y que otra persona la pueda conocer
            </p>
            </div>
      
        <div className={styles.targetas}>
            <h1 style={{color : "#004B72",textAlign :'start', margin : '40px 300px'}}>Tambien te puede interesar</h1>
            <div className={styles.container_imagenes}>
              <div className={styles.img1}>
                  <img src={diaAhorro} alt="..." />
                 <h3 style={{color : "#004B72" ,fontSize :14, textAlign:'center'}}>Dia mundial del ahorro</h3>
              </div>
              <div className={styles.img1}>
                  <img src={negar} alt="..." />
                  <h3 style={{color : "#004B72" ,fontSize :14, textAlign:'center'}}>Una cita con el dínero</h3>
              </div>
              <div className={styles.img1}>
                  <img src={millonarios} alt="..." />
                  <h3 style={{color : "#004B72" ,fontSize :14, textAlign:'center'}}>Pagos con QR</h3>
              </div>
            </div>
            <button className={styles.btn}>
                Ver más...
            </button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Educacion