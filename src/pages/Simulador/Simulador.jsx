import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from './Simulador.module.css';
import Neggo from '../../assets/neggoU.png';
import Grafico from '../../assets/grafico.png';
import Grafico1 from '../../assets/grafico2.png';
import Funcion from '../../assets/funcion.png';
const Simulador = () => {
  return (
    <>
      <Navbar/>
       <div className={styles.container}>
           <div className={styles.tv_info}>
               <div className={styles.titulo}></div>
           <h1>Simulador de Metas</h1>
              <div className={styles.container_tv}>
                <div className={styles.marco_tv}>
                    <div className={styles.pantalla}>
                    <img className={styles.logo} src={Neggo} alt="" />
                    <img className={styles.grafico} src={Grafico} alt="" />
                    <img className={styles.grafico1} src={Grafico1} alt="" />
                    <img   className={styles.funcion} src={Funcion} alt="" />
                   <div className={styles.abajo}>
                       <div className={styles.punto}>
                           
                        </div>
                  </div>
                </div>    
                </div>
            </div>
              <div className={styles.texto}>
              <p>No importa si eres un estudiante,ama de casa, secretaria,deportista o hasta
                    empresario, todos los dias tenemos que hacer uso del dinero. Pero
                    ¿Sabemos ahorrar? ¿Por qué debemos invertir? o 
                    ¿Como puedo gastar inteligentemente y ganar dinero?
                </p>

                <p><span>Neggo</span>, la primera empresa dedicada a la Educación Financiera y Económica de las personas en Colombia</p>
             </div>

           </div>
       </div>

    </>
  )
}

export default Simulador;