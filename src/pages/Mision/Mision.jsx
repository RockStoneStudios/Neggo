import styles from './Mision.module.css';
import mision from '../../assets/mision.png';
import vision from '../../assets/vision.png';
import jeison from '../../assets/jeison.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Mision = () => {
  return (
    <>
      <Navbar/>
     <div className={styles.mision_container}>
       <div className={styles.contenido_principal}>
           <div className={styles.imagenes_container}>
                <img src={mision} alt="" />
                <img src={vision} alt="" />
            </div>
            <div className={styles.intermedio}></div>
            <div className={styles.contenedor_texto}>
            <div className={styles.texto_container}>
                <h2 className={styles.historia}>Historia</h2>
                 <div className={styles.container_parrafo}>
                    <p className={styles.texto_historia}>
                        En el año 2018, nace en medellin con la idea de llevar productos y servicios financieros personalizados que faciliten la administarcion de nuestro dinero. A su vez comienza el trabajo por crear un lugar donde la educacion financiera sea un pilar fundamental para la inclucion financiera de America Latina.
                    </p>
                 </div>
            </div>
            <div className={styles.texto_container}>
                <h2 className={styles.historia}>Mision</h2>
                <div className={styles.container_parrafo}>
                    <p className={styles.texto_historia}>
                        Neggo es una organizacion que usa la tecnologia para desarrollar productos y servicios financieros creando un valor en la educacion e inclusion financiera en latinoamerica. Buscamos acercar las personas al sector financiero creando un canal donde nosotros tomemos el control de nuestro dinero.
                    </p>
                </div>
            </div>
            <div className={styles.texto_container}>
                <h2 className={styles.historia}>Vision</h2>
                <div className={styles.container_parrafo}>
                <p className={styles.texto_historia}>
                    Para el año 2022, seremos un emprendimiento colombiano en crecimiento continuo creando soluciones en productos y servicios financieros para la poblacion latina mediante el uso de la tecnologia. Nuestros valores : Transparencia , Lealtad, Gratitud , Empatia 
                </p>
                </div>
            </div>
            </div>
       </div>

     <div className={styles.familia}>
       <div className={styles.titulo}>
           <h1>La Familia Neggo</h1>
       </div>
       <div className={styles.image_container}>
           <div className={styles.imagen}>
               <img src={jeison} alt="" />
               <div className={styles.borroso}></div>
               <h3 className={styles.nombre_imagen}>Jheison Castaño Flórez</h3>
                <h4 className={styles.ceo_imagen}>CEO & Funder Neggo</h4>
                <button className={styles.boton_imagen}>Contactame</button>
           </div>
           <div  className={styles.imagen}>
               <img src={jeison} alt="" />
               <div className={styles.borroso}></div>
               <h3 className={styles.nombre_imagen}>Jheison Castaño Flórez</h3>
                <h4  className={styles.ceo_imagen}>CEO & Funder Neggo</h4>
                <button className={styles.boton_imagen}>Contactame</button>
           </div>
           <div className={styles.imagen}>
               <img src={jeison} alt="" />
               <div className={styles.borroso}></div>
               <h3 className={styles.nombre_imagen}>Jheison Castaño Flórez</h3>
                <h4 className={styles.ceo_imagen}>CEO & Funder Neggo</h4>
                <button className={styles.boton_imagen}>Contactame</button>
           </div>
           <div className={styles.imagen}>
               <img src={jeison} alt="" />
               <div className={styles.borroso}></div>
               <h3 className={styles.nombre_imagen}>Jheison Castaño Flórez</h3>

                <h4 className={styles.ceo_imagen}>CEO & Funder Neggo</h4>
                
            

                <button className={styles.boton_imagen}>Contactame</button>
                
           </div> 
           <div className={styles.imagen}>
               <img src={jeison} alt="" />
               <div className={styles.borroso}></div>
               <h3 className={styles.nombre_imagen}>Jheison Castaño Flórez</h3>
                <h4 className={styles.ceo_imagen}>CEO & Funder Neggo</h4>
                <button className={styles.boton_imagen}>Contactame</button>
           </div>
       </div>
      </div>
     </div>
     <div className={styles.footer_mision}>
         <Footer/>
     </div>
     

    </>
  )
}

export default Mision;