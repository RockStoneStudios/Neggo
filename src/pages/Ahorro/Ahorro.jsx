
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import cerdito from '../../assets/cerdito.png';
import cerdoA from '../../assets/cerdoA.png';
import tableroA from '../../assets/tableroA.png';
import coheteA from '../../assets/coheteA.png';
import styles from './Ahorro.module.css';
import Cerrar from '../../assets/cerrar1.png';
import ArrowDerecha from '../../assets/arrowDerecha.png';
import ArrowIzquierda from '../../assets/arrowIzquierda.png';
import {useState} from 'react';



const Ahorro = () => {
 const [slider,setSlider] = useState(false);
 const [index,setIndex] = useState(0);

 const handleIndex = (direction)=>{
  if(direction==="1"){
      setIndex(index!==0 ? index-1 : 2)
  }
  if(direction==="r"){
      setIndex(index!==2 ? index+1 : 0)
  }

}


  return (
      <>
          <Navbar/>
            <div className={slider ? [styles.container, styles.sliderActive].join(' ') : styles.container}>
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
                    <div className={styles.img1} onClick={()=>setSlider(!slider)}>
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
             {
               slider && (
                 <>
              <div className={styles.wrapper} style={{transform:`translateX(${-35*index}vw)`}}>
              <div className={styles.slider_wrapper}>
              <div className={styles.slider}>
                  <h1>¿Que es el Ahorro?</h1>
                    <p>El ahorro es la destinacion de una porcion de 
                      los recursos económicos que se recibe (como salario,mesada,pension,entre otros nombres)
                      para cumplir una meta en el futuro.Ahorrar tambien es la accion de no 
                      derrochar el dinero en cosas innecesarias
                    </p>
                 </div>
                </div>    
              <div className={styles.slider_wrapper}>
                <div className={styles.slider}>
                  <h1>¿Que ?</h1>
                    <p>El ahorro es la destinacion de una porcion de 
                      los recursos económicos que se recibe (como salario,mesada,pension,entre otros nombres)
                      para cumplir una meta en el futuro.Ahorrar tambien es la accion de no 
                      derrochar el dinero en cosas innecesarias
                    </p>
                 </div>
                </div>
                <div className={styles.slider_wrapper}>
                <div className={styles.slider}>
                  <h1>¿Que ?</h1>
                    <p>El ahorro es la destinacion de una porcion de 
                      los recursos económicos que se recibe (como salario,mesada,pension,entre otros nombres)
                      para cumplir una meta en el futuro.Ahorrar tambien es la accion de no 
                      derrochar el dinero en cosas innecesarias
                    </p>
                 </div>
                </div>
                
               
              
              </div>
              <div className={styles.flechas}>
                   <img className={styles.izq} src={ArrowIzquierda} alt="" onClick={()=>handleIndex("1")} />
                   <img  className={styles.cerrar}  src={Cerrar} alt=""  onClick={()=>setSlider(!slider)}/>
                   <img  className={styles.derecha}  src={ArrowDerecha} alt="" onClick={()=>handleIndex("r")}/>
                </div>
              </>
               )
             }
            

          <Footer/>
      </>
  )
}

export default Ahorro;