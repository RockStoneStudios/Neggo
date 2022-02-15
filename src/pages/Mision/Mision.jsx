import './mision.css';
import mision from '../../assets/mision.png';
import vision from '../../assets/vision.png';
import jeison from '../../assets/jeison.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Mision = () => {
  return (
    <>
      <Navbar/>
     <div className='mision-container'>
       <div className='contenido-principal'>
           <div className='imagenes-container'>
                <img src={mision} alt="" />
                <img src={vision} alt="" />
            </div>
            <div className='intermedio'></div>
            <div className='contenedor-Texto'>
            <div className='texto-container'>
                <h2 className='historia'>Historia</h2>
                 <div className='container-parrafo'>
                    <p className='texto-historia'>
                        En el año 2018, nace en medellin con la idea de llevar productos y servicios financieros personalizados que faciliten la administarcion de nuestro dinero. A su vez comienza el trabajo por crear un lugar donde la educacion financiera sea un pilar fundamental para la inclucion financiera de America Latina.
                    </p>
                 </div>
            </div>
            <div className='texto-container'>
                <h2 className='historia'>Mision</h2>
                <div className='container-parrafo'>
                    <p className='texto-historia'>
                        Neggo es una organizacion que usa la tecnologia para desarrollar productos y servicios financieros creando un valor en la educacion e inclusion financiera en latinoamerica. Buscamos acercar las personas al sector financiero creando un canal donde nosotros tomemos el control de nuestro dinero.
                    </p>
                </div>
            </div>
            <div className='texto-container'>
                <h2 className='historia'>Vision</h2>
                <div className='container-parrafo'>
                <p className='texto-historia'>
                    Para el año 2022, seremos un emprendimiento colombiano en crecimiento continuo creando soluciones en productos y servicios financieros para la poblacion latina mediante el uso de la tecnologia. Nuestros valores : Transparencia , Lealtad, Gratitud , Empatia 
                </p>
                </div>
            </div>
            </div>
       </div>

     <div className='familia'>
       <div className='titulo'>
           <h1>La Familia Neggo</h1>
       </div>
       <div className="image-container">
           <div className='imagen'>
               <img src={jeison} alt="" />
               <div className='borroso'></div>
               <h3 className='nombre-imagen'>Jheison Castaño Flórez</h3>
                <h4 className='ceo-imagen'>CEO & Funder Neggo</h4>
                <button className='boton-imagen'>Contactame</button>
           </div>
           <div className='imagen'>
               <img src={jeison} alt="" />
               <div className='borroso'></div>
               <h3 className='nombre-imagen'>Jheison Castaño Flórez</h3>
                <h4 className='ceo-imagen'>CEO & Funder Neggo</h4>
                <button className='boton-imagen'>Contactame</button>
           </div>
           <div className='imagen'>
               <img src={jeison} alt="" />
               <div className='borroso'></div>
               <h3 className='nombre-imagen'>Jheison Castaño Flórez</h3>
                <h4 className='ceo-imagen'>CEO & Funder Neggo</h4>
                <button className='boton-imagen'>Contactame</button>
           </div>
           <div className='imagen'>
               <img src={jeison} alt="" />
               <div className='borroso'></div>
               <h3 className='nombre-imagen'>Jheison Castaño Flórez</h3>

                <h4 className='ceo-imagen'>CEO & Funder Neggo</h4>
                
            

                <button className='boton-imagen'>Contactame</button>
                
           </div> <div className='imagen'>
               <img src={jeison} alt="" />
               <div className='borroso'></div>
               <h3 className='nombre-imagen'>Jheison Castaño Flórez</h3>
                <h4 className='ceo-imagen'>CEO & Funder Neggo</h4>
                <button className='boton-imagen'>Contactame</button>
           </div>
       </div>
      </div>
     </div>
     <h1>Hello</h1>
    <Footer/>
    </>
  )
}

export default Mision;