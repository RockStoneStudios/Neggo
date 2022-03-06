
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import cerdito from '../../assets/cerdito.png';
import cerdoA from '../../assets/cerdoA.png';
import tableroA from '../../assets/tableroA.png';
import coheteA from '../../assets/coheteA.png';
import styles from './Ahorro.module.css';


const Ahorro = () => {
  return (
      <>
          <Navbar/>
            <div className={styles.container}>
              <div className={styles.ahorro}>
                  <div className={styles.titulo}>
                    <img src={cerdito} width={40} height={37} alt="...." />
                    <h2>Ahorro</h2>
                  </div>
                  <div className={styles.parrafo}>
                    <p>La falta de ahorro en las personas, las miles de estafas a la hora de invertir
                      en los ultimos años y el acceso a los creditos informaleso "gota a gota" son el resultado
                    </p>
                  </div>
               </div>
               <div className={styles.container_imagenes}>
                 <div className={styles.targetas}>
                    <div className={styles.img1}>
                      <img src={cerdoA} alt="..." />
                      <h2>¿Que es el ahorro?</h2>
                    </div> 
                    <div className={styles.img2}>
                      <img src={coheteA} alt="..." />
                      <h2>Importancia del ahorro</h2>
                    </div> 
                    <div className={styles.img3}>
                      <img src={tableroA} alt="..." />
                      <h2>¿Para que ahorrar?</h2>
                    </div>  
                 </div>
              </div>
              <div className={styles.item_container}>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50} alt="" />
                 <h3>¿Cuanto ahorras?</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50} alt="" />
                 <h3>¿Que es un plan de ahorro?</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50} alt="" />
                 <h3>Plan de ahorro</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50} alt="" />
                 <h3>Como hacer un plan de ahorros</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50}alt="" />
                 <h3>Lorem, ipsum dolor.</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito} width={50} height={50} alt="" />
                 <h3>Lorem, ipsum dolor.</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito}  width={50} height={50} alt="" />
                 <h3>Lorem, ipsum dolor.</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito}  width={50} height={50} alt="" />
                 <h3>Lorem, ipsum dolor.</h3>
               </div>
               <div className={styles.item}>
                 <img src={cerdito}  width={50} height={50} alt="" />
                 <h3>Lorem, ipsum dolor.</h3>
               </div>
              </div>
            </div>
          <Footer/>
      </>
  )
}

export default Ahorro;