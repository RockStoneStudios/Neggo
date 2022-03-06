import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import styles from './Blog.module.css';
const Blog = () => {
  return (
      <>
     <Navbar/>
    <div className={styles.blog_container}>
        
        <div className={styles.sidebar}>
            <h2>Categorias</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Tecnologia</li>
                <li className={styles.listItem}>Inversion</li>
                <li className={styles.listItem}>Ahorro</li>
                <li className={styles.listItem}>Crédito</li>
                <li className={styles.listItem}>Dinero</li>
            </ul>
            
        </div>
        <div className={styles.blog}>
            <h2>Blog</h2>
            <div className={styles.blogItem}>
                <div className={styles.img_container}>
                  <img src={blog1} alt= ""/>
                  <h3>Dia mundial del Ahorro</h3>
                </div>
                 <div className={styles.img_container}>
                    <img src={blog2} alt= ""/>
                    <h3>Una cita con el dinero</h3>
                 </div>
                 <div className={styles.img_container}>
                   <img src={blog3} alt= ""/>
                   <h3>Pagos con QR</h3>
                 </div>
                 <div className={styles.img_container}>
                  <img src={blog1} alt= ""/>
                  <h3>Dia mundial del Ahorro</h3>
                </div>
                 <div className={styles.img_container}>
                    <img src={blog2} alt= ""/>
                    <h3>Una cita con el dinero</h3>
                 </div>
                 <div  className={styles.img_container}>
                   <img src={blog3} alt= ""/>
                   <h3>Pagos con QR</h3>
                 </div>
                 <div className={styles.img_container}>
                  <img src={blog1} alt= ""/>
                  <h3>Dia mundial del Ahorro</h3>
                </div>
                <div className={styles.img_container}>
                    <img src={blog2} alt= ""/>
                    <h3>Una cita con el dinero</h3>
                 </div>
                 <div  className={styles.img_container}>
                   <img src={blog3} alt= ""/>
                   <h3>Pagos con QR</h3>
                 </div>
                 <button className={styles.boton}>Cargar más...</button>
            </div>
        </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default Blog;