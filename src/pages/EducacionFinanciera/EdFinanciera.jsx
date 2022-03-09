import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import styles from './Financiera.module.css';
import Targeta from '../../assets/itemTargeta.png';
import Cerdo from '../../assets/cerdoItem.png';
import Escudo1 from '../../assets/escudo1Item.png';
import Escudo from '../../assets/escudoItem.png';
import Casa from '../../assets/casitaItem.png';
import Estadistica from  '../../assets/estadisticaItem.png';
import Nike from '../../assets/nikeItem.png';
import Arbol from '../../assets/arbolItem.png';
import Book from '../../assets/bookItem.png';
import Pluma from '../../assets/plumaItem.png';
import Libro from '../../assets/libro.png';
import Binocular from '../../assets/binocular.png';
import Megafono from '../../assets/megafono.png';
import  Statics from '../../assets/polygon31258.png';
import Pentagram from '../../assets/rect31250.png';



const EdFinanciera = () => {
  return (
      <>
      <Navbar/>
    <div className={styles.container}>
      <div className={styles.financiera}>
         <div className={styles.img}>
         <h2>Imagen</h2>
         </div>
         <div className={styles.edFinanciera}>
              <h2>Educacion Financiera</h2>
              <h3>Ricardo Cortés Gaviria,CFO & Co-funder Neggo</h3>
              <p>La falta de ahorro en las personas, las miles de estafas a la hora de invertir en los ultimos años y el acceso a los creditos informales o "gota a gota" son el resultado que en Colombia</p>
         </div>
      </div>
      <div className={styles.categorias}>
         <div className= {styles.contenedorCat}>
          <h1>Categorias</h1>
           <div className={styles.listCat}>
               <div className={styles.item}>
                    <img src={Targeta}  alt="" />
                    <h4>Cuentas Bancarias</h4>  
              </div>
              <div className={styles.item1}>
                    <img src={Targeta}  alt="" />
                    <h4>Tipos Financieros</h4>  
              </div>
              <div className={styles.item2}>
                    <img src={Cerdo}  alt="" />
                    <h4>Ahorra</h4>  
              </div>
              <div className={styles.item3}>
                    <img src={Estadistica}  alt="" />
                    <h4>Inversion</h4>  
              </div>
              <div className={styles.item4}>
                    <img src={Arbol}  alt="" />
                    <h4>Pensiones</h4>  
              </div>
              <div className={styles.item5}>
                    <img src={Pluma}  alt="" />
                    <h4>Planeacion Financiera</h4>  
              </div>
              <div className={styles.item6}>
                    <img src={Escudo1}  alt="" />
                    <h4>Riesgo & Seguridad</h4>  
              </div>
              <div className={styles.item7}>
                    <img src={Casa}  alt="" />
                    <h4>Servicios Bancarios</h4>  
              </div>
              <div className={styles.item8}>
                    <img src={Escudo}  alt="" />
                    <h4>Seguros</h4>  
              </div>
              <div className={styles.item9}>
                    <img src={Book}  alt="" />
                    <h4>Glosarios</h4>  
              </div>
            </div>
         </div>
      </div>
      <div className={styles.recomendado}>
         <h1>Recomendado</h1>    
         <div className={styles.articulos}>
            <div className={styles.articulo}>
             <img src={Libro} alt="" />
             <div className={styles.descripcion}>
                   <h4>Articulo</h4>
                   <h5>El <span className={styles.negrita}>ABC</span> de las finanzas</h5>
                   <p>La falta de ahorro en las personas, las miles de estafas a la hora de invertir</p>
             </div>
            </div>
            <div  className={styles.articulo}>
             <img src={Binocular} alt="" />
             <div className={styles.descripcion}>
                   <h4>Articulo</h4>
                   <h5>El <span className={styles.negrita}>ABC</span> de las finanzas</h5>
                   <p>La falta de ahorro en las personas, las miles de estafas a la hora de invertir</p>
             </div>
            </div>
            <div  className={styles.articulo}>
             <img src={Megafono} alt="" />
             <div className={styles.descripcion}>
                   <h4>Articulo</h4>
                   <h5>El <span className={styles.negrita}>ABC</span> de las finanzas</h5>
                   <p>La falta de ahorro en las personas, las miles de estafas a la hora de invertir 
                   </p>
             </div>
            </div>
         </div>
      </div>
      <div className={styles.abc}>
         <div className={styles.texto_abc}>
            <h1>El <span className={styles.negrita}>ABC</span> de las finanzas</h1> 
            <p>La falta de ahorro en las personas, las miles de estafas  en los ultimos años y el acceso a los créditos informales o "gota a gota" son el resultado de que en colombia nos
                hace falta Educación Financiera. Para muchos sera facil decir que la Educacion Financiera es algo que debe ser incluida en el sistema educativo( sin importar si es educación pública o privada) </p>    
         </div>
         <div className={styles.imagen_abc}>
             <div className={styles.tablero}>
                <img className={styles.stats} src={Statics} alt="" /> 
                <img className={styles.pent} src={Pentagram} alt="" />
                <img className={styles.pent} src={Pentagram} alt="" />
                <img className={styles.pent} src={Pentagram} alt="" />
                <img className={styles.pent} src={Pentagram} alt="" />
             </div>
         </div>

        </div>
    </div>
    </>
  )
}

export default EdFinanciera